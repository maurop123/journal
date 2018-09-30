<template lang="pug">
  v-container(grid-list-md fluid)
    v-layout(wrap)
      v-flex(xs12 sm3)
        posts-list(class="elevation-1")
      v-flex(xs12 sm6)
        post-editor
      v-flex(xs12 sm3)
        post-details
</template>

<script>
  import PostDetails from '@/components/PostDetails'
  import PostEditor from '@/components/PostEditor'
  import PostsList from '@/components/PostsList'

  export default {
    name: 'editor-view',
    components: {
      PostDetails,
      PostEditor,
      PostsList,
    },
  }
</script>
