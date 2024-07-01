# AutoMarquee
## 安装
```
npm i auto-marquee
```

## 描述
文本未充满容器时，展示文本；文本超出容器时，自动进行跑马灯展示

## 参数选项
| 参数  | 类型            | 默认值  | 描述                                                      |
|-----|---------------|------|---------------------------------------------------------|
| value | String        | 空字符串 | 线上文件的url                                                |
| type | String        | auto | auto : 文本过长时自动进行跑马灯效果  <br/> hover: 鼠标悬浮时，过长的文本才进行跑马灯效果 |
| time | String/Number | 10s  | 为animation-duration的值，数值越大，文字速度越慢                       |
| bg  | String        | #fff | 背景色，如果项目有主题切换功能，需要考虑为 bg 动态赋值                           |

## 示例
点击查看 [线上演示](https://mooncom.github.io/the-file-preview/demo/).

## 项目地址
- [github](https://github.com/MOONCOM/AutoMarquee)

## 支持
vue2 vue3

## 使用
```
<script setup>
import {reactive} from "vue";
import AutoMarquee from 'auto-marquee';

const state = reactive({
  text:'计算机语言',
});
</script>

<template>
    <auto-marquee :value="state.text"></auto-marquee>
</template>
```
