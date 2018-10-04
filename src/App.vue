<template lang="pug">
  v-app
    v-content
      app-toolbar(noLogin noScrollToBottom)
        router-view
</template>

<script>
  export default {
    name: 'app',
  }
</script>
