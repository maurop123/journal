<template lang="pug">
  v-card
    v-card-title Details
    v-card-text
      v-form
        text-state-model(
          stateProp="activePost.title"
          label="Title"
        )
    v-card-actions(v-if="activePost.id")
      v-spacer
      v-btn(@click="deleteActivePost") Delete
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'post-details',
    computed: {
      ...mapState(['activePost']),
    },
    methods: {
      ...mapActions(['deleteActivePost']),
    },
  }
</script>
