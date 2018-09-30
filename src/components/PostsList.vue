<template lang="pug">
  v-list
    v-subheader List
    template(v-for="post in posts")
      v-list-tile(:key="post.id"
        @click="setActivePost(post.id)"
      )
        v-list-tile-content
          v-list-tile-title {{ post.title }}
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'posts-list',
    computed: {
      ...mapState(['posts']),
    },
    methods: {
      ...mapMutations(['setActivePost']),
    },
  }
</script>
