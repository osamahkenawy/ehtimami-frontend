import colors from '@/helpers/colors'

export default {
  methods: {
    getColorFromDot (dotted_field, color) {
      return colors.getColorFromDot(dotted_field, color)
    },
  },
}
