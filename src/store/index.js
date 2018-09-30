import Vue from 'vue'
import Vuex from 'vuex'
import { store as _store, database } from '@mauromadeit/vue-commons'
import activePost from './modules/activePost'

const db = new database({ ref: 'journal' })

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    ..._store.mutations,
    setActivePost(state, id) {
      const post = state.posts.filter(p => p.id === id)[0]
      if (post) state.activePost = post
    },
  },
  actions: {
    savePost({ state }) {
      const payload = state.activePost
      if (payload.id) db.set('posts/'+payload.id, payload).subscribe()
      else db.push('posts', payload).subscribe()
    },
  },
  modules: {
    activePost,
  },
})

db.get('posts', true, false).subscribe(posts => {
  if (posts) store.commit('setState', {
    key: 'posts',
    val: posts,
  })
})

export default store
