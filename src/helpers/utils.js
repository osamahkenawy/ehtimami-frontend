export function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function toHoursAndMinutes(duration) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  return {
    timeHtml: `${hours}<sup>h</sup> ${minutes}<sup>m</sup>`,
  };
}

export function distanceInKm(distance) {
  return distance ? (distance / 1000).toFixed(2) : '0';
}
