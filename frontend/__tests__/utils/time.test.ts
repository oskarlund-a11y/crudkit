import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { formatTimestamp } from '../../utils/time';

describe('formatTimestamp', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-10-09T15:00:00Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('shows the relative time and the exact Copenhagen time', () => {
    expect(formatTimestamp('2026-10-09T12:05:00Z')).toBe('3 hours ago · Oct 9, 2026 2:05 PM');
  });
});
