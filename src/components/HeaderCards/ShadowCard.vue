<template>
  <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
    <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
      <svg
        class="w-8 h-8 text-white"
        viewBox="0 0 28 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
          fill="currentColor"
        />
        <path
          d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
          fill="currentColor"
        />
        <path
          d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
          fill="currentColor"
        />
        <path
          d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
          fill="currentColor"
        />
        <path
          d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
          fill="currentColor"
        />
        <path
          d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
          fill="currentColor"
        />
      </svg>
    </div>

    <div class="mx-5">
      <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
      <div class="text-gray-500">New Users</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

// Helper function to convert color (replace with your logic for colors if needed)
const getColor = (color: string) => {
  const colors = {
    grey: "#9e9e9e",
    blue: "#2196f3",
    red: "#f44336",
  };
  return colors[color] || colors["grey"];
};

const changeAlpha = (color: string, alpha: number) => {
  const rgbaColor = color.replace(")", `, ${alpha})`).replace("rgb", "rgba");
  return rgbaColor;
};

// Define prop types
interface Props {
  color: string;
  loading: boolean;
  horizontalBar: boolean;
  outlined: boolean;
  noShadow: boolean;
  filledSmoke: boolean;
}

export default defineComponent({
  name: "ShadowCard",
  props: {
    color: { type: String, default: "grey" },
    loading: { type: Boolean, default: false },
    horizontalBar: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
    noShadow: { type: Boolean, default: false },
    filledSmoke: { type: Boolean, default: false },
  },
  setup(props: Props) {
    const cardStyles = computed(() => {
      const color = getColor(props.color);
      const borderColor = getColor(props.color);
      const backgroundColor = changeAlpha(color, 0.1);
      const styles: string[] = [];

      if (!props.noShadow) {
        styles.push(`border: 1px solid ${color};`); // Use the shadow color for the border
        styles.push(`box-shadow: 0 0 8px -4px ${color};`); // Apply shadow
      }

      if (props.outlined) {
        styles.push(`border: 1px solid ${borderColor};`); // Apply border
      }

      if (props.filledSmoke) {
        styles.push(`background-color: ${backgroundColor};`); // Apply filled smoke background
      }

      return styles.join(" ");
    });

    const cardLineStyles = computed(() => {
      const color = getColor(props.color);
      const styles: string[] = []; // Explicitly typing the array as string[]

      if (color) {
        styles.push(`background: ${color};`);
      }

      return styles.join(" ");
    });

    const cardClasses = computed(() => {
      return [
        "relative",
        "rounded-lg",
        "overflow-hidden",
        "p-4",
        props.noShadow ? "shadow-none" : "",
        props.outlined ? "border" : "",
      ];
    });

    return {
      cardStyles,
      cardLineStyles,
      cardClasses,
    };
  },
});
</script>

<style scoped>
.shadow-card-prefix {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0.25rem;
  border-radius: 0;
}

.horizontal .shadow-card-prefix {
  top: auto;
  right: 0;
  width: 100%;
  height: 0.25rem;
}
</style>
