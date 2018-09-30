<template lang="pug">
  v-card
    v-card-title Details
    v-card-text
      v-form
        text-state-model(
          stateProp="activePost.title"
          label="Title"
        )
        //v-text-field(
          :value="title"
          @input="x => newTitle = x"
          label="Title"
        //)
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'post-details',
    computed: {
      ...mapGetters(['activePost']),
    },
    data() {
      return {
        newTitle: '',
      }
    },
  }
</script>
