import { format } from "date-fns";
import { FuzzyDate, MediafieldsFragment } from "../graphql/types/graphql";

export const getAiredDate = (
  startDate: FuzzyDate | null | undefined,
  endDate: FuzzyDate | null | undefined
) => {
  const formatDate = (date: FuzzyDate | null | undefined) => {
    if (!date || date.year == null) return null;

    const year = date.year;
    const month = date.month != null ? date.month - 1 : 0;
    const day = date.day != null ? date.day : 1;
    return new Date(year, month, day);
  };

  const start = formatDate(startDate);
  const end = formatDate(endDate);

  if (!start) return "Unknown";

  const startFormatted = format(start, "MMM d, yyyy");
  const endFormatted = end ? format(end, "MMM d, yyyy") : "Present";

  return `${startFormatted} to ${endFormatted}`;
};

export const getTimeDuration = (
  duration: number | null | undefined
): string => {
  const minutes = duration || 0;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (!hours && !remainingMinutes) {
    return "";
  } else if (!hours && remainingMinutes) {
    return `${remainingMinutes}min`;
  } else {
    return `${hours}hr ${remainingMinutes}min`;
  }
};

export const generateLinkPath = (text: string) =>
  text.toLowerCase() === "home" ? "/" : text.toLowerCase().split(" ").join("-");
