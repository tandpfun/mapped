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
        <div
          v-else
          class="items-center mt-5 max-w-5xl mx-auto text-center w-full"
        >
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
          <div
            class="flex flex-col p-8 bg-gray-50 mx-5 mt-4 rounded-lg items-center max-w-6xl text-justify"
          >
            <Key class="mb-4" />
            <Map ref="map" class="w-full" />
            <Sources />
          </div>
        </div>
      </div>
    </div>
    <div
      ref="infoBox"
      class="opacity-0 absolute top-0 left-0 z-10 bg-opacity-80 bg-white border-gray-500 border rounded-md p-2 transition duration-100 overflow-hidden max-w-md"
    ></div>
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
