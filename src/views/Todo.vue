/* eslint-disable space-before-blocks */
/* eslint-disable space-before-blocks */
/* eslint-disable space-before-blocks */
/* eslint-disable space-before-blocks */
<template>
  <div class="todo">
    <h1>This is a Todo page</h1>
    <p>show:{{ filter }}</p>
    <div>{{ list }}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      filter: 'all' // all,active,done
    }
  },
  computed: {
    list () {
      return this.$store.getters.filterList(this.filter)
    }
  }
}
</script>
