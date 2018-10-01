<template lang="pug">
  v-list(class="scrollable")
    v-subheader
      span Posts
      v-spacer
      v-btn(
        class="mr-0"
        @click="resetActivePost"
      ) New
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
      ...mapMutations(['setActivePost', 'resetActivePost']),
    },
  }
</script>

<style scoped>
  .scrollable {
    max-height: 300px;
    overflow: auto;
  }
</style>
