
<template>
    <div>
      <v-skeleton-loader v-for="(type, index) in skeletonTypes" :key="index" :type="type" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'glob-skeleton',
    props: {
      skeletonTypes: {
        type: Array,
        required: true,
      },
    },
  };
  </script>

  <!-- Notes -->

  <!-- All Types -->
  <!-- | 'avatar'
  | 'button'
  | 'chip'
  | 'divider'
  | 'heading'
  | 'image'
  | 'text'
  | 'sentences'
  | 'paragraph'
  | 'ossein'
  | 'actions'
  | 'article'
  | 'card'
  | 'card-avatar'
  | 'date-picker'
  | 'date-picker-options'
  | 'date-picker-days'
  | 'list-item'
  | 'list-item-avatar'
  | 'list-item-two-line'
  | 'list-item-avatar-two-line'
  | 'list-item-three-line'
  | 'list-item-avatar-three-line'
  | 'subtitle'
  | 'table'
  | 'table-heading'
  | 'table-thead'
  | 'table-tbody'
  | 'table-row-divider'
  | 'table-row'
  | 'table-tfoot'
  | (string & {})
  | (
      | 'avatar'
      | 'button'
      | 'chip'
      | 'divider'
      | 'heading'
      | 'image'
      | 'text'
      | 'sentences'
      | 'paragraph'
      | 'ossein'
      | 'actions'
      | 'article'
      | 'card'
      | 'card-avatar'
      | 'date-picker'
      | 'date-picker-options'
      | 'date-picker-days'
      | 'list-item'
      | 'list-item-avatar'
      | 'list-item-two-line'
      | 'list-item-avatar-two-line'
      | 'list-item-three-line'
      | 'list-item-avatar-three-line'
      | 'subtitle'
      | 'table'
      | 'table-heading'
      | 'table-thead'
      | 'table-tbody'
      | 'table-row-divider'
      | 'table-row'
      | 'table-tfoot'
      | (string & {})
    )[] -->