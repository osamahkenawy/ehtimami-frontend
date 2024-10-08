import LanguageHelper from '@/helpers/lang'

export default {
  methods: {
    localized (val) {
      if (typeof val === 'object') {
        if (!val) return ''
        if (Array.isArray(val)) return ''
        const val_ = val[LanguageHelper.lang]
        return val_ || ''
      }
      return val
    },
  },
}
