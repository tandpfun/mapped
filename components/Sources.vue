<template>
  <div v-if="getDataset()" class="text-gray-500">
    <p>
      Data provided by {{ getDataset().source.name }}'s "<a
        :href="getDataset().source.link"
        target="_blank"
        class="text-blue-400 hover:underline"
        >{{ getDataset().source.title }}</a
      >". {{ getDataset().source.date }}
    </p>
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
