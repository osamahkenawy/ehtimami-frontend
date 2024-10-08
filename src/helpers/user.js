import GENDER from '@/constants/gender'
import LanguageHelper from '@/helpers/lang'

const fallBackName = data => {
  if (typeof data === 'string') return data // this itself is the name
  if (data.first_name || data.last_name) return [ data.first_name || '', data.last_name || '' ].filter(f => f).join(' ')
  if (data.full_name) return data.full_name.trim()
  if (data.name) return data.name.trim()
  return ''
}

/**
 * To generate the name from the data hash
 * @param {object} data the complete data collection
 * @returns {string} the generated name
 */
export const name = data => {
  const lang_key = LanguageHelper.lang
  let { name } = data
  if (! name) name = { ...data }
  if (name.first_name || name.last_name) return [ name.first_name || '', name.last_name || name[`last_name_${lang_key}`] || '' ].filter(f=>f).join(' ')
  if (name[`full_name_${lang_key}`]) return name[`full_name_${lang_key}`].trim()
  if (name[`name_${lang_key}`]) return name[`name_${lang_key}`].trim()
  if (name[lang_key]) return name[lang_key].trim()
  return fallBackName(name)
}

/**
 * To split a user's name to abbrevations
 * @param {string} name the full name that needs to be split
 */
export const splitName = name => {
  const spl = name.split(' ')
    .filter(n => n)
    .map(n => n.substring(0, 1))
    .join('')
    .toUpperCase()
    .substring(0, 2)
  if (spl.length === 2) return spl
  return name.split('')
    .filter(n => n)
    .map(n => n.substring(0, 1))
    .join('')
    .toUpperCase()
    .substring(0, 2)
}

export const genderIcon = gender => {
  switch (gender) {
    case GENDER.FEMALE: return 'fa-venus'
    case GENDER.MALE: return 'fa-mars'
    case GENDER.UNKNOWN: return ''
    case GENDER.OTHER: return 'fa-transgender'
  }
  return ''
}

export const gender = gender => {
  gender = (gender || 'u').replace(/ /g, '').toUpperCase()
  switch (gender) {
    case GENDER.FEMALE:
    case 'FEMALE':
    case 'F': return 'F'
    case GENDER.MALE:
    case 'MALE':
    case 'M': return 'M'
    case GENDER.OTHER:
    case 'OTHER':
    case 'O': return 'O'
    case GENDER.UNKNOWN:
    case 'UNKNOWN':
    case 'U':
    default: return 'U'
  }
}

export const genderString = gend => {
  gend = gender(gend)
  switch (gend) {
    case 'F': return 'female'
    case 'M': return 'male'
    case 'O': return 'other'
  }
  return 'unknown'
}

export default {
  name,
  splitName,
  gender
}
