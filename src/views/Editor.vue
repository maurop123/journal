<template lang="pug">
  v-layout
    v-flex(sm-3)
      posts-list
    v-flex(sm-6)
      post-editor
    v-flex(sm-3)
      // post-details
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
