// @param minutes - coming as minutes e.g. 323.15
export const convertMinutesToHM = minutes => {
  let hrs = Math.floor(minutes / 60);
  let mins = Math.floor(minutes % 60);

  let result = [];
  if (hrs > 0) result.push(`${hrs} <sup>H</sup>`);
  if (mins > 0) result.push(`${mins} <sup>M</sup>`);

  return result.join(' ');
}
