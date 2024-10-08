/*eslint no-dupe-class-members: "off"*/
import vuetify from '@/plugins/vuetify'
import { EventBus } from '@/event-bus'

const DEFAULT_LANGUAGE = 'en-us'

class Lang {
  

  constructor () {
    this.#setLang()
    window.addEventListener('storage', () => {
      this.#setLang()
    })
    EventBus.$on('LanguageChange', lang => {
      this.lang = lang
    })
  }
  
  get lang () {
    if (this.current_lang) return this.#formatLang(vuetify.framework.lang.current || this.#preProcessLang)
    return this.#formatLang(vuetify.framework.lang.current || this.#setLang().#preProcessLang)
  }

  set lang(lang) {
    switch (lang.toLowerCase().trim()) {
      case 'en-us': case 'en': return this.#setLang('en-us')
    }
    return this.#setLang(lang.toLowerCase().trim())
  }

  get #preProcessLang () {
    if (!this.current_lang) return DEFAULT_LANGUAGE
    switch (this.current_lang.trim().toLowerCase()) {
      case 'en': case 'en-us': return DEFAULT_LANGUAGE
    }
    return this.current_lang.trim().toLowerCase()
  }

  get vuetifyLang () {
    switch (this.current_lang.toLowerCase().trim()) {
      case 'en-us': case 'en': return 'en'
    }
    return this.current_lang.trim().toLowerCase()
  }

  #formatLang (lang) {
    switch (lang.trim().toLowerCase()) {
      case 'en': case 'en-us': return 'en-us'
    }
    return lang.trim().toLowerCase()
  }
  
  #setLang (lang = null) {
    this.current_lang = this.#formatLang(lang || localStorage.getItem('language') || DEFAULT_LANGUAGE)
    vuetify.framework.lang.current = this.vuetifyLang
    vuetify.framework.rtl = this.current_lang == 'ar'
    return this
  }

  translateNumber (num) {
    if (this.#preProcessLang) return num
    const id = [ '۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹' ]
    if (process.env.VUE_APP_NUM_ARABIC != '1') return num
    return num.replace(/[0-9]/g, w => {
      return id[+w]
    })
  }

  createLocale (val) {
    return {
      'en-us': val,
      'ar': val,
      'fr': val,
    }
  }

}

export default new Lang()
