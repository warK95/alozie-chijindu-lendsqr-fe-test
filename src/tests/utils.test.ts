import { describe, it, expect } from 'vitest';
import { formatCurrency, getStatusClass, generatePageNumbers } from '../utils';

// ─── formatCurrency ──────────────────────────────────────────────────────────

describe('formatCurrency', () => {
  // Positive scenarios testing
  it('formats a whole number with ₦ prefix and two decimal places', () => {
    expect(formatCurrency(200000)).toBe('₦200,000.00');
  });

  it('formats a small amount correctly', () => {
    expect(formatCurrency(5000)).toBe('₦5,000.00');
  });

  it('formats zero as ₦0.00', () => {
    expect(formatCurrency(0)).toBe('₦0.00');
  });

  it('formats a large amount with correct thousand separators', () => {
    expect(formatCurrency(1500000)).toBe('₦1,500,000.00');
  });

  it('formats a decimal amount rounded to two places', () => {
    expect(formatCurrency(1234.5)).toBe('₦1,234.50');
  });

  // Negative scenarios testing
  it('formats a negative number with a minus sign', () => {
    expect(formatCurrency(-5000)).toContain('-');
    expect(formatCurrency(-5000)).toContain('5,000.00');
  });

  it('does not return an empty string for any numeric input', () => {
    expect(formatCurrency(0)).not.toBe('');
    expect(formatCurrency(99)).not.toBe('');
  });
});

// ─── getStatusClass ───────────────────────────────────────────────────────────

describe('getStatusClass', () => {
  // Positive scenarios testing
  it('returns active class for "Active"', () => {
    expect(getStatusClass('Active')).toBe('status--active');
  });

  it('returns inactive class for "Inactive"', () => {
    expect(getStatusClass('Inactive')).toBe('status--inactive');
  });

  it('returns pending class for "Pending"', () => {
    expect(getStatusClass('Pending')).toBe('status--pending');
  });

  it('returns blacklisted class for "Blacklisted"', () => {
    expect(getStatusClass('Blacklisted')).toBe('status--blacklisted');
  });

  it('is case-insensitive — matches lowercase input', () => {
    expect(getStatusClass('active')).toBe('status--active');
    expect(getStatusClass('pending')).toBe('status--pending');
    expect(getStatusClass('blacklisted')).toBe('status--blacklisted');
  });

  it('is case-insensitive — matches UPPERCASE input', () => {
    expect(getStatusClass('ACTIVE')).toBe('status--active');
    expect(getStatusClass('INACTIVE')).toBe('status--inactive');
  });

  // Negative scenarios testing
  it('returns inactive class as fallback for unknown status', () => {
    expect(getStatusClass('unknown')).toBe('status--inactive');
  });

  it('returns inactive class as fallback for empty string', () => {
    expect(getStatusClass('')).toBe('status--inactive');
  });

  it('returns inactive class as fallback for a numeric-like string', () => {
    expect(getStatusClass('123')).toBe('status--inactive');
  });
});

// ─── generatePageNumbers ──────────────────────────────────────────────────────

describe('generatePageNumbers', () => {
  // Positive scenarios testing — small page counts
  it('returns every page when total is 5 or fewer', () => {
    expect(generatePageNumbers(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('returns every page when total equals 7 (boundary)', () => {
    expect(generatePageNumbers(1, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('shows leading pages and ellipsis when current page is near the start', () => {
    const result = generatePageNumbers(2, 16);
    expect(result[0]).toBe(1);
    expect(result).toContain('...');
    expect(result[result.length - 1]).toBe(16);
  });

  it('shows trailing pages and ellipsis when current page is near the end', () => {
    const result = generatePageNumbers(15, 16);
    expect(result[0]).toBe(1);
    expect(result).toContain('...');
    expect(result[result.length - 1]).toBe(16);
  });

  it('shows ellipsis on both sides when current page is in the middle', () => {
    const result = generatePageNumbers(8, 16);
    expect(result[0]).toBe(1);
    expect(result[result.length - 1]).toBe(16);
    const dotCount = result.filter((v) => v === '...').length;
    expect(dotCount).toBe(2);
  });

  it('always includes the first and last page', () => {
    [1, 5, 8, 12, 16].forEach((current) => {
      const result = generatePageNumbers(current, 16);
      expect(result[0]).toBe(1);
      expect(result[result.length - 1]).toBe(16);
    });
  });

  it('includes the current page in the output', () => {
    const result = generatePageNumbers(8, 16);
    expect(result).toContain(8);
  });

  // Negative scenarios testing
  it('returns [1] for a single page', () => {
    expect(generatePageNumbers(1, 1)).toEqual([1]);
  });

  it('does not return more than 7 elements for a large page count', () => {
    const result = generatePageNumbers(50, 100);
    expect(result.length).toBeLessThanOrEqual(7);
  });

  it('never places two consecutive ellipsis entries', () => {
    const result = generatePageNumbers(8, 20);
    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i] === '...' && result[i + 1] === '...').toBe(false);
    }
  });
});