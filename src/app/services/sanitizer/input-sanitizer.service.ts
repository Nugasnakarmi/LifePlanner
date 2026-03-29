import { Injectable } from '@angular/core';

/**
 * Centralized service for sanitizing user input before it is persisted to
 * the database.  Strips HTML/script tags to prevent stored cross-site
 * scripting (XSS) attacks as a defence-in-depth measure alongside Angular's
 * built-in output encoding.
 *
 * SQL injection is already mitigated by the Supabase JS client which uses
 * parameterised queries; the sanitiser adds an extra layer of protection
 * against malicious markup reaching the data store.
 */
@Injectable({ providedIn: 'root' })
export class InputSanitizerService {
  /**
   * Matches actual HTML/XML-like tags — an opening `<` followed by an
   * optional `/` and then a letter (tag name start), or `<` followed by `!`
   * (comments / doctypes).  This avoids stripping legitimate angle-bracket
   * text such as `5 < 10 and 10 > 5`.
   */
  private static readonly TAG_RE = /<\/?[a-zA-Z!][^>]*>/g;

  /**
   * Strips all HTML tags from a string value.
   *
   * - For `string` input, returns the sanitized string.
   * - For `null` / `undefined`, returns the value as-is so that callers
   *   (e.g. Supabase update payloads) can omit fields by using `undefined`
   *   instead of overwriting them with an empty string.
   */
  sanitize(value: null): null;
  sanitize(value: undefined): undefined;
  sanitize(value: string): string;
  sanitize(value: string | null | undefined): string | null | undefined;
  sanitize(value: string | null | undefined): string | null | undefined {
    if (value == null) {
      return value;
    }
    if (typeof value !== 'string') {
      return value;
    }
    // Iteratively strip tags to handle nested tag injection such as
    // `<scr<script>ipt>alert(1)</script>`.
    let result = value;
    let prev: string;
    do {
      prev = result;
      result = result.replace(InputSanitizerService.TAG_RE, '');
    } while (result !== prev);
    return result;
  }

  /**
   * Sanitizes every string-valued property of a shallow object.
   * Non-string values (numbers, booleans, arrays, nested objects) are passed
   * through unchanged.  Deep/recursive sanitization is intentionally avoided
   * to prevent unintended data corruption in complex structures (e.g. media
   * arrays, JSONB payloads); callers should use {@link sanitizeDataFields}
   * for known nested structures.
   */
  sanitizeObject<T extends Record<string, any>>(obj: T): T {
    if (!obj || typeof obj !== 'object') {
      return obj;
    }
    const result = { ...obj };
    for (const key of Object.keys(result)) {
      if (typeof result[key] === 'string') {
        (result as any)[key] = this.sanitize(result[key]);
      }
    }
    return result;
  }

  /**
   * Sanitizes an array of data-field objects that each have `key` and `value`
   * string properties (e.g. `ActivityDataField`).
   *
   * Returns `undefined` when the input is `null` or `undefined` so that
   * update payloads can omit the field instead of overwriting existing data
   * with an empty array.
   */
  sanitizeDataFields<T extends { key: string; value: string }>(
    fields: T[]
  ): T[];
  sanitizeDataFields<T extends { key: string; value: string }>(
    fields: null | undefined
  ): undefined;
  sanitizeDataFields<T extends { key: string; value: string }>(
    fields: T[] | null | undefined
  ): T[] | undefined;
  sanitizeDataFields<T extends { key: string; value: string }>(
    fields: T[] | null | undefined
  ): T[] | undefined {
    if (!Array.isArray(fields)) {
      return undefined;
    }
    return fields.map((f) => ({
      ...f,
      key: this.sanitize(f.key),
      value: this.sanitize(f.value),
    }));
  }
}
