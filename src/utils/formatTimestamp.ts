import { format, parseISO } from "date-fns";
import { IResource } from "./interfaces";
export function formatTimestamp(timestamp: string) {
  const formattedTimeStamp = format(parseISO(timestamp), "MMM d 'at' h:m a");
  return formattedTimeStamp;
}
