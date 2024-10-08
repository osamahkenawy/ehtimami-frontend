import { ICONS } from "@/components/elements/AnimatedIcon/icons"
import moment from "moment-timezone"
import humanizeDuration from "humanize-duration"

// https://wiki.teltonika-gps.com/view/FMC125_Teltonika_Data_Sending_Parameters_ID [ sensor information ]

const getDuration = val => moment.utc(moment.duration(val || 0)).format('HH[h] mm[m] ss[s]')

const success = 'text-success'
const error = 'text-error'
const warning = 'text-warning'
const inactive = 'text-muted'
export const SENSOR_LOCATION = {
  DISABLED: 'disabled',
  SENSORS: 'sensors',
  DASHBOARD: 'dashboard',
  PROFILE: 'profile',
}


/**
 * Store the list of sensor ids which are the only ones need to be displayed.
 * if empty all other ids other than the one in the disabled will be displayed.
 * @type {array} array of integer ids
 */
const enabledSensors = [
  239, 240, 80, 21, 12, 78, 207, 138, 237, 8, 263, 406, 251,
  16, 66, 67 , // demo 
  81, 82, 83, 84, 89, 85, 87, 388, 105, 107, 115, 282, 25,86,90020,90021,
  90018,90019,
  256,31 , 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 90000, 90001, 90002, 90003, 90004, 90005, 90006, 90007,90008,90009,
  // computed sensors
 6 

//  90 Door Sensor Comment
] // enabled as per the sheet.

/**
 * Stores the list of sensors that needs be excluded from displaying.
 * @type {array} array of integer ids
 */
const disabledSensors = [
  205, 206, 1, 179, 10, 2, 3, 180, 68,
  100, 113, 152, 78,
  69, 181, 182, 101, 105, 13, 232, 233, 234, 200,
  80, 207, 282, 31, 78, 388, 240, // hide for demo
] // disabled as per the sheet

const computeSensorsDoor = val => {
  // const doors = {
  //   256: 'CLOSED',
  //   512: 'CLOSED',
  //   1024: 'CLOSED',
  //   2048: 'CLOSED',
  //   4096: 'CLOSED',
  //   8192: 'CLOSED',
  // }
  // const mapping = {
  //   256: 'DOORS.FRONT_LEFT',
  //   512: 'DOORS.FRONT_RIGHT',
  //   1024: 'DOORS.REAR_LEFT',
  //   2048: 'DOORS.REAR_RIGHT',
  //   4096: 'DOORS.HOOD',
  //   8192: 'DOORS.TRUNK',
  // }
  // const mapped = {}
  // for (const key in doors) {
  //   mapped[mapping[key]] = '<span class="green--text">CLOSED</span>' // reset
  // }
  const mapping = {
    256: { key: 256, value: require('../assets/images/doot-staus/l-front.svg') },
    512: { key: 512, value: require('../assets/images/doot-staus/r-front.svg') },
    1024: { key: 1024, value: require('../assets/images/doot-staus/l-back.svg') },
    2048: { key: 2048, value: require('../assets/images/doot-staus/r-back.svg') },
    4096: { key: 4096, value: require('../assets/images/doot-staus/hood.svg') },
    8192: { key: 8192, value: require('../assets/images/doot-staus/trunk.svg') },
  }
  const mapped = [
    { key: 0, value: require('../assets/images/doot-staus/base.svg') },
  ]
  if (!val) return mapped
  const avialble_doors = [
    8192, 4096, 2048, 1024, 512, 256
  ]
  for (const avail of avialble_doors) {
    if (val == avail) {
      // mapped[mapping[avail]] = '<span class="red--text">OPEN</span>'
      mapped.push(mapping[avail])
      break // found the exact value
    }
    else if (val > avail) {
      // mapped[mapping[avail]] = '<span class="red--text">OPEN</span>'
      mapped.push(mapping[avail])
      val = val - avail
    }
  }
  return mapped
}

const SENSORS = {
  239: { icon: ICONS.ELECTRIC_POWER, formatter: val => val == 1 ? 'On' : 'Off', class: val => val == 1 ? success : inactive, },
  240: { icon: ICONS.CHEVRON_UP, formatter: val => val == 1 ? 'On' : 'Off', class: val => val == 1 ? success : warning, },
  80: { icon: ICONS.SIGNAL_STREAMS, formatter: val => (([ 'Home On Stop', 'Home on Moving', 'Roaming On Stop', 'Roaming On Moving', 'Unknown On Stop', 'Unknown On Moving' ])[val]), class: val => (([ warning, success, warning, success, warning, success ])[val]) || val, },
  21: { icon: ICONS.SIGNAL_STREAMS, formatter: val => (([ 'Bad', 'Moderate', 'Average', 'Good', 'Very Good', 'Excellent' ])[val || 1]), location: SENSOR_LOCATION.DASHBOARD },
  200: { icon: ICONS.SLEEPY_DRIVER, formatter: val => (([ 'No Sleep', 'GPS Sleep', 'Deep Sleep', 'Online Sleep', 'Ultra Sleep' ])[val]) || val, },
  69: { icon: ICONS.SATELLITE, formatter: val => (([ 'GNSS OFF', 'GNSS ON with fix', 'GNSS ON without fix', 'GNSS Sleep' ])[val]) || val, },
  181: { icon: ICONS.SATELLITE, formatter: val => val, },
  182: { icon: ICONS.SATELLITE, formatter: val => val, },
  66: { icon: ICONS.CAR_BATTERY, formatter: val => `${parseFloat((val || 0)).toFixed(2).toLocaleString()} V`, location: SENSOR_LOCATION.DASHBOARD, },
  205: { icon: ICONS.SIGNAL_STREAMS, formatter: val => val, },
  206: { icon: ICONS.SIGNAL_STREAMS, formatter: val => val, },
  67: { icon: ICONS.CAR_BATTERY, formatter: val => `${parseFloat((val || 0)).toFixed(2).toLocaleString()} V`, location: SENSOR_LOCATION.DASHBOARD, },
  68: { icon: ICONS.ELECTRIC_POWER, formatter: val => `${parseFloat((val || 0)).toFixed(2).toLocaleString()} A`, },
  241: { icon: ICONS.SIGNAL_STREAMS, formatter: val => val, },
  199: { icon: ICONS.SPEEDOMETER, formatter: val => `${parseFloat((val || 0) / 1000).toFixed(0).toLocaleString()} Km`, },
  16: { icon: ICONS.SPEEDOMETER, formatter: val => `${parseFloat((val || 0) / 1000).toFixed(0).toLocaleString()} Km`, location: SENSOR_LOCATION.DASHBOARD},
  1: { icon: ICONS.SPEEDOMETER, formatter: val => val, }, 
  179: { icon: ICONS.SPEEDOMETER, formatter: val => val == 1 ? 'ON' : 'OFF', },
  12: { icon: ICONS.LOCATION_PIN, formatter: val => `${parseFloat((val || 0) / 1000).toFixed(2).toLocaleString()} L`, location: SENSOR_LOCATION.PROFILE },
  13: { icon: ICONS.LOCATION_PIN, formatter: val => `${parseFloat((val || 0)).toFixed(2).toLocaleString()} L/100Km`, },
  17: { icon: ICONS.CHEVRON_LEFT, formatter: val => `${val} mG`, },
  18: { icon: ICONS.CHEVRON_UP, formatter: val => `${val} mG`, },
  19: { icon: ICONS.CHEVRON_RIGHT, formatter: val => `${val} mG`, },
  11: { icon: ICONS.TECHNOLOGY, formatter: val => val, },
  10: { icon: ICONS.SD_CARD, formatter: val => val == 1 ? 'Present' : 'Not Present', class: val => val == 1 ? success : warning },
  2: { icon: ICONS.COUNTER, formatter: val => val, },
  3: { icon: ICONS.COUNTER, formatter: val => val, },
  6: { icon: ICONS.BURNING_FUEL, formatter: val => `${parseFloat((val || 0) / 10).toFixed(2).toLocaleString()} L`, location: SENSOR_LOCATION.DASHBOARD },  180: { icon: ICONS.DISPLAY, formatter: val => val, },
  72: { icon: ICONS.THERMOMETER, formatter: val => `${parseFloat((val || 0) / 10).toFixed(2).toLocaleString()} ˚C`, },
  73: { icon: ICONS.THERMOMETER, formatter: val => `${parseFloat((val || 0) / 10).toFixed(2).toLocaleString()} ˚C`, },
  74: { icon: ICONS.THERMOMETER, formatter: val => `${parseFloat((val || 0) / 10).toFixed(2).toLocaleString()} ˚C`, },
  75: { icon: ICONS.THERMOMETER, formatter: val => `${parseFloat((val || 0) / 10).toFixed(2).toLocaleString()} ˚C`, },
  76: { icon: ICONS.THERMOMETER, formatter: val => val, },
  77: { icon: ICONS.THERMOMETER, formatter: val => val, },
  79: { icon: ICONS.THERMOMETER, formatter: val => val, },
  71: { icon: ICONS.THERMOMETER, formatter: val => val, },
  78: { icon: ICONS.ZERO_KEY, formatter: val => val, },
  207: { icon: ICONS.WIRELESS_CONNECTION, formatter: val => val, }, 
  201: { icon: ICONS.FUEL_GUAGE, formatter: val => `${val} L`, },
  202: { icon: ICONS.THERMOMETER, formatter: val => `${val} ˚C`, },
  203: { icon: ICONS.FUEL_GUAGE, formatter: val => `${val} L`, },
  204: { icon: ICONS.THERMOMETER, formatter: val => `${val} ˚C`, },
  210: { icon: ICONS.FUEL_GUAGE, formatter: val => `${val} L`, },
  211: { icon: ICONS.THERMOMETER, formatter: val => `${val} ˚C`, },
  212: { icon: ICONS.FUEL_GUAGE, formatter: val => `${val} L`, },
  213: { icon: ICONS.THERMOMETER, formatter: val => `${val} ˚C`, },
  214: { icon: ICONS.FUEL_GUAGE, formatter: val => `${val} L`, },
  215: { icon: ICONS.THERMOMETER, formatter: val => `${val} ˚C`, },
  15: { icon: ICONS.ECO, formatter: val => `${parseFloat((val || 0) / 100).toFixed().toLocaleString()}`, },
  113: { icon: ICONS.CAR_BATTERY, formatter: val => `${val} %`, },
  238: { icon: ICONS.BUSINESS_CARD, formatter: val => val, },
  237: { icon: ICONS.SIGNAL_STREAMS, formatter: val => (([ '3G', 'GSM', '4G', 'LTE CAT M1', 'LTE CAT NB1' ])[val]) || 'Unknown', location: SENSOR_LOCATION.DASHBOARD, },
  8: { icon: ICONS.FINGERPRINT, formatter: val => val, },
  4: { icon: ICONS.TAPPING_FIGERS, formatter: val => val, },
  5: { icon: ICONS.TAPPING_FIGERS, formatter: val => val, },
  263: { icon: ICONS.SMART_CARD, formatter: val => val, },
  264: { icon: ICONS.QR_CODE, formatter: val => val, },
  269: { icon: ICONS.THERMOMETER, formatter: val => `${val} ˚C`, },
  270: { icon: ICONS.FUEL_GUAGE, formatter: val => val, },
  271: { icon: ICONS.BATTERY, formatter: val => `${parseFloat((val || 0) / 100).toFixed(2).toLocaleString()} V`, },
  272: { icon: ICONS.THERMOMETER, formatter: val => `${val} ˚C`, },
  273: { icon: ICONS.FUEL_GUAGE, formatter: val => val, },
  274: { icon: ICONS.BATTERY, formatter: val => `${parseFloat((val || 0) / 100).toFixed(2).toLocaleString()} V`, },
  275: { icon: ICONS.THERMOMETER, formatter: val => `${val} ˚C`, },
  276: { icon: ICONS.FUEL_GUAGE, formatter: val => val, },
  277: { icon: ICONS.BATTERY, formatter: val => `${parseFloat((val || 0) / 100).toFixed(2).toLocaleString()} V`, },
  278: { icon: ICONS.THERMOMETER, formatter: val => `${val} ˚C`, },
  279: { icon: ICONS.FUEL_GUAGE, formatter: val => val, },
  280: { icon: ICONS.BATTERY, formatter: val => `${parseFloat((val || 0) / 100).toFixed(2).toLocaleString()} V`, },
  303: { icon: ICONS.CAR, formatter: val => val, },
  327: { icon: ICONS.FUEL_GUAGE, formatter: val => `${parseFloat((val || 0) / 10).toFixed(2).toLocaleString()} mm`, },
  483: { icon: ICONS.TECHNOLOGY, formatter: val => val, },
  380: { icon: ICONS.COUNTER, formatter: val => val, },
  381: { icon: ICONS.TECHNOLOGY, formatter: val => val, },
  387: { icon: ICONS.BANK_BRANCH, formatter: val => val, },
  636: { icon: ICONS.BROADCAST_TOWER, formatter: val => val, },
  403: { icon: ICONS.DRIVER_LICENSE, formatter: val => val, },
  404: { icon: ICONS.DRIVER_LICENSE, formatter: val => (([ 'None', 'B1', 'B2', 'B3', 'B4', 'T1', 'T2', 'T3', 'T4' ])[val]) || val, },
  405: { icon: ICONS.DRIVER_LICENSE, formatter: val => (([ 'None', 'Male', 'Female' ])[val]) || val, },
  406: { icon: ICONS.DRIVER_LICENSE, formatter: val => (([ 'None', 'Male', 'Female' ])[val]) || val, },
  407: { icon: ICONS.DRIVER_LICENSE, formatter: val => val, },
  408: { icon: ICONS.DRIVER_LICENSE, formatter: val => val, },
  409: { icon: ICONS.DRIVER_LICENSE, formatter: val => (([ 'Registered', 'Deregistered', 'Swapping' ])[val]) || val, },
  155: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  156: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  157: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  158: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  159: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  61: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  62: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  63: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  64: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  65: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  70: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  88: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  91: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  92: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  93: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  94: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  95: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  96: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  97: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  98: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  99: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  153: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  154: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  190: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  191: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  192: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  193: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  194: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  195: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  196: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  197: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  198: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  208: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  209: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  216: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  217: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  218: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  219: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  220: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  221: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  222: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  223: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  224: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  225: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  226: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  227: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  228: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  229: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  230: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  231: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone', 'Over speeding end', 'Over speeding start' ])[val]) || val, },
  175: { icon: ICONS.GLOBE, formatter: val => (([ 'Left Zone', 'Entered Zone' ])[val]) || val, },
  250: { icon: ICONS.TRACK_ORDER, formatter: val => (([ 'Trip Stop', 'Trip Start', 'Business Status', 'Private Status', 'Custom Status', 'Custom Status', 'Custom Status', 'Custom Status', 'Custom Status', 'Custom Status' ])[val]) || val, },
  255: { icon: ICONS.SPEEDOMETER, formatter: val => `${parseFloat(val || 0).toFixed(2)} Km/h`, },
  257: { icon: ICONS.CAR_CRASH, formatter: val => val, },
  285: { icon: ICONS.BEER, formatter: val => val, },
  251: { icon: ICONS.CAR, formatter: val => val == 1 ? 'Idling' : 'Moving', class: val => val == 1 ? warning : success, },
  253: { icon: ICONS.ECO, formatter: val => (([ 'Harsh Acceleration', 'Harsh Braking', 'Harsh cornering' ])[val]) || val, },
  246: { icon: ICONS.CRANE_TRUCK, formatter: val => val == 1 ? 'Towing' : 'Sterady', class: val => val == 1 ? error : success, },
  252: { icon: ICONS.PLUG, formatter: val => val == 1 ? 'Battery unplugged' : 'Battery present', class: val => val == 1 ? warning : success },
  247: { icon: ICONS.CAR_CRASH, formatter: val => (([ 'Real Crash', 'Crash (limited)', 'Crash (limited)', 'Crash', 'Crash', 'Real Crash', 'Fake Crash', 'Fake Crash' ])[val]) || val, class: val => (([ error, warning, warning, error, error, error, warning, warning ])[val]), },
  248: { icon: ICONS.CAR, formatter: val => (([ 'Not connected', 'Immobolizer', 'Authorized Driving' ])[val]) || val, },
  254: { icon: ICONS.ECO, formatter: val => val, },
  249: { icon: ICONS.OPEN_WAREHOUSE, formatter: val => val == 1 ? 'Start' : 'Stop', },
  14: { icon: ICONS.TECHNOLOGY, formatter: val => val, },
  243: { icon: ICONS.ECO, formatter: val => getDuration(val || 0), },
  236: { icon: ICONS.BELL_NOTIFICATION, formatter: val => val == 1 ? 'Triggered' : '', },
  258: { icon: ICONS.ECO, formatter: val => val, },
  259: { icon: ICONS.ECO, formatter: val => val, },
  260: { icon: ICONS.ECO, formatter: val => getDuration(val || 0), },
  283: { icon: ICONS.DRIVER, formatter: val => (([ 'Ignition ON', 'DRIVING', 'Ignition OFF' ])[val]) || val, class: val => (([ success, warning, inactive ])[val]) },
  284: { icon: ICONS.DRIVER, formatter: val => val, },
  391: { icon: ICONS.INCOGNITO, formatter: val => val == 1 ? 'ON' : 'OFF', },
  317: { icon: ICONS.CAR_CRASH, formatter: val => val, },
  449: { icon: ICONS.ELECTRIC_POWER, formatter: val => val == 1 ? 'Enabled' : 'Disabled', },
  256: { icon: ICONS.TAG, formatter: val => val, },
  31: { icon: '', formatter: val => `${val} %`, location: SENSOR_LOCATION.DASHBOARD, },
  32: { icon: ICONS.THERMOMETER, formatter: val => `${val} ˚C`, location: SENSOR_LOCATION.DASHBOARD, },
  33: { icon: ICONS.FUEL_GUAGE, formatter: val => `${val} %`, },
  34: { icon: ICONS.FUEL_GUAGE, formatter: val => `${val} kPa`, },
  35: { icon: '', formatter: val => `${val} kPa`, },
  37: { icon: ICONS.SPEEDOMETER, formatter: val => `${parseFloat(val || 0).toFixed(2)} Km/h`, location: SENSOR_LOCATION.DASHBOARD, },
  38: { icon: ICONS.TIMER, formatter: val => `${val} ˚`, },
  39: { icon: ICONS.THERMOMETER, formatter: val => `${val} ˚C`, },
  40: { icon: '', formatter: val => `${val} g/sec`, },
  41: { icon: ICONS.BREAK_PEDAL, formatter: val => `${val} %`, },
  42: { icon: ICONS.TIMER, formatter: val => `${val} s`, location: SENSOR_LOCATION.DASHBOARD, },
  43: { icon: ICONS.TRACK_ORDER, formatter: val => `${val} km`, location: SENSOR_LOCATION.DASHBOARD, },
  44: { icon: ICONS.FUEL_GUAGE, formatter: val => `${val} kPa`, },
  45: { icon: ICONS.FUEL_GUAGE, formatter: val => `${val} kPa`, },
  46: { icon: ICONS.TECHNOLOGY, formatter: val => `${val} %`, },
  47: { icon: ICONS.TECHNOLOGY, formatter: val => `${val} %`, },
  48: { icon: ICONS.FUEL_GUAGE, formatter: val => `${val} %`, location: SENSOR_LOCATION.DASHBOARD, },
  49: { icon: ICONS.TRACK_ORDER, formatter: val => `${val} km`, },
  50: { icon: '', formatter: val => `${val} kPa`, },
  51: { icon: ICONS.ELECTRIC_POWER, formatter: val => `${parseFloat((val || 0) / 1000).toFixed(2).toLocaleString()} V`, },
  52: { icon: '', formatter: val => `${val} %`, },
  53: { icon: '', formatter: val => `${val} ˚C`, },
  54: { icon: ICONS.TIMER, formatter: val => getDuration((val || 0) * 1000), },
  55: { icon: ICONS.TIMER, formatter: val => val ? moment.duration(val * 1000).humanize() : '', },
  56: { icon: ICONS.FUEL_GUAGE, formatter: val => `${parseFloat((val || 0) / 10).toFixed(2).toLocaleString()} kPa`, },
  57: { icon: ICONS.CAR_BATTERY, formatter: val => `${val} %`, },
  58: { icon: ICONS.ENGINE_OIL, formatter: val => `${val} ˚C`, },
  59: { icon: ICONS.FUEL_GUAGE, formatter: val => `${parseFloat((val || 0) / 100).toFixed(2).toLocaleString()} ˚`, },
  60: { icon: ICONS.FUEL_GUAGE, formatter: val => `${parseFloat((val || 0) / 100).toFixed(2).toLocaleString()} L/100km`, location: SENSOR_LOCATION.DASHBOARD, },
  389: { icon: ICONS.TECHNOLOGY, formatter: val => val, },
  390: { icon: ICONS.TECHNOLOGY, formatter: val => val, },
  81: { icon: ICONS.SPEEDOMETER, formatter: val => `${parseFloat(val || 0).toFixed(2)} km/h`, location: SENSOR_LOCATION.DASHBOARD, },
  82: { icon: ICONS.BREAK_PEDAL, formatter: val => `${val} %`, location: SENSOR_LOCATION.DASHBOARD },
  83: { icon: ICONS.BURNING_FUEL, formatter: val => `${parseFloat((val || 0)).toFixed(2).toLocaleString()} L`, location: SENSOR_LOCATION.PROFILE, },
  84: { icon: ICONS.FUEL_GUAGE, formatter: val => `${parseFloat((val || 0)).toFixed(2).toLocaleString()} L`, location: SENSOR_LOCATION.DASHBOARD, },
  85: { icon: ICONS.SPEEDOMETER, formatter: val => `${(val || 0).toLocaleString()} rpm`, location: SENSOR_LOCATION.DASHBOARD, },
  87: { icon: ICONS.SPEEDOMETER, formatter: val => `${parseFloat((val || 0) / 1000).toFixed(2)} Km`, location: SENSOR_LOCATION.DASHBOARD, },
  89: { icon: ICONS.FUEL_GUAGE, formatter: val => `${val} %`, location: SENSOR_LOCATION.DASHBOARD, },
  // 90: { icon: ICONS.DOOR_LOCK, formatter: computeSensorsDoor, }, // detailed information available COmmentedForNow
  100: { icon: ICONS.LICENSE_PLATE, formatter: val => val, },
  101: { icon: ICONS.TECHNOLOGY, formatter: val => val, },
  388: { icon: ICONS.TECHNOLOGY, formatter: val => val, },
  102: { icon: ICONS.TIMER, formatter: val => getDuration((val || 0) * 1000), },
  103: { icon: ICONS.TIMER, formatter: val => getDuration((val || 0) * 1000), },
  105: { icon: ICONS.FUEL_GUAGE, formatter: val => `${parseFloat((val || 0) / 1000).toFixed(2).toLocaleString()} Km`, },
  107: { icon: ICONS.BURNING_FUEL, formatter: val => `${parseFloat((val || 0)).toFixed(2).toLocaleString()} L`, location: SENSOR_LOCATION.DASHBOARD },
  110: { icon: ICONS.FUEL_GUAGE, formatter: val => `${parseFloat((val || 0)).toFixed().toLocaleString()} L/h`, },
  111: { icon: ICONS.TECHNOLOGY, formatter: val => `${val} %`, },
  112: { icon: ICONS.TECHNOLOGY, formatter: val => `${parseFloat((val || 0)).toFixed(2).toLocaleString()} L`, },
  114: { icon: '', formatter: val => `${val} %`, },
  115: { icon: ICONS.THERMOMETER, formatter: val => `${(val === undefined || val ==null) ? 'N/A' : parseFloat((val)).toFixed(2).toLocaleString()} ˚C`, location:SENSOR_LOCATION.DASHBOARD},
  118: { icon: '', formatter: val => `${val} kg`, },
  119: { icon: '', formatter: val => `${val} kg`, },
  120: { icon: '', formatter: val => `${val} kg`, },
  121: { icon: '', formatter: val => `${val} kg`, },
  122: { icon: '', formatter: val => `${val} kg`, },
  123: { icon: ICONS.FLAG, formatter: val => val, },
  124: { icon: ICONS.FLAG, formatter: val => val, },
  125: { icon: '', formatter: val => getDuration((val || 0) * 1000), },
  126: { icon: '', formatter: val => `${val} m<sup>2</sup>`, },
  127: { icon: '', formatter: val => `${val} m<sup>2</sup>/h`, },
  128: { icon: '', formatter: val => `${val} kg`, },
  129: { icon: '', formatter: val => `${val} %`, },
  130: { icon: '', formatter: val => `${val} rpm`, },
  131: { icon: '', formatter: val => `${val} mm`, },
  132: { icon: ICONS.FLAG, formatter: val => val, },
  133: { icon: '', formatter: val => `${parseFloat((val || 0) / 1000).toFixed(2).toLocaleString()} km`, },
  134: { icon: '', formatter: val => `${parseFloat((val || 0) / 1000).toFixed(2).toLocaleString()} km`, },
  135: { icon: '', formatter: val => `${parseFloat(val || 0).toFixed(2)} km/h`, },
  136: { icon: '', formatter: val => val, },
  137: { icon: ICONS.DRIVER, formatter: val => val, },
  138: { icon: ICONS.DRIVER, formatter: val => val, },
  139: { icon: ICONS.DRIVER, formatter: val => getDuration((val || 0) * 1000), },
  140: { icon: ICONS.DRIVER, formatter: val => getDuration((val || 0) * 1000), },
  141: { icon: ICONS.DRIVER, formatter: val => getDuration((val || 0) * 1000), },
  142: { icon: ICONS.DRIVER, formatter: val => getDuration((val || 0) * 1000), },
  143: { icon: ICONS.DRIVER, formatter: val => getDuration((val || 0) * 1000), },
  144: { icon: ICONS.DRIVER, formatter: val => getDuration((val || 0) * 1000), },
  145: { icon: ICONS.DRIVER, formatter: val => getDuration((val || 0) * 1000), },
  146: { icon: ICONS.DRIVER, formatter: val => getDuration((val || 0) * 1000), },
  147: { icon: ICONS.DRIVER, formatter: val => val, },
  148: { icon: ICONS.DRIVER, formatter: val => val, },
  149: { icon: ICONS.DRIVER, formatter: val => val, },
  150: { icon: ICONS.DRIVER, formatter: val => val, },
  151: { icon: ICONS.CAR_BATTERY, formatter: val => `${parseFloat((val || 0)).toFixed(2).toLocaleString()} ˚C`, },
  152: { icon: ICONS.CAR_BATTERY, formatter: val => `${val} %`, },
  160: { icon: '', formatter: val => val, },
  161: { icon: '', formatter: val => `${val} ˚`, },
  162: { icon: '', formatter: val => `${val} ˚`, },
  163: { icon: '', formatter: val => `${val} m`, },
  164: { icon: '', formatter: val => `${val} m`, },
  165: { icon: '', formatter: val => `${val} m`, },
  166: { icon: '', formatter: val => `${val} rpm`, },
  167: { icon: '', formatter: val => `${val} g/m<sup>2</sup>`, },
  168: { icon: ICONS.BATTERY, formatter: val => `${val} V`, },
  169: { icon: '', formatter: val => `${val} T`, },
  170: { icon: '', formatter: val => `${val} T`, },
  171: { icon: '', formatter: val => `${val} T`, },
  172: { icon: '', formatter: val => `${val} m<sup>3</sup>`, },
  173: { icon: '', formatter: val => `${val} m<sup>3</sup>`, },
  174: { icon: '', formatter: val => `${val} m<sup>3</sup>`, },
  176: { icon: '', formatter: val => `${val} m<sup>3</sup>`, },
  177: { icon: '', formatter: val => `${val} T`, },
  178: { icon: '', formatter: val => `${val} T`, },
  183: { icon: '', formatter: val => `${val} m`, },
  184: { icon: '', formatter: val => `${val} m`, },
  185: { icon: '', formatter: val => `${val} h`, },
  186: { icon: '', formatter: val => `${val.toLocaleString()} km`, },
  187: { icon: '', formatter: val => `${val} kg`, },
  188: { icon: '', formatter: val => `${val} %`, },
  189: { icon: '', formatter: val => getDuration((val || 0) * 1000), },
  232: { icon: '', formatter: val => val, },
  233: { icon: '', formatter: val => `${val} kg`, },
  234: { icon: '', formatter: val => `${val} %`, },
  235: { icon: ICONS.ENGINE_OIL, formatter: val => val, },
  304: { icon: ICONS.CAR_BATTERY, formatter: val => `${parseFloat((val || 0) / 1000).toFixed().toLocaleString()} km`, },
  305: { icon: ICONS.BURNING_FUEL, formatter: val => `${parseFloat((val || 0) / 1000).toFixed().toLocaleString()} km`, },
  325: { icon: ICONS.LICENSE_PLATE, formatter: val => val, },
  282: { icon: ICONS.TECHNOLOGY, formatter: val => val, location: SENSOR_LOCATION.DASHBOARD, },
  517: { icon: ICONS.FLAG, formatter: val => val, },
  518: { icon: ICONS.FLAG, formatter: val => val, },
  519: { icon: ICONS.FLAG, formatter: val => val, },
  520: { icon: ICONS.FLAG, formatter: val => val, },
  521: { icon: ICONS.FLAG, formatter: val => val, },
  522: { icon: ICONS.FLAG, formatter: val => val, },
  855: { icon: '', formatter: val => `${val} kg`, },
  856: { icon: '', formatter: val => `${val} kg`, },
  857: { icon: '', formatter: val => `${val} %`, },
  858: { icon: '', formatter: val => `${val} kg`, },
  385: { icon: ICONS.SIGNAL_STREAMS, formatter: val => val, },
  25: { icon: ICONS.TEMPERATURE, formatter: val => `${val || 'N/A'} ˚C`, location: SENSOR_LOCATION.DASHBOARD},
  90018: { icon: ICONS.TEMPERATURE, formatter: val => `${val || 'N/A'}`, location: SENSOR_LOCATION.DASHBOARD},
  90019: { icon: ICONS.TEMPERATURE, formatter: val => `${val || 'N/A'}`, location: SENSOR_LOCATION.DASHBOARD},
  29: { icon: ICONS.CAR_BATTERY, formatter: val => `${val} %`, },
  20: { icon: ICONS.CAR_BATTERY, formatter: val => `${val} %`, },
  22: { icon: ICONS.CAR_BATTERY, formatter: val => `${val} %`, },
  23: { icon: ICONS.CAR_BATTERY, formatter: val => `${val} %`, },

  86: { icon: ICONS.WATER_DROP, formatter: val => `${val || 'N/A'} %`, location: SENSOR_LOCATION.DASHBOARD },
  90020: { icon: ICONS.WATER_DROP, formatter: val => `${val || 'N/A'}`, location: SENSOR_LOCATION.DASHBOARD},
  90021: { icon: ICONS.WATER_DROP, formatter: val => `${val || 'N/A'}`, location: SENSOR_LOCATION.DASHBOARD},

  306: { icon: ICONS.FUEL_GUAGE, formatter: val => val, },
  307: { icon: ICONS.FUEL_GUAGE, formatter: val => val, },
  308: { icon: ICONS.FUEL_GUAGE, formatter: val => val, },
  309: { icon: ICONS.FUEL_GUAGE, formatter: val => val, },
  335: { icon: ICONS.BLUETOOTH, formatter: val => `${val} lx`, },
  336: { icon: ICONS.BLUETOOTH, formatter: val => `${val} lx`, },
  337: { icon: ICONS.BLUETOOTH, formatter: val => `${val} lx`, },
  338: { icon: ICONS.BLUETOOTH, formatter: val => `${val} lx`, },
  331: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  463: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  464: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  465: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  466: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  332: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  467: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  468: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  469: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  470: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  333: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  471: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  472: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  473: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  474: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  334: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  475: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  476: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  477: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  478: { icon: ICONS.BLUETOOTH, formatter: val => val, },
  90004: { icon: '', formatter: val => val, location: SENSOR_LOCATION.PROFILE},
  90005: { icon: '', formatter: val => val, location: SENSOR_LOCATION.PROFILE},
  90000: { icon: ICONS.TRACK_ORDER, formatter: val => `${parseFloat((val || 0) / 1000).toFixed(2)} Km`, location: SENSOR_LOCATION.DASHBOARD},
  90001: { icon: ICONS.ELECTRIC_POWER, formatter: val => shortEnglishHumanizer((val || 0)*1000 ,{ units: ["h","m","s"] }), location: SENSOR_LOCATION.DASHBOARD},
  90002: { icon: ICONS.DRIVER, formatter: val => shortEnglishHumanizer((val || 0)*1000 ,{ units: ["h","m","s"] }), location: SENSOR_LOCATION.DASHBOARD},
  90003: { icon: ICONS.IDLING, formatter: val => shortEnglishHumanizer((val || 0)*1000 ,{ units: ["h","m","s"] }), location: SENSOR_LOCATION.DASHBOARD},
  90006: { icon: ICONS.CARBON_FOOT_PRINT, formatter: val => `${parseFloat(val || 0).toFixed(2)} kg`, location: SENSOR_LOCATION.DASHBOARD },
  90007: { icon: '', formatter: val => `${parseFloat(val || 0).toFixed(2)} L/H`, location: SENSOR_LOCATION.DASHBOARD },
  90008: { icon: '', formatter: val => `${val} L/100 Km`, location: SENSOR_LOCATION.DASHBOARD },
  90009: { icon: '', formatter: val => `${val}`, location: SENSOR_LOCATION.DASHBOARD},
  // computed sensors
  1001: { icon: ICONS.TIMER, formatter: val => val, location: SENSOR_LOCATION.DASHBOARD },
}

export const getSensorType = type => {
  const data = SENSORS[type]
  if (data) return `sensor.${type}`
  return type
}

export const getSensorIcon = type => {
  const data = SENSORS[type]
  if (data) return data.icon || ICONS.TECHNOLOGY
  return ''
}

export const getSensorValue = (type, value) => {

  const data = SENSORS[type]
  if (data) return data.formatter(value)
  return value
}

export const isSensorEnabled = type => {
  if (disabledSensors.includes(+type)) return false
  if (enabledSensors.includes(+type)) return true
  return !enabledSensors.length
}

export const getSensorDiaplayLocation = type => {
  if (!isSensorEnabled(type)) return SENSOR_LOCATION.DISABLED
  const data = SENSORS[type]
  if (data && data.location) return data.location
  return SENSOR_LOCATION.SENSORS
}

export const getSensorByMode = (sensors, mode) => {
  const items = {}
  for (const sensor in sensors) {
    if (mode == SENSOR_LOCATION.SENSORS) {
      if (sensors[sensor].mode && sensors[sensor].mode != mode) continue
    }
    else if (sensors[sensor].mode != mode) continue
    items[sensor] = sensors[sensor]
  }
  return items
}

export const generateDefaultSensor = (id , value = '') => ({
  type: id,
  icon: getSensorIcon(id),
  label: getSensorType(id),
  value: getSensorValue(id, value),
  timestamp: null,
  mode: getSensorDiaplayLocation(id),
})

export const shortEnglishHumanizer = humanizeDuration.humanizer({
  language: "shortEn",
  languages: {
    shortEn: {
      y: () => "y",
      mo: () => "mo",
      w: () => "w",
      d: () => "d",
      h: () => "h",
      m: () => "m",
      s: () => "s",
      ms: () => "ms",
    },
  },
});
