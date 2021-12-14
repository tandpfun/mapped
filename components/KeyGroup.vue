<template>
  <div class="flex flex-row items-center">
    <div class="w-5 h-5 rounded-md" :style="`background: ${color}`" />
    <p class="ml-1">{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
}
</script>
