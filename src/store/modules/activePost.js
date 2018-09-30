import moment from 'moment'
import db from '@/database'
import _debounce from 'lodash/debounce'

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
    Object.entries(defaultState())
    .forEach(([key, val]) => state[key] = val)
  },
}

const actions = {
  savePost: _debounce(({ state }) => {
    const payload = state
    payload.lastUpdated = moment().format('x')
    if (payload.id) db.set('posts/'+payload.id, payload).subscribe()
    else db.push('posts', payload).subscribe()
  }, 3000),
}

export default {
  state,
  mutations,
  actions,
}
