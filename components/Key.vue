<template>
  <div class="">
    <div class="text-center">
      <h1 class="font-semibold text-lg">
        {{ getDataset() ? getDataset().name : 'Select a Dataset' }}
      </h1>
      <div v-if="getDataset()">
        <p>{{ getDataset().description }}</p>
        <div
          class="flex flex-col justify-center mt-4 mx-auto content-center flex-wrap"
        >
          <KeyGroup
            v-for="group in getDataset().groups"
            :key="group.name"
            :name="group.name"
            :color="group.color"
          />
          <KeyGroup
            :name="getDataset().unspecifiedMessage || 'No Data'"
            color="#D3D3D3"
          />
        </div>
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
