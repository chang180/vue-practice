<template>
  <div>
    <button @click="setShow(show - 1)">←</button>
    <span>
      <button
        v-for="num of imgs.length"
        :key="num - 1"
        @click="setShow(num - 1)"
      >
        {{ num }}
      </button>
    </span>
    <button @click="setShow(show + 1)">→</button>
    <transition-group tag="div" class="container" :name="transitionName">
      <div
        class="page"
        v-for="(img, index) of imgs"
        :key="index"
        v-show="index === show"
      >
        <img :src="img.src" />
      </div>
    </transition-group>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
let timer
// eslint-disable-next-line no-unused-vars
const interval = 5000
export default {
  data () {
    return {
      transitionName: 'left-in',
      show: 0,
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
  },
  mounted () {
    timer = setInterval(this.nextShow, interval)
  },
  methods: {
    setShow (index) {
      this.show = index
    },
    nextShow () {
      this.show++
    }
  },
  // 加個watch免得使用者手賤自己調整
  watch: {
    show (nVal, oVal) {
      if (nVal < 0) {
        this.show = this.imgs.length - 1
      } else if (nVal > this.imgs.length - 1) {
        this.show = 0
      } else {
        if (oVal < 0) this.transitionName = 'left-in'
        else if (oVal > this.imgs.length - 1) this.transitionName = 'right-in'
        else this.transitionName = nVal > oVal ? 'right-in' : 'left-in'
      }
    }
  }
}
</script>

<style scoped>
.right-in-enter {
  left: 100%;
}
.right-in-enter-active,
.right-in-leave-active {
  transition: left 0.5s;
}
.right-in-enter-to,
.right-in-leave {
  left: 0;
}
.right-in-leave-to {
  left: -100%;
}
.left-in-enter {
  left: -100%;
}
.left-in-enter-active,
.left-in-leave-active {
  transition: left 0.5s;
}
.left-in-enter-to,
.left-in-leave {
  left: 0;
}
.left-in-leave-to {
  left: 100%;
}
.container {
  position: relative;
  max-width: 1000px;
  max-height: 500px;
  margin: 0 auto;
}
.page {
  position: absolute;
  max-width: 1000px;
  max-height: 500px;
}
img {
  max-width: 1000px;
  max-height: 500px;
  object-fit: contain;
}
</style>
