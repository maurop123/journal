<template lang="pug">
  app-toolbar(
    v-bind="{topNav, title}"
    noLogin
    noScrollToBottom
  )
    router-view
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: 'Journal',
        topNav: [{
          path: 'posts'
        }],
      }
    },
  }
</script>
