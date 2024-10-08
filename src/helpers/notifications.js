import { ICONS } from "@/components/elements/AnimatedIcon/icons"

const NOTIFICATION = { // { [key]: { icon: ICONS.xxxx, color: 'red', disabled: true, } }
  trip_delayed: { icon: ICONS.TRACK_ORDER, color: 'red', },
  trip: { icon: ICONS.TRACK_ORDER, color: 'blue' },
  geofence: { icon: ICONS.SITE_MAP, color: 'red', },
  expense: { icon: ICONS.DOLLAR_BAG, color: 'red', },
  wrong_pick_up: { icon: ICONS.PICK_UP, color: 'red', },
}

export const getNotificationType = type => {
  const data = NOTIFICATION[type]
  if (data) return `notification.${type}`
  return type
}

export const getNotificationIcon = type => {
  const data = NOTIFICATION[type]
  if (data) return data.icon
  return ''
}

export const getNotificationColor = type => {
  const data = NOTIFICATION[type]
  if (data) return data.color
  return 'blue'
}

export const disabledNotification = type => {
  const data = NOTIFICATION[type]
  if (data) return !!data.disabled
  return false
}
