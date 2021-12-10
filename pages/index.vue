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
        <div v-else>
          <select>
            <option
              v-for="set in Object.entries($store.state.data.datasets)"
              :key="set[0]"
            >
              {{ set[0] }}
            </option>
          </select>
          <Map v-if="$store.state.data.selectedDataset" />
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
}
</script>
