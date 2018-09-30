<template lang="pug">
  v-card(class="pa-3")
    v-card-title(class="display-1 pl-0") {{ activePost.title }}
    v-card-text(class="pa-0")
      state-model(stateProp="activePost.description")
        medium-editor(
          slot-scope="{ value, input }"
          :value="value"
          @input="input"
          class="elevation-0"
        )
    v-card-actions(class="pr-0")
      v-spacer
      v-btn(@click="savePost") save
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'posts-editor',
    /*data() {
      return {
        id: null,
        createdDatetime: moment().format('x'),
        description: '',
        newDescription: '',
      }
    },*/
    computed: {
      activePost() { return this.$store.state.activePost }
    },
    /*watch: {
      activePost(val) {
        if (val) {
          this.id = val.id
          this.title = val.title
          this.createdDatetime = val.createdDatetime
          this.description = val.description
        } else {
          this.reset()
        }
      },
    },*/
    methods: {
      ...mapActions(['savePost']),
      /*save() {
        const { id, title, createdDatetime, newDescription: description } = this
        if (!id) this.savePost({ title, description, createdDatetime })
        else this.savePost({ id, title, description, createdDatetime })
      },
      reset() {
        this.id = null
        this.title = ''
        this.createdDatetime = moment().format('x')
        this.description = ''
        this.newDescription = ''
      },*/
    },
  }
</script>
