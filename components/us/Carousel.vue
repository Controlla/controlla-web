<template>
  <section class="min-h-[50%] overflow-y-hidden">
    <div class="carousel">
      <div class="inner" ref="inner" :style="innerStyles">
        <div class="card" v-for="card in cards" :key="card">
          <img :src="`${card}`" alt="">
        </div>
      </div>
      <div class="flex justify-center">
        <button class="carousel_btn" @click="prev">←</button>  
        <button class="carousel_btn" @click="next">→</button>  
      </div>
    </div>
  </section>  
</template>

<script>
export default {
  data () {
    return {
      cards: [
        'us_carousel/4E0A05CC-9286-46D8-BB88-B21D7B010431_1_100_o.svg', 
        'us_carousel/7A74E68E-3B61-4601-AB9C-0E2F50A687C0_1_100_o-1.svg',  
        'us_carousel/25FD4FFA-F53C-4753-9B23-BEFE193D8191_1_100_o-1.svg', 
        'us_carousel/41A427A3-715C-4FF3-A33F-EFE10AB5A3A7_1_100_o.svg', 
        'us_carousel/BD3C576A-1DF1-4ABA-A376-97C93458806C_1_100_o.svg', 
        'us_carousel/CB08D40C-D307-47E4-9E1A-29C19E6ED427_1_100_o-1.svg', 
        'us_carousel/F302C381-16B8-4A5A-9188-2DE6DB8AC15B_1_105_c-5-1.svg', 
        ],
      innerStyles: {},
      step: '',
      transitioning: false
    }
  },
  mounted () {
    this.setStep()
    this.resetTranslate()
  },
  methods: {
    setStep () {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.cards.length
      this.step = `${innerWidth / totalCards}px`
    },
    next () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveLeft()
      this.afterTransition(() => {
        const card = this.cards.shift()
        this.cards.push(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    prev () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveRight()
      this.afterTransition(() => {
        const card = this.cards.pop()
        this.cards.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
      }
    },
    moveRight () {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
      }
    },
    afterTransition (callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },
    resetTranslate () {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    }
  }
}
</script>

<style>
.carousel {
  width: 100%;
  overflow: hidden;
}
.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}
.card {
  width: 33%;
  margin-right: 10%;
  display: inline-flex;
  /* optional */
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}
/* optional */
.carousel_btn {
  margin-right: 5px;
  margin-top: 10px;
  position: relative;
  font-size: 3rem;
  color: skyblue;
  font-weight: bold;
}
</style>