import axios from 'axios'

export const state = () => ({
  dataFetched: false,
  datasets: {},
  selectedDataset: null,
})

export const actions = {
  async fetchData({ commit }) {
    try {
      const { data: datasets } = await axios.get('/datasets.json')
      for (const setName of datasets) {
        const { data } = await axios.get(`/data/${setName}.json`)
        console.log(data)
        commit('setDataset', { setName, data })
      }
      commit('markFetched')
    } catch (err) {
      console.log(err) // eslint-disable-line no-console
    }
  },
}

export const mutations = {
  setDataset(state, { setName, data }) {
    state.datasets[setName] = data
  },
  markFetched(state) {
    state.dataFetched = true
  },
}
