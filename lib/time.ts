export function parseTime(timeStr: string): number {
  const match = timeStr.match(/^(\d+(?:\.\d+)?)(s|m|h|ms)?$/i);

  if (!match) {
    const numValue = parseFloat(timeStr);
    if (isNaN(numValue)) {
      throw new Error('Invalid time format');
    }
    return numValue * 1000;
  }

  const value = parseFloat(match[1]);
  const unit = match[2]?.toLowerCase() || 's';

  switch (unit) {
    case 'ms':
      return value;
    case 's':
      return value * 1000;
    case 'm':
      return value * 60 * 1000;
    case 'h':
      return value * 60 * 60 * 1000;
    default:
      return value * 1000;
  }
}

export function formatTime(ms: number): string {
  if (ms < 1000) {
    return `${ms}ms`;
  } else if (ms < 60000) {
    return `${ms / 1000}s`;
  } else if (ms < 3600000) {
    return `${ms / 60000}m`;
  } else {
    return `${ms / 3600000}h`;
  }
}

export function getTimeDescription(timeStr: string): { ms: number; formatted: string; original: string } {
  const ms = parseTime(timeStr);
  const formatted = formatTime(ms);
  return { ms, formatted, original: timeStr };
}
