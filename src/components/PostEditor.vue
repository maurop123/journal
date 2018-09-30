<template lang="pug">
  v-card(class="pa-3")
    v-card-title(class="display-1 pl-0") {{ activePost.title }}
    v-card-text(class="pa-0")
      state-model(stateProp="activePost.description")
        medium-editor(
          slot-scope="{ value, input }"
          :value="newDescription"
          @input="input"
          class="elevation-0"
        )
    v-card-actions(class="pr-0")
      v-spacer
      v-btn(@click="savePost") save
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import _debounce from 'lodash/debounce'

  export default {
    name: 'posts-editor',
    data() {
      return {
        newDescription: ''
      }
    },
    computed: {
      ...mapGetters(['activePost']),
    },
    watch: {
      activePost(val, old) {
        if (val.id !== old.id) this.newDescription = val.description
        else this.savePost()
      },
    },
    methods: {
      ...mapActions(['savePost']),
    },
  }
</script>
