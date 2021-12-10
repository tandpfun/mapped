<template>
  <div>
    <div class="m-5">
      <h1 class="text-center font-semibold text-3xl">Mapped - United States</h1>
      <div class="flex justify-center items-center">
        <div
          v-if="!$store.state.data.dataFetched"
          class="flex flex-col items-center mt-8"
        >
          <Loading class="w-12 h-12" />
          <h1 class="text-center font-semibold text-xl mt-1">
            Fetching Statistics
          </h1>
        </div>
        <div v-else class="flex flex-col items-center mt-5">
          <select
            value="none"
            class="border-2 border-gray-400 rounded-md"
            @input="selectDataset"
          >
            <option value="none" selected disabled hidden>
              Select a Dataset
            </option>
            <option
              v-for="set in Object.entries($store.state.data.datasets)"
              :key="set[0]"
              :value="set[0]"
            >
              {{ set[1].name }}
            </option>
          </select>
          <Map v-if="$store.state.data.selectedDataset" ref="map" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('data/fetchData')
  },
  methods: {
    async selectDataset(event) {
      await this.$store.commit('data/selectDataset', event.target.value)
      this.$refs.map.renderMap()
    },
  },
}
</script>
