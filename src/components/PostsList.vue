<template lang="pug">
  v-list(class="scrollable" subheader)
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
          v-list-tile-title
            v-layout
              v-flex {{ post.title }}
              v-flex(class="text-xs-right caption") {{ postCreatedDate(post.id) }}
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'posts-list',
    computed: {
      ...mapState(['posts']),
      ...mapGetters(['postCreatedDate']),
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
