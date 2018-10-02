<template lang="pug">
  v-card(class="pa-3")
    v-card-title(class="display-1 pl-0") {{ activePost.title }}
    v-card-text(class="pa-0")
      state-model(stateProp="activePost.description")
        medium-editor(
          slot-scope="{ value, input }"
          :value="newDescription"
          :options="options"
          @input="input"
          class="elevation-0"
        )
    v-card-actions(class="px-0")
      span(v-if="lastUpdated"
        class="caption"
      ) Last updated {{ lastUpdated }}
      v-spacer
      v-btn(@click="savePost") save
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'posts-editor',
    data() {
      return {
        newDescription: '',
        options: {
          toolbar: {
            diffTop: -70,
          },
        }
      }
    },
    computed: {
      ...mapGetters(['lastUpdated']),
      activePost() { return this.$store.state.activePost },
      activePostId() { return this.$store.state.activePost.id },
    },
    watch: {
      activePostId(val, old) {
        if (val !== old) this.newDescription = this.activePost.description
      },
    },
    methods: {
      ...mapActions(['savePost']),
    },
  }
</script>
