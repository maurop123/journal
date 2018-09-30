import Vue from 'vue'
import Vuex from 'vuex'
import { database } from '@mauromadeit/vue-commons'

const db = new database({ ref: 'journal' })

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: [],
    postListActiveId: null,
  },
  getters: {
    activePost({ posts, postListActiveId }) {
      return posts.filter(p => p.id === postListActiveId)[0] || null
    },
  },
  mutations: {
    setState(state, {key, val}) {
      state[key] = val
    },
  },
  actions: {
    savePost(context, payload) {
      if (payload.id) db.set('posts/'+payload.id, payload).subscribe()
      else db.push('posts', payload).subscribe()
    },
  }
})

db.get('posts', true, false).subscribe(posts => {
  if (posts) store.commit('setState', {
    key: 'posts',
    val: posts,
  })
})

export default store
