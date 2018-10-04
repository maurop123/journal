import Vue from 'vue'
import Vuex from 'vuex'
import { store as commons } from '@mauromadeit/vue-commons'
import db from '@/database'
import activePost from './modules/activePost'
import _sortBy from 'lodash/sortBy'
import moment from 'moment'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ...commons.state,
    posts: [],
  },
  getters: {
    postCreatedDate: ({ posts }) => id => {
      const post = posts.filter(p => p.id === id)[0]
      return (post) ? moment(post.createdDatetime, 'x').format('MM/DD') : ''
    },
    lastUpdatedDate: ({ posts }) => id => {
      const post = posts.filter(p => p.id === id)[0]
      return (post) ? moment(post.lastUpdated, 'x').format('MM/DD') : ''
    },
  },
  mutations: {
    ...commons.mutations,
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
    val: _sortBy(posts, p => p.lastUpdated * -1),
  })
})

export default store
