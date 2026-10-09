import moment from "moment-timezone";

/**
 * Format seconds into a human-readable duration string (HH:MM:SS)
 */
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours > 0 ? `${hours}:` : '';
  const formattedMinutes = minutes < 10 && hours > 0 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
}

/**
 * Relative time followed by the exact time, e.g. "3 hours ago · Oct 9, 2026 2:05 PM",
 * in the same zone and format ReadOnlyField uses for DateTimeFields.
 */
export function formatTimestamp(value: moment.MomentInput): string {
  const when = moment(value);
  return `${when.fromNow()} · ${when.tz("Europe/Copenhagen").format("lll")}`;
}
