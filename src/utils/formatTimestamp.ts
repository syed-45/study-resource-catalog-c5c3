import { format, parseISO } from "date-fns";
export function formatTimestamp(timestamp: string): string {
  const formattedTimeStamp = format(parseISO(timestamp), "MMM d 'at' h:m a");
  return formattedTimeStamp;
}
