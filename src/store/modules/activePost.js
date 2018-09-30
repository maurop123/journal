import moment from 'moment'

function defaultState() {
  return {
    id: null,
    title: '',
    description: '',
    createdDatetime: moment().format('x'),
    lastUpdated: moment().format('x'),
  }
}

const state = defaultState()

const mutations = {
  resetActivePost(state) {
    state = defaultState()
  },
}

export default {
  state,
  mutations,
}
