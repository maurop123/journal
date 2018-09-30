<template lang="pug">
  v-card
    v-card-title
      v-text-field(
        v-model="title"
        label="Title"
      )
    //v-card-text
    medium-editor(
      :value="description"
      @input="x => newDescription = x"
      class="elevation-0"
    )
    v-card-actions
      v-spacer
      v-btn(@click="save") save
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import moment from 'moment'

  export default {
    name: 'posts-editor',
    data() {
      return {
        id: null,
        title: '',
        createdDatetime: moment().format('x'),
        description: '',
        newDescription: '',
      }
    },
    computed: {
      ...mapGetters(['activePost']),
    },
    watch: {
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
    },
    methods: {
      ...mapActions(['savePost']),
      save() {
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
      },
    },
  }
</script>
