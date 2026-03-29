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
  /** Regex that matches any HTML/XML tag. */
  private static readonly TAG_RE = /<[^>]*>/g;

  /**
   * Strips all HTML tags from a string value.
   * Returns an empty string for nullish or non-string input.
   */
  sanitize(value: string | null | undefined): string {
    if (value == null || typeof value !== 'string') {
      return '';
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
   */
  sanitizeDataFields<T extends { key: string; value: string }>(
    fields: T[] | null | undefined
  ): T[] {
    if (!Array.isArray(fields)) {
      return [];
    }
    return fields.map((f) => ({
      ...f,
      key: this.sanitize(f.key),
      value: this.sanitize(f.value),
    }));
  }
}
