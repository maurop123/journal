<template lang="pug">
  v-card
    v-card-title Details
    v-card-text
      v-form
        text-state-model(
          stateProp="activePost.title"
          label="Title"
        )
    v-card-actions
      v-btn(@click="deleteActivePost" color="red" dark) Delete
      v-spacer
      v-btn(@click="savePost" color="white" class="primary--text") Save
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'post-details',
    computed: {
      ...mapState(['activePost']),
    },
    methods: {
      ...mapActions(['deleteActivePost', 'savePost']),
    },
  }
</script>
