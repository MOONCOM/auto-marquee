<script setup>
  import {computed} from "vue";

  defineOptions({
    name:'AutoMarquee',
  })
  const props = defineProps({
    // 跑马灯效果展示的内容
    value: {
      type: String,
      default: ''
    },
    /*
    * auto : 文本过长时自动进行跑马灯效果
    * hover: 鼠标悬浮时，过长的文本才进行跑马灯效果
    * */
    type: {
      type: String,
      default: 'auto',
      validator: (value) => ['auto','hover'].includes(value),
    },
    // 跑马灯每轮的时间
    time: {
      type: [Number, String],
      default: '10s',
    },
    // 跑马灯的背景色
    bg: {
      type: String,
      default: '#fff',
    },
  });

  const timeComputed = computed(() => `${props.time.toString().split('s')[0]}s`);
  const useType = computed(() => props.type === 'auto' ? 'auto-type' : 'hover-type');
</script>

<template>
  <div class="wrapper">
    <div class="marquee-detail">
      <div class="original-text">{{ props.value }}</div>
      <span class="marquee-text" :class="useType" :data-marquee-text="props.value">{{ props.value }}</span>
    </div>
  </div>
</template>

<style scoped>
.wrapper{
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 1.2em;
}
.marquee-detail{
  position:absolute;
  top:50%;
  width: 100%;
  height: 1.2em;
  line-height: 1.2em;
  transform:  translateY(-50%);
  overflow:hidden;
  background-color: v-bind('props.bg');
}
.original-text{
  max-height:2.4em;
}
.marquee-text{
  position: relative;
  top: -2.4em;
  white-space: nowrap;
  background-color: inherit;
}
.marquee-text::after{
  content: attr(data-marquee-text);
  padding: 0 5em;
}

@keyframes move {
  to {
    transform: translate3d(-50%, 0, 0);
  }
}


.marquee-text.auto-type{
  display: inline-block;
  animation: move v-bind('timeComputed') .3s linear infinite;
}

.marquee-text.hover-type{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.marquee-text.hover-type:hover{
  display: inline-block;
  animation: move v-bind('timeComputed') .3s linear infinite;
}

</style>