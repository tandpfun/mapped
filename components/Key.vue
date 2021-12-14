<template>
  <div class="">
    <div class="text-center">
      <h1 class="font-semibold text-lg">
        {{ getDataset() ? getDataset().name : 'Select a Dataset' }}
      </h1>
      <div v-if="getDataset()">
        <p>{{ getDataset().description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getDataset() {
      const datasetName = this.$store.state.data.selectedDataset
      const data = this.$store.state.data.datasets[datasetName]
      return data
    },
  },
}
</script>
