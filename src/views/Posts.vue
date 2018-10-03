<template lang="pug">
  masonry(:items="posts")
    template(slot-scope="post")
      v-card(v-if="showablePost(post)")
        v-card-title(v-if="post.title"
          class="display-1 mb-3 plain-link"
        )
          router-link(:to="postLink(post)") {{post.title}}
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'posts-view',
    computed: {
      ...mapState(['posts']),
    },
    methods: {
      postLink(p) {
        return `/posts/${p.id}`
      },
      showablePost(p) {
        return p.id && p.title
      },
    },
  }
</script>

<style scoped lang="scss">
  .plain-link a {
    color: black; /* TODO use vuetify colors */
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
