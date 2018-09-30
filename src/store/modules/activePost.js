import moment from 'moment'
import db from '@/database'

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
  savePost({ state }) {
    const payload = state
    payload.lastUpdated = moment().format('x')
    if (payload.id) db.set('posts/'+payload.id, payload).subscribe()
    else db.push('posts', payload).subscribe()
  },
}

export default {
  state,
  mutations,
  actions,
}
