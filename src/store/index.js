import Vue from 'vue'
import Vuex from 'vuex'
import { store as _store } from '@mauromadeit/vue-commons'
import db from '@/database'
import activePost from './modules/activePost'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    ..._store.mutations,
    setActivePost(state, id) {
      const post = state.posts.filter(p => p.id === id)[0]
      if (post) state.activePost = { ...post }
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
