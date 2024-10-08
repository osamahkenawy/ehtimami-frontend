<template>
  <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <slot v-bind="{ trigger }" />
  </div>
</template>

<script>
import { TRIGGER } from './icons'

export default {
  name: 'animated-icon-wrapper',
  data () {
    return {
      trigger: TRIGGER.LOOP_ON_HOVER,
    }
  },
  methods: {
    mouseEnter () {
      this.trigger = TRIGGER.LOOP
    },
    mouseLeave () {
      this.trigger = TRIGGER.LOOP_ON_HOVER
    }
  }
}
</script>
