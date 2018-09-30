<template lang="pug">
  v-card
    v-card-title Details
    v-card-text
      v-form
        text-state-model(
          stateProp="activePost.title"
          label="Title"
        )
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'post-details',
    computed: {
      ...mapGetters(['activePost']),
    },
  }
</script>
