<template>
  <div class="example">
    <h1>This is an Post Number page</h1>
    <template v-if="disSelect != null">
      {{ districts[disSelect].zip }}
    </template>
    <select v-model="citySelect">
      <option value="null">請選擇</option>
      <option v-for="(city, index) of cities" :value="index" :key="city">{{
        city
      }}</option>
    </select>
    <select v-model="disSelect">
      <option value="null">請選擇</option>
      <!-- <option v-for="dis of districts" :value="dis.zip" :key="dis.name">{{ -->
      <option
        v-for="(dis, index) of districts"
        :value="index"
        :key="dis.name"
        >{{ dis.name }}</option
      >
    </select>
  </div>
</template>
<script>
const postData = require('@/assets/post.json')
export default {
  data () {
    return {
      citySelect: null,
      disSelect: null
    }
  },
  computed: {
    cities () {
      return postData.map(item => {
        return item.name
      })
    },
    districts () {
      let districts = []
      if (this.citySelect !== null) {
        districts = postData[this.citySelect].districts
      }
      return districts
    }
  }
}
</script>
