<template lang="pug">
  v-list
    template(v-for="post in posts")
      v-list-tile(:key="post.id"
        @click="setActivePost(post.id)"
      )
        v-list-tile-content
          v-list-tile-title {{ post.title }}
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'posts-list',
    computed: {
      ...mapState(['posts']),
    },
    methods: {
      setActivePost(id) {
        this.$store.commit('setState', {
          key: 'postListActiveId',
          val: id
        })
      },
    },
  }
</script>
