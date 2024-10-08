import moment from 'moment';

// Format Duration
export const formatDurationHTML = (durationInSeconds, shorthand = true, isHtml = true) => {
  durationInSeconds = Math.floor(durationInSeconds);

  if (durationInSeconds === 0)
    return isHtml ? `0 <sup>${shorthand ? "h" : "hours"}</sup>` : `0 ${shorthand ? "h" : "hours"}`;

  const negative = durationInSeconds < 0;
  const absoluteSeconds = Math.abs(durationInSeconds);

  const duration = moment.duration(absoluteSeconds, "seconds");
  const { months, days, hours, minutes, seconds } = duration._data;
  const monthLabel = shorthand ? "m" : "months";
  const dayLabel = shorthand ? "d" : "days";
  const hourLabel = shorthand ? "h" : "hours";
  const minuteLabel = shorthand ? "min" : "minutes";
  const secondLabel = shorthand ? "s" : "seconds";

  const formatLabel = label => (isHtml ? `<sup> ${label}</sup>` : ` ${label}`);

  const formattedDurationHTML = [
    months && `${months}${formatLabel(monthLabel)}`,
    days && `${days}${formatLabel(dayLabel)}`,
    hours && `${hours}${formatLabel(hourLabel)}`,
    minutes && `${minutes}${formatLabel(minuteLabel)}`,
    seconds && `${seconds}${formatLabel(secondLabel)}`
  ]
    .filter(Boolean)
    .join(" ");

  if (negative) return "-";
  if (!formattedDurationHTML && durationInSeconds > 0)
    return `${durationInSeconds}${formatLabel(secondLabel)}`;
  else return "" + (formattedDurationHTML || `0${formatLabel(dayLabel)}`);
}

export const formatDurationHTMLInHour = (durationInSeconds, shorthand = true, isHtml = true) => {
  durationInSeconds = Math.floor(durationInSeconds);

  // If the input is 0, return 0 hours
  if (durationInSeconds === 0)
    return isHtml ? `0 <sup>${shorthand ? "h" : "hours"}</sup>` : `0 ${shorthand ? "h" : "hours"}`;

  // Determine if the value is negative
  const negative = durationInSeconds < 0;
  const absoluteSeconds = Math.abs(durationInSeconds);

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(absoluteSeconds / 3600);
  const minutes = Math.floor((absoluteSeconds % 3600) / 60);
  const seconds = absoluteSeconds % 60;

  // Define shorthand/full labels
  const hourLabel = shorthand ? "h" : "hours";
  const minuteLabel = shorthand ? "min" : "minutes";
  const secondLabel = shorthand ? "s" : "seconds";

  // Format the label for HTML or plain text
  const formatLabel = label => (isHtml ? `<sup> ${label}</sup>` : ` ${label}`);

  // Build the formatted duration, ignoring zero values
  const formattedDurationHTML = [
    hours && `${hours}${formatLabel(hourLabel)}`,
    minutes && `${minutes}${formatLabel(minuteLabel)}`,
    seconds && `${seconds}${formatLabel(secondLabel)}`
  ]
    .filter(Boolean)
    .join(" ");

  // If negative, prepend '-' sign
  return negative ? `-${formattedDurationHTML}` : formattedDurationHTML;
};

// Format Distance
export const formatDistanceHTML = (meters = 0, shorthand = true) => {
  meters = Math.floor(meters);

  const negative = meters < 0;
  const absoluteMeters = Math.abs(meters);

  const kilometers = Math.floor(absoluteMeters / 1000);
  const remainingMeters = absoluteMeters % 1000;

  const kmLabel = shorthand ? 'Km' : 'Kilometers';
  const mLabel = shorthand ? 'm' : 'Meters';

  const formattedDistanceHTML = [
    kilometers && `${kilometers.toLocaleString()}<sup> ${kmLabel}</sup>`,
    remainingMeters && `${remainingMeters.toLocaleString()}<sup> ${mLabel}</sup>`
  ].filter(Boolean).join(' ');

  return (negative ? '-' : '') + (formattedDistanceHTML || `0 <sup>${mLabel}</sup>`);
};
