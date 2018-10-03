<template lang="pug">
  v-layout
    v-flex(
      v-if="hasSomethingToShow"
      md6 offset-md3
    )
      v-card
        v-card-title(
          v-if="post.title"
          class="display-1 mb-3"
        ) {{post.title}}
        v-card-text(
          v-if="post.description"
          v-html="post.description"
        )
</template>

<script>
  export default {
    name: 'post-view',
    computed: {
      post() {
        return this.$store.state.activePost
      },
      posts() {
        return this.$store.state.posts
      },
      hasSomethingToShow() {
        const {title, description} = this.post
        return title || description
      },
    },
    watch: {
      posts(val) {
        if (val.length > 0) this.$store.commit('setActivePost', this.$route.params.postId)
      },
    },
    mounted() {
      if (this.posts.length > 0) this.$store.commit('setActivePost', this.$route.params.postId)
    },
  }
</script>
