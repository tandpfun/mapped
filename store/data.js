import axios from 'axios'

export const state = () => ({
  dataFetched: false,
  datasets: {},
  selectedDataset: 'none',
})

export const actions = {
  async fetchData({ commit }) {
    try {
      const { data: datasets } = await axios.get('/datasets.json')
      for (const setName of datasets) {
        const { data } = await axios.get(`/data/${setName}.json`)
        commit('setData', { setName, data })
      }
      commit('markFetched')
    } catch (err) {
      console.log(err) // eslint-disable-line no-console
    }
  },
}

export const mutations = {
  setData(state, { setName, data }) {
    state.datasets[setName] = data
  },
  selectDataset(state, set) {
    state.selectedDataset = set
  },
  markFetched(state) {
    state.dataFetched = true
  },
}
