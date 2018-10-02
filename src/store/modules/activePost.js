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
  lastUpdated: ({ lastUpdated }) => () => {
    return (lastUpdated) ? moment(lastUpdated, 'x').fromNow() : lastUpdated
  },
}

const mutations = {
  resetActivePost(state) {
    state.id = null // So delete works
    Object.entries(defaultState())
    .forEach(([key, val]) => state[key] = val)
    delete state.id
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
  deleteActivePost({ state, commit }) {
    db.del('posts', state).subscribe()
    commit('resetActivePost')
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
