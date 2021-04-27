<template>
  <div class='container'>
<div class="page" v-for="(img,index) of imgs" :key="index">
    <img :src="img.src">
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgs: [
        { src: './images/sc/chihiro001.jpg' },
        { src: './images/sc/chihiro002.jpg' },
        { src: './images/sc/chihiro003.jpg' },
        { src: './images/sc/chihiro004.jpg' },
        { src: './images/sc/chihiro005.jpg' },
        { src: './images/sc/chihiro006.jpg' },
        { src: './images/sc/chihiro007.jpg' },
        { src: './images/sc/chihiro008.jpg' },
        { src: './images/sc/chihiro009.jpg' },
        { src: './images/sc/chihiro010.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
.container{
    position:relative;
    max-width:1000px;
    max-height:500px;
    margin:0 auto;
}
.page{
    position:absolute;
    max-width:1000px;
    max-height:500px;
}
img{
    max-width:1000px;
    max-height:500px;
    object-fit: contain;
}
</style>
