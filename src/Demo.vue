<script setup>
import {reactive} from "vue";

const state = reactive({
  text1:'计算机语言',
  text2:'计算机语言（Computer Language）指用于人与计算机之间通讯的语言。计算机语言是人与计算机之间传递信息的媒介。',
  time:5,
});
</script>

<template>
  <div class="demo-page">
<!--    <p>auto-marquee的跑马灯效果分为两种情况，分别为 type:auto 时的自动</p>-->
    <fieldset>
      <legend>Input content</legend>
      <div class="content">
        <p>
          text1: <input type="text" v-model="state.text1">
        </p>
        <p>
          text2: <input type="text" v-model="state.text2">
        </p>
        <p>
          time: <input type="range" min="1" max="10" v-model="state.time">
          (取值范围为1—10，当前为{{state.time}})
          <div>(为animation-duration的值，数值越大，文字速度越慢)</div>
        </p>
      </div>
    </fieldset>

    <fieldset style="margin:30px 0">
      <legend>type:auto</legend>
      <div class="content show">
        text1
        <p style="margin-bottom:40px">
          <auto-marquee :value="state.text1" :time="state.time"></auto-marquee>
        </p>
        text2
        <p>
          <auto-marquee :value="state.text2" :time="state.time"></auto-marquee>
        </p>
      </div>
    </fieldset>

    <fieldset>
      <legend>type:hover</legend>
      <div class="content show">
        text1
        <p style="margin-bottom:40px">
          <auto-marquee :value="state.text1" :time="state.time" type="hover"></auto-marquee>
        </p>
        text2
        <p>
          <auto-marquee :value="state.text2" :time="state.time" type="hover"></auto-marquee>
        </p>
      </div>
    </fieldset>
  </div>
</template>

<style scoped>
.demo-page{
  width:500px;
}

.show p{
  cursor: pointer;
}
</style>
