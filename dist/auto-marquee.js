(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".wrapper[data-v-b36df89a]{position:relative;width:100%;height:1.2em}.marquee-detail[data-v-b36df89a]{position:absolute;top:50%;width:100%;height:1.2em;line-height:1.2em;transform:translateY(-50%);overflow:hidden;background-color:var(--78da8312)}.original-text[data-v-b36df89a]{max-height:2.4em}.marquee-text[data-v-b36df89a]{position:relative;top:-2.4em;white-space:nowrap;background-color:inherit}.marquee-text[data-v-b36df89a]:after{content:attr(data-marquee-text);padding:0 5em}@keyframes move-b36df89a{to{transform:translate3d(-50%,0,0)}}.marquee-text.auto-type[data-v-b36df89a]{display:inline-block;animation:move-b36df89a var(--55cf0309) .3s linear infinite}.marquee-text.hover-type[data-v-b36df89a]{display:block;overflow:hidden;text-overflow:ellipsis}.marquee-text.hover-type[data-v-b36df89a]:hover{display:inline-block;animation:move-b36df89a var(--55cf0309) .3s linear infinite}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { useCssVars as n, computed as u, openBlock as l, createElementBlock as i, createElementVNode as r, toDisplayString as c, normalizeClass as p } from "vue";
const d = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [s, o] of t)
    a[s] = o;
  return a;
}, _ = { class: "wrapper" }, m = { class: "marquee-detail" }, v = { class: "original-text" }, f = ["data-marquee-text"], g = /* @__PURE__ */ Object.assign({
  name: "AutoMarquee"
}, {
  __name: "AutoMarquee",
  props: {
    // 跑马灯效果展示的内容
    value: {
      type: String,
      default: ""
    },
    /*
    * auto : 文本过长时自动进行跑马灯效果
    * hover: 鼠标悬浮时，过长的文本才进行跑马灯效果
    * */
    type: {
      type: String,
      default: "auto",
      validator: (e) => ["auto", "hover"].includes(e)
    },
    // 跑马灯每轮的时间
    time: {
      type: [Number, String],
      default: "10s"
    },
    // 跑马灯的背景色
    bg: {
      type: String,
      default: "#fff"
    }
  },
  setup(e) {
    n((o) => ({
      "78da8312": t.bg,
      "55cf0309": a.value
    }));
    const t = e, a = u(() => `${t.time.toString().split("s")[0]}s`), s = u(() => t.type === "auto" ? "auto-type" : "hover-type");
    return (o, y) => (l(), i("div", _, [
      r("div", m, [
        r("div", v, c(t.value), 1),
        r("span", {
          class: p(["marquee-text", s.value]),
          "data-marquee-text": t.value
        }, c(t.value), 11, f)
      ])
    ]));
  }
}), h = /* @__PURE__ */ d(g, [["__scopeId", "data-v-b36df89a"]]);
export {
  h as default
};
