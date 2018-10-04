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
      span(v-if="lastUpdated()"
        class="caption"
      ) Last updated {{ lastUpdated() }}
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
  }
</script>

<style>
  blockquote {
    background: #f9f9f9;
    border-left: 5px solid #ccc;
    margin: 1.5em 0;
    padding: 0.5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
    font-size: 1.25em;
    font-color: rgba(0,0,0,0.5);
  }
  blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.05em;
    vertical-align: -0.4em;
  }
  blockquote p {
    display: inline;
  }
</style>
