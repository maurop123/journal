import moment from 'moment'
import db from '@/database'

function defaultState() {
  return {
    title: '',
    description: '',
    createdDatetime: moment().format('x'),
    lastUpdated: null,
  }
}

const state = defaultState()

const getters = {
  lastUpdated({ lastUpdated }) {
    return (lastUpdated) ? moment(lastUpdated, 'x').fromNow() : lastUpdated
  },
}

const mutations = {
  resetActivePost(state) {
    Object.entries(defaultState())
    .forEach(([key, val]) => state[key] = val)
  },
}

const actions = {
  savePost({ state, commit }) {
    const payload = state
    payload.lastUpdated = moment().format('x')
    if (payload.id) db.set('posts/'+payload.id, payload).subscribe()
    else db.push('posts', payload).subscribe(post => {
      commit('setState', {
        key: 'activePost',
        val: post,
      })
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
