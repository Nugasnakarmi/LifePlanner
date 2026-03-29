import { TestBed } from '@angular/core/testing';
import { InputSanitizerService } from './input-sanitizer.service';

describe('InputSanitizerService', () => {
  let service: InputSanitizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputSanitizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // ── sanitize() ──────────────────────────────────────────────────────────

  describe('sanitize', () => {
    it('should return null for null input', () => {
      expect(service.sanitize(null)).toBeNull();
    });

    it('should return undefined for undefined input', () => {
      expect(service.sanitize(undefined)).toBeUndefined();
    });

    it('should pass through non-string input unchanged', () => {
      expect(service.sanitize(42 as any)).toBe(42 as any);
    });

    it('should leave plain text unchanged', () => {
      expect(service.sanitize('Hello World')).toBe('Hello World');
    });

    it('should strip simple HTML tags', () => {
      expect(service.sanitize('<b>bold</b>')).toBe('bold');
    });

    it('should strip script tags and their content marker', () => {
      expect(service.sanitize('<script>alert("xss")</script>')).toBe('alert("xss")');
    });

    it('should strip tags with attributes', () => {
      expect(service.sanitize('<img src=x onerror=alert(1)>')).toBe('');
    });

    it('should strip nested/recursive tag injection', () => {
      expect(service.sanitize('<scr<script>ipt>alert(1)</script>')).toBe('ipt>alert(1)');
    });

    it('should handle multiple tags in a string', () => {
      expect(service.sanitize('Hello <b>World</b> <i>!</i>')).toBe('Hello World !');
    });

    it('should handle self-closing tags', () => {
      expect(service.sanitize('Line 1<br/>Line 2')).toBe('Line 1Line 2');
    });

    it('should handle empty string', () => {
      expect(service.sanitize('')).toBe('');
    });

    it('should handle string with only spaces', () => {
      expect(service.sanitize('   ')).toBe('   ');
    });

    it('should preserve legitimate angle-bracket math/comparison text', () => {
      expect(service.sanitize('5 < 10 and 10 > 5')).toBe('5 < 10 and 10 > 5');
    });

    it('should strip event handler tags', () => {
      expect(service.sanitize('<div onmouseover="alert(1)">text</div>')).toBe('text');
    });

    it('should strip SVG-based XSS', () => {
      expect(service.sanitize('<svg onload=alert(1)>')).toBe('');
    });

    it('should strip HTML comments', () => {
      expect(service.sanitize('before<!-- comment -->after')).toBe('beforeafter');
    });
  });

  // ── sanitizeObject() ───────────────────────────────────────────────────

  describe('sanitizeObject', () => {
    it('should sanitize all string values', () => {
      const input = { name: '<b>Test</b>', count: 5, active: true };
      const result = service.sanitizeObject(input);
      expect(result.name).toBe('Test');
      expect(result.count).toBe(5);
      expect(result.active).toBe(true);
    });

    it('should return same reference type for null input', () => {
      expect(service.sanitizeObject(null as any)).toBeNull();
    });

    it('should not modify the original object', () => {
      const input = { name: '<b>Test</b>' };
      service.sanitizeObject(input);
      expect(input.name).toBe('<b>Test</b>');
    });
  });

  // ── sanitizeDataFields() ──────────────────────────────────────────────

  describe('sanitizeDataFields', () => {
    it('should sanitize key and value strings', () => {
      const fields = [
        { key: '<b>Label</b>', value: '<img src=x onerror=alert(1)>payload' },
        { key: 'Normal', value: 'Safe' },
      ];
      const result = service.sanitizeDataFields(fields);
      expect(result[0].key).toBe('Label');
      expect(result[0].value).toBe('payload');
      expect(result[1].key).toBe('Normal');
      expect(result[1].value).toBe('Safe');
    });

    it('should return undefined for null', () => {
      expect(service.sanitizeDataFields(null)).toBeUndefined();
    });

    it('should return undefined for undefined', () => {
      expect(service.sanitizeDataFields(undefined)).toBeUndefined();
    });
  });
});
