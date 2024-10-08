// import {} from 'google-maps'

const _toLatLng = loc => {
  if (typeof loc === 'number' || typeof loc === 'string') return +(loc.toString())
  if (! loc) return { lat: 0, lng: 0 }
  if (typeof loc.lat === 'function') return {
    lat: loc.lat(),
    lng: loc.lng(),
  }
  return { lat: 0, lng: 0 }
}

export const toLatLng = (loc, lng) => {
  const _loc = new google.maps.LatLng(_toLatLng(loc), lng)
  return {
    lat: _loc.lat(),
    lng: _loc.lng(),
  }
}
