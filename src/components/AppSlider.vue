<template>
  <div class="slider" ref="slider">
    <div @click="moveSlider(1)" class="slider__controls left">
      <span  href="#" class="slider__controls__link"> <i class="fa-solid fa-arrow-left"></i> </span>
    </div>
    <img v-for="(slide, index) in slides" :key="index" :src="slide" class="slider__content">
    <div @click="moveSlider(2)" class="slider__controls right">
      <span  href="#" class="slider__controls__link"> <i class="fa-solid fa-arrow-right"></i> </span>
    </div>
  </div>

</template>

<script>
export default {
  name: "AppSlider",
  mounted() {
    this.slider = this.$refs.slider;
    this.height = this.slider.offsetHeight;
    this.Width = this.slider.offsetWidth;
  },
  props: {
    slides: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      slider: null,
      height: null,
      Width: null,
      count: 0
    };
  },
  methods: {
    moveSlider(n) {
      if (n == 1) {
        this.count--
        if( this.count < 0 ) this.count = 0;

        this.slider.scrollTo({
          left: this.count * this.Width,
          top: this.height,
          behavior: 'smooth'
        })
        
      } else { 
        this.count++
        if( this.count > this.slides.length ) this.count = this.slides.length-1
        this.slider.scrollTo({
          left: this.Width * this.count,
          top: this.height,
          behavior: 'smooth'
        })
      }
    }
  }
};
</script>

<style>
.slider {
  @apply flex w-full h-[90vh] snap-x snap-mandatory overflow-x-scroll overflow-y-hidden;
}

.slider img {
  @apply flex-[0_0_100%] w-full object-cover snap-center z-[-100];
}

.slider__controls {
  @apply absolute top-0 w-12 flex items-center justify-around flex-col transition-all ease-in-out duration-200 cursor-pointer;
}

.right {
 @apply right-0 px-20 h-full overflow-hidden;
}

.left {
  @apply left-0 px-20 h-full overflow-hidden;
}

.slider__controls__link {

  @apply text-black flex justify-center items-center font-bold text-7xl w-16 h-16 rounded-full transition-all ease-in-out duration-200;
}

.slider__controls:hover{
  @apply bg-[#b4b4b44d];
}
</style>
