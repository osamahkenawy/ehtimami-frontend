<template>
  <v-dialog
    scrollable
    v-model="dialogModelValue"
    persistent
    :width="width"
    :height="height"
  >
    <div
      class="rounded custom-dialog-style"
      style="
        max-height: 300vh;
        max-width: 90vw;
        overflow: hidden;
        position: relative;
      "
    >
      <div class="white header" style="padding: 0.25rem; margin-top: 0.25rem">
        <div class="header_right">
          <v-item-group dense>
            <v-btn
              tile
              :style="showsaveBtn ? 'width: 50%;' : 'width: 100%;'"
              style="
                margin: 0;
                padding: 0.5rem 1rem;
                font-weight: bold;
                text-transform: none !important;
                color: #455a64;
              "
              depressed
              color="blue-grey lighten-5"
              @click="closeDailog"
            >
              {{ cancelLabel }}
            </v-btn>
            <v-btn
              tile
              v-if="showsaveBtn"
              style="
                margin: 0;
                padding: 0.5rem 1rem;
                font-weight: bold;
                width: 50%;
                text-transform: none !important;
              "
              depressed
              color="primary"
              @click="save"
              :disabled="disabled"
              :loading="loading"
              type="submit"
            >
              {{ SaveLabel }}
            </v-btn>
          </v-item-group>
        </div>
      </div>
      <div
        class="white header_left"
        style="padding: 0.25rem; margin-top: 0.25rem"
      >
        <div class="header_left_inner">
          <v-btn
            tile
            style="
              margin: 0;
              padding-left: 0;
              font-weight: bold;
              width: 100%;
              text-transform: none !important;
            "
            depressed
            :color="colorOfDialog"
          >
            <template v-if="imgIcon">
              <img class="m-1" :src="icon" alt />
            </template>
            <template v-else>
              <v-icon class="mr-1 ml-2" v-if="icon">
                {{ icon }}
              </v-icon>
            </template>
            {{ title }}
          </v-btn>
        </div>
      </div>
      <div
        class="mt-6 h-100 content-container"
        :class="noPadding ? 'no-padding' : 'with-padding'"
        style="overflow: auto; width: 100%; height: 100%"
      >
        <slot name="content" />
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "OverflowDialog",
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: () => "Dialog" },
    icon: { type: String, default: () => "" },
    width: { type: String, default: "900" },
    height: { type: String, default: "500px" },
    noPadding: { default: () => false },
    disabled: { type: Boolean, default: false },
    colorOfDialog: { type: String, default: "primary" },
    SaveLabel: { type: String, default: "Save" },
    cancelLabel: { type: String, default: "Cancel" },
    loading: { type: Boolean, default: false },
    showsaveBtn: { type: Boolean, default: true },
    imgIcon: { type: Boolean, default: false },
  },
  computed: {
    dialogModelValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  methods: {
    closeDailog() {
      this.$emit("close");
      this.dialogModelValue = false;
    },
    save(value) {
      this.$emit("save", value);
    },
  },
};
</script>

<style lang="scss">
div .v-dialog {
  box-shadow: none !important;
}
.custom-dialog-style {
  .header {
    position: absolute;
    right: 0;
    top: 0px;
    border-radius: 50px 0 0 50px;
    z-index: 100;
    background-color: white !important;
  }
  .header_right {
    overflow: hidden;
    border-radius: 50px 0 0 50px;
    min-width: 160px;
  }
  .header_left {
    position: absolute;
    left: 0;
    top: 0px;
    border-radius: 0 50px 50px 0;
    min-width: 140px;
    background-color: white !important;
    z-index: 100;
    @media screen and (max-width: 520px) {
      display: none;
    }
  }
  .header_left_inner {
    border-radius: 0 50px 50px 0;
    overflow: hidden;
  }
  .content-container {
    flex-grow: 1;
    background-color: #ffffff;
    width: calc(100% - 40px);
    height: calc(100% - 150px);
    @media screen and (max-width: 768px) {
        padding: 0.5rem;
    }
  }
}
</style>
