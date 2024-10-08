import Locale from './locale'
import { uid } from './uid'

export default class MainCard {

  constructor () {
    this.uid = uid()
    this.icon = ''
    this.color = ''
    this.label = null
    this.value = null
    this.extras = null
    this.trigger = 'hover'
    this.class = ''
    this._value = null
  }

  basic (icon, color, label, value, extras = null, _class = '') {
    this.icon = icon
    this.color = color
    this.label = label
    this.value = new Locale(value)
    this._value = value
    this.trigger = 'hover'
    this.extras = extras
    this.class = _class
    return this
  }

}
