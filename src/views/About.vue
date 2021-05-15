<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="change(now - 1)">Prev</button>
    <button @click="change(now + 1)">Next</button>
    <div class="card-slider">
      <transition-group class="card-slider-items" name="flip-list">
        <div
          class="card-slider-item"
          v-for="item of showImages"
          :key="item.id"
          :data-id="item.id"
        >
          <img :src="item.src" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      now: 0,
      imgs: [
        { id: 1, src: './images/sc/1.jpg' },
        { id: 2, src: './images/sc/2.jpg' },
        { id: 3, src: './images/sc/3.jpg' },
        { id: 4, src: './images/sc/4.jpg' },
        { id: 5, src: './images/sc/5.jpg' }
      ]
    }
  },
  computed: {
    allImages () {
      // 5 + 4 筆
      const ary = []
      const total = this.imgs.length
      let count
      if (total > 0) {
        while (ary.length < 5 + 4) {
          count = Math.floor(ary.length / total)
          for (let i = 0; i < total; i++) {
            ary.push({
              id: count + '-' + this.imgs[i].id,
              src: this.imgs[i].src
            })
          }
        }
      }
      return ary
    },
    showImages () {
      const start = this.now - 4

      return this.allImages.slice(start).concat(this.allImages.slice(0, start))
    }
  },
  methods: {
    change (index) {
      const limit = this.allImages.length - 1
      this.now = index < 0 ? limit : index > limit ? 0 : index
      console.log(index)
    }
  }
}
</script>
<style scoped>
.card-slider {
  display: flex;
  width: 100%;
  overflow: hidden;
}
.card-slider-items {
  display: flex;
  width: 100%;
  margin-left: calc(-1 * 25% * 2.5);
}
.card-slider-item {
  flex: calc(25% - 20px) 0 0;
  margin: 10px;
  z-index: 1;
  background:lightgrey;
}
.card-slider-item:first-child,
.card-slider-item:last-child {
  z-index: -1;
  visibility: hidden;
  /* opacity:0; */
}
img {
  width: 100%;
}
.flip-list-move {
  transition: transform 1s;
}

@media(max-width:720px) and (min-width:360px){
  .card-slider {
  display: flex;
  width: 100%;
  overflow: hidden;
}
.card-slider-items {
  display: flex;
  width: 100%;
  margin-left: calc(-1 * 50% * 3.5);
}
.card-slider-item {
  flex: calc(50% - 20px) 0 0;
  margin: 10px;
  z-index: 1;
  background:lightgrey;
}
}
@media(max-width:360px){
  .card-slider {
  display: flex;
  width: 100%;
  overflow: hidden;
}
.card-slider-items {
  display: flex;
  width: 100%;
  margin-left: calc(-1 * 100% * 4);
}
.card-slider-item {
  flex: calc( 100% - 20px) 0 0;
  margin: 10px;
  z-index: 1;
  background:lightgrey;
}
}
</style>
