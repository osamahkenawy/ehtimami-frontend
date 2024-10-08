<template>
    <v-slider
      v-model="internalValue"
      :color="computedColor"
      :step="1"
      :max="max"
      :min="min"
      thumb-label="always"
      track-color=""
    >
      <!-- Custom Thumb -->
      <template v-slot:thumb-label="{ value }">
        <div class="v-slider-thumb__label custom-thumb">
            <v-row>
                <v-col>
                    {{ value }} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </v-col>
            </v-row>
        </div>
      </template>
  
      <!-- Prepend/Append Slots -->
      <template v-slot:prepend>  
        <v-btn
          :color="computedColor"
          icon="mdi-minus"
          size="small"
          variant="text"
          @click="decrement"
        ></v-btn>
      </template>
  
      <template v-slot:append>
        <v-btn
          :color="computedColor"
          icon="mdi-plus"
          size="small"
          variant="text"
          @click="increment"
        ></v-btn>
      </template>
    </v-slider>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: {
        type: Number,
        required: true,
      },
      colorRange: {
        type: Array,
        default: () => [
          { value: 100, color: "indigo" },
          { value: 125, color: "teal" },
          { value: 140, color: "green" },
          { value: 175, color: "orange" },
          { value: 218, color: "red" },
        ],
      },
      max: {
        type: Number,
        default: 218,
      },
      min: {
        type: Number,
        default: 40,
      },
    },
    emits: ["update:modelValue"],
    data() {
      return {
        internalValue: this.modelValue,
      };
    },
    computed: {
      computedColor() {
        let selectedColor = this.colorRange[0].color;
        for (const range of this.colorRange) {
          if (this.internalValue <= range.value) {
            selectedColor = range.color;
            break;
          }
        }
        return selectedColor;
      },
    },
    watch: {
      internalValue(value) {
        this.$emit("update:modelValue", value);
      },
      modelValue(value) {
        this.internalValue = value;
      },
    },
    methods: {
      decrement() {
        if (this.internalValue > this.min) this.internalValue--;
      },
      increment() {
        if (this.internalValue < this.max) this.internalValue++;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom Thumb inside v-slider-thumb__label */
  .v-slider-thumb__label.custom-thumb {
    background-color: var(--v-primary-base); /* Custom background color */
    border-radius: 12px;
    padding: 10px;
    max-width: 300px; /* Set a larger max-width */
    white-space: normal; /* Allow text to wrap */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white; /* White text */
    font-weight: bold;
    font-size: 12px;
    border: none;
    box-shadow: none;
    cursor: pointer;
    position: relative;
    bottom: 0; /* Position bottom */
    transition: transform 0.1s ease;
    word-wrap: break-word; /* Ensure long words break */
    overflow: visible; /* Ensure content is fully visible */
    text-align: center; /* Center-align the text */
  }
  
  /* Adjusting the default bottom position */
  .v-slider-thumb__label {
    bottom: 0px !important;
    transform: translateY(0px) !important;
  }
  </style>
  