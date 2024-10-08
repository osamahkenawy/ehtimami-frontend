<template>
  <lord-icon
    v-if="show_icon"
    :src="source"
    ref="player"
    :trigger="trigger"
    :colors="colors"
    :stroke="stroke"
    class="animated-icon"
  />
</template>

<script>
import { TRIGGER } from './icons'
import colors from 'vuetify/lib/util/colors'
import color from '@/mixins/color'

export default { 
  name: 'aniamted-icon',
  props: {
    name: { type: String, default: () => '', required: true },
    primaryColor: { type: String, default: () => 'shades.black' },
    secondaryColor: { type: String, default: () => 'blue' },
    trigger: { type: String, default: () => TRIGGER.HOVER },
    stroke: { type: [ Number, String ], default: () => 50 },
  },
  data () {
    return {
      show_icon: true,
    }
  },
  mixins: [ color ],
  computed: {
    source () {
      return `https://cdn.lordicon.com/${this.name}.json`
    },
    primary () {
      if (this.primaryColor.startsWith('#')) return this.primaryColor
      return this.getColorFromDot(this.primaryColor, colors)
    },
    secondary () {
      if (this.secondaryColor.startsWith('#')) return this.secondaryColor
      return this.getColorFromDot(this.secondaryColor, colors)
    },
    colors () {
      return `primary:${this.primary},secondary:${this.secondary}`
    }
  },
  watch: {
    source: { immediate: true, handler () { if (this.$refs.player) this.$refs.player.setAttribute('src', this.source) } },
    trigger: { immediate: true, handler () { if (this.$refs.player) this.$refs.player.setAttribute('trigger', this.trigger) } },
    colors: { immediate: true, handler () { if (this.$refs.player) this.$refs.player.setAttribute('colors', this.colors) } },
    stroke: { immediate: true, handler () { if (this.$refs.player) this.$refs.player.setAttribute('stroke', this.stroke) } },
  },
}
</script>

<style scoped lang="scss">
.animated-icon {
  height: 2em;
  width: 2em;
}
</style>
