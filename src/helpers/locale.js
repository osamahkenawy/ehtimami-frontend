import jwt_decode from "jwt-decode";
import { getAuthToken } from '@/plugins/Auth';

function detokenize() {
  let portal  = localStorage.getItem('portal');
  let token   = getAuthToken(portal);

  return jwt_decode(token);
}
export default class Locale {

  constructor () {
    const [ en, ar, fr ] = arguments
    this['en-us'] = en
    this.ar = ar || en
    this.fr = fr || en
  }

}

export function i18Locale() {
  return detokenize();
}

export function i18weekdays(loc, weekday = 'long') {
  let data        = detokenize();
  let language    = localStorage.getItem('language');

  let locale      = loc ? loc : (Object.keys(data).includes('locale') ? data.locale : 'en-AE');
  let country     = Object.keys(data).includes('country') ? data.country : 'AE';

  let default_locale = locale !== null && language !== "en" ? locale : "en-" + country.toUpperCase();

  const format = new Intl.DateTimeFormat(default_locale, { weekday }).format;
  return [...Array(7).keys()].map((day) => format(new Date(Date.UTC(2021, 5, day))));
}