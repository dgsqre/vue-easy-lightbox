import { defineComponent as _, createVNode as n, Fragment as e9, ref as k, reactive as V, computed as I, watch as j, nextTick as t9, onMounted as _9, onBeforeUnmount as O9, Teleport as A9, Transition as N, withModifiers as R9, isVNode as F9, isRef as H9 } from "vue";
const f = "dgsq", h = /* @__PURE__ */ _({
  name: "SvgIcon",
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return () => n("svg", {
      class: `${f}-icon icon`,
      "aria-hidden": "true"
    }, [n("use", {
      "xlink:href": `#icon-${e.type}`
    }, null)]);
  }
}), O = typeof window < "u", L = () => {
};
let i9 = !1;
if (O)
  try {
    const e = {};
    Object.defineProperty(e, "passive", {
      get() {
        i9 = !0;
      }
    }), window.addEventListener("test-passive", L, e);
  } catch {
  }
const n9 = (e, l, a, d = !1) => {
  O && e.addEventListener(
    l,
    a,
    i9 ? { capture: !1, passive: d } : !1
  );
}, l9 = (e, l, a) => {
  O && e.removeEventListener(l, a);
}, j9 = (e) => {
  e.preventDefault();
}, N9 = Object.prototype.toString, q = (e) => (l) => N9.call(l).slice(8, -1) === e;
function P9(e) {
  return q("Array")(e);
}
const V9 = (e) => !!e && q("Object")(e), c9 = (e) => !!e && q("String")(e);
function W9(e) {
  return e != null;
}
const q9 = /* @__PURE__ */ _({
  name: "Toolbar",
  props: {
    zoomIn: {
      type: Function,
      default: L
    },
    zoomOut: {
      type: Function,
      default: L
    },
    rotateLeft: {
      type: Function,
      default: L
    },
    rotateRight: {
      type: Function,
      default: L
    },
    resize: {
      type: Function,
      default: L
    },
    rotateDisabled: {
      type: Boolean,
      default: !1
    },
    zoomDisabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return () => n("div", {
      class: `${f}-toolbar`
    }, [!e.zoomDisabled && n(e9, null, [n("div", {
      role: "button",
      "aria-label": "zoom in button",
      class: "toolbar-btn toolbar-btn__zoomin",
      onClick: e.zoomIn
    }, [n(h, {
      type: "zoomin"
    }, null)]), n("div", {
      role: "button",
      "aria-label": "zoom out button",
      class: "toolbar-btn toolbar-btn__zoomout",
      onClick: e.zoomOut
    }, [n(h, {
      type: "zoomout"
    }, null)])]), n("div", {
      role: "button",
      "aria-label": "resize image button",
      class: "toolbar-btn toolbar-btn__resize",
      onClick: e.resize
    }, [n(h, {
      type: "resize"
    }, null)]), !e.rotateDisabled && n(e9, null, [n("div", {
      role: "button",
      "aria-label": "image rotate left button",
      class: "toolbar-btn toolbar-btn__rotate",
      onClick: e.rotateLeft
    }, [n(h, {
      type: "rotate-left"
    }, null)]), n("div", {
      role: "button",
      "aria-label": "image rotate right button",
      class: "toolbar-btn toolbar-btn__rotate",
      onClick: e.rotateRight
    }, [n(h, {
      type: "rotate-right"
    }, null)])])]);
  }
}), U9 = () => n("div", {
  class: `${f}-loading`
}, [n("div", {
  class: "ring"
}, null)]), Z9 = () => n("div", {
  class: `${f}-on-error`
}, [n("div", {
  class: "ring"
}, null), n(h, {
  type: "img-broken"
}, null)]), p9 = (e, {
  slots: l
}) => n("div", {
  class: `${f}-title`
}, [l.default ? l.default() : ""]), K9 = /* @__PURE__ */ _({
  name: "DefaultIcons",
  setup() {
    return () => n("svg", {
      "aria-hidden": !0,
      style: "position: absolute; width: 0; height: 0; overflow: hidden; visibility: hidden;"
    }, [n("symbol", {
      id: "icon-rotate-right",
      viewBox: "0 0 1024 1024"
    }, [n("path", {
      d: "M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973z m282.559912-479.07185A509.887841 509.887841 0 0 0 511.99984 0.00032C229.215928 0.00032 0 229.216248 0 512.00016s229.215928 511.99984 511.99984 511.99984 511.99984-229.215928 511.99984-511.99984c0-3.743999-0.032-7.455998-0.128-11.167997-1.631999-11.295996-8.159997-27.103992-31.87199-27.103991-27.487991 0-31.67999 21.247993-32.03199 32.06399l0.032 4.127999a30.62399 30.62399 0 0 0 0.16 2.079999H959.9997c0 247.423923-200.575937 447.99986-447.99986 447.99986S63.99998 759.424083 63.99998 512.00016 264.575917 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 1 277.439913 96.22397l-94.91197 91.679971c-25.439992 24.607992-17.439995 44.991986 17.887994 45.599986l188.031942 3.295999a64.31998 64.31998 0 0 0 65.055979-62.84798l3.295999-188.127942C969.407697 15.040315 949.311703 5.792318 923.871711 30.368311l-87.999972 85.023973z",
      fill: ""
    }, null)]), n("symbol", {
      id: "icon-rotate-left",
      viewBox: "0 0 1024 1024"
    }, [n("path", {
      d: "M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973zM188.159941 115.392284A509.887841 509.887841 0 0 1 511.99984 0.00032c282.783912 0 511.99984 229.215928 511.99984 511.99984s-229.215928 511.99984-511.99984 511.99984S0 794.784072 0 512.00016c0-3.743999 0.032-7.455998 0.128-11.167997 1.631999-11.295996 8.159997-27.103992 31.87199-27.103991 27.487991 0 31.67999 21.247993 32.03199 32.06399L63.99998 509.920161a30.62399 30.62399 0 0 1-0.16 2.079999H63.99998c0 247.423923 200.575937 447.99986 447.99986 447.99986s447.99986-200.575937 447.99986-447.99986S759.423763 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 0-277.439913 96.22397l94.91197 91.679971c25.439992 24.607992 17.439995 44.991986-17.887994 45.599986L123.551961 300.800226a64.31998 64.31998 0 0 1-65.055979-62.84798l-3.295999-188.127942C54.591983 15.040315 74.687977 5.792318 100.127969 30.368311l87.999972 85.023973z",
      fill: ""
    }, null)]), n("symbol", {
      id: "icon-resize",
      viewBox: "0 0 1024 1024"
    }, [n("path", {
      d: "M456.036919 791.8108 270.553461 791.8108 460.818829 601.572038l-39.593763-39.567157L231.314785 751.915162l0.873903-183.953615c0-15.465227-12.515035-27.981285-27.981285-27.981285s-27.981285 12.515035-27.981285 27.981285l0 251.829516c0 8.3072 3.415796 14.975063 8.826016 19.564591 5.082762 5.192256 12.132318 8.416693 19.947308 8.416693l251.036453 0c15.46625 0 27.981285-12.514012 27.981285-27.981285C484.018204 804.325835 471.504192 791.8108 456.036919 791.8108zM838.945819 184.644347c-5.082762-5.191232-12.132318-8.416693-19.947308-8.416693L567.961034 176.227654c-15.46625 0-27.981285 12.515035-27.981285 27.981285 0 15.46625 12.514012 27.981285 27.981285 27.981285l185.483458 0L563.206754 422.427962l39.567157 39.567157 189.910281-189.910281-0.873903 183.953615c0 15.46625 12.514012 27.981285 27.981285 27.981285s27.981285-12.514012 27.981285-27.981285L847.772858 204.208938C847.771835 195.902762 844.356039 189.234899 838.945819 184.644347zM847.771835 64.303538 176.227142 64.303538c-61.809741 0-111.924115 50.115398-111.924115 111.924115l0 671.544693c0 61.809741 50.114374 111.924115 111.924115 111.924115l671.544693 0c61.809741 0 111.924115-50.114374 111.924115-111.924115l0-671.544693C959.69595 114.418936 909.581576 64.303538 847.771835 64.303538zM903.733381 847.772346c0 30.878265-25.056676 55.962569-55.962569 55.962569L176.227142 903.734916c-30.90487 0-55.962569-25.084305-55.962569-55.962569l0-671.544693c0-30.9325 25.056676-55.962569 55.962569-55.962569l671.544693 0c30.90487 0 55.962569 25.03007 55.962569 55.962569L903.734404 847.772346z"
    }, null)]), n("symbol", {
      id: "icon-img-broken",
      viewBox: "0 0 1024 1024"
    }, [n("path", {
      d: "M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m0 682.666667H213.333333v-195.413334l42.24 42.24 170.666667-170.666666 170.666667 170.666666 170.666666-170.24L810.666667 530.346667V810.666667z m0-401.493334l-43.093334-43.093333-170.666666 171.093333-170.666667-170.666666-170.666667 170.666666-42.24-42.666666V213.333333h597.333334v195.84z"
    }, null)]), n("symbol", {
      id: "icon-prev",
      viewBox: "0 0 1024 1024"
    }, [n("path", {
      d: "M784.652701 955.6957 346.601985 517.644983c-2.822492-2.822492-2.822492-7.902977 0-11.289967l439.179713-439.179713c6.77398-6.77398 10.725469-16.370452 10.725469-25.966924L796.507166 36.692393c0-20.32194-16.370452-36.692393-36.692393-36.692393l-4.515987 0c-9.596472 0-19.192944 3.951488-25.966924 10.725469L250.072767 489.420066c-12.418964 12.418964-12.418964 32.740904 0 45.159868l477.565601 477.565601c7.338479 7.338479 17.499449 11.854465 28.224917 11.854465l0 0c22.015436 0 40.079383-18.063947 40.079383-40.079383l0 0C796.507166 973.759647 791.99118 963.598677 784.652701 955.6957z"
    }, null)]), n("symbol", {
      id: "icon-next",
      viewBox: "0 0 1024 1024"
    }, [n("path", {
      d: "M246.121279 955.6957l438.050717-438.050717c2.822492-2.822492 2.822492-7.902977 0-11.289967L244.992282 67.175303c-6.77398-6.77398-10.725469-16.370452-10.725469-25.966924L234.266814 36.692393C234.266814 16.370452 250.637266 0 270.959206 0l4.515987 0c9.596472 0 19.192944 3.951488 25.966924 10.725469l478.694598 478.694598c12.418964 12.418964 12.418964 32.740904 0 45.159868l-477.565601 477.565601c-7.338479 7.338479-17.499449 11.854465-28.224917 11.854465l0 0c-22.015436 0-40.079383-18.063947-40.079383-40.079383l0 0C234.266814 973.759647 238.7828 963.598677 246.121279 955.6957z"
    }, null)]), n("symbol", {
      id: "icon-zoomin",
      viewBox: "0 0 1024 1024"
    }, [n("path", {
      d: "M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"
    }, null), n("path", {
      d: "M235.712 369.92h390.72v127.104H235.712z"
    }, null), n("path", {
      d: "M367.488 238.144h127.104v390.72H367.488z"
    }, null)]), n("symbol", {
      id: "icon-close",
      viewBox: "0 0 1024 1024"
    }, [n("path", {
      d: "M570.24 512l259.2 259.2-58.88 58.24L512 570.24l-261.12 261.12-58.24-58.24L453.76 512 194.56 252.8l58.24-58.24L512 453.76l261.12-261.12 58.24 58.24z"
    }, null)]), n("symbol", {
      id: "icon-zoomout",
      viewBox: "0 0 1024 1024"
    }, [n("path", {
      d: "M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"
    }, null), n("path", {
      d: "M235.712 369.92h390.72v127.104H235.712z"
    }, null)])]);
  }
}), Y = O ? window : global;
let o9 = Date.now();
function G9(e) {
  const l = Date.now(), a = Math.max(0, 16 - (l - o9)), d = setTimeout(e, a);
  return o9 = l + a, d;
}
function W(e) {
  return (Y.requestAnimationFrame || G9).call(Y, e);
}
function s9(e) {
  (Y.cancelAnimationFrame || Y.clearTimeout).call(Y, e);
}
function a9(e, l) {
  const a = e.clientX - l.clientX, d = e.clientY - l.clientY;
  return Math.sqrt(a * a + d * d);
}
const J9 = () => {
  const e = k(), l = V({
    width: 0,
    height: 0,
    maxScale: 1
  });
  return {
    imgRef: e,
    imgState: l,
    setImgSize: () => {
      if (e.value) {
        const { width: d, height: c, naturalWidth: m } = e.value;
        l.maxScale = m / d, l.width = d, l.height = c;
      }
    }
  };
}, Q9 = (e, l, a) => {
  let d, c = !1;
  return {
    onMouseDown: (o) => {
      e.initX = e.lastX = o.clientX, e.initY = e.lastY = o.clientY, l.dragging = !0, c = !1, o.stopPropagation();
    },
    onMouseUp: (o) => {
      a(o.button) && s9(d), l.dragging = !1, c = !1;
    },
    onMouseMove: (o) => {
      if (l.dragging)
        if (a(o.button)) {
          if (c) return;
          c = !0, d = W(() => {
            const { top: i, left: u, lastY: g, lastX: D } = e;
            e.top = i - g + o.clientY, e.left = u - D + o.clientX, e.lastX = o.clientX, e.lastY = o.clientY, c = !1;
          });
        } else
          e.lastX = o.clientX, e.lastY = o.clientY;
      o.stopPropagation();
    }
  };
}, ee = (e, l, a, d, c) => {
  let m, r = !1;
  return {
    onTouchStart: (u) => {
      const { touches: g } = u;
      g.length > 1 && c() ? (a.gesturing = !0, l.touches = g) : (l.initX = l.lastX = g[0].clientX, l.initY = l.lastY = g[0].clientY, a.dragging = !0), u.stopPropagation();
    },
    onTouchMove: (u) => {
      if (r) return;
      const { touches: g } = u, { lastX: D, lastY: w, left: A, top: E, scale: M } = l;
      if (!a.gesturing && a.dragging) {
        if (!g[0]) return;
        const { clientX: x, clientY: v } = g[0];
        d() ? m = W(() => {
          l.lastX = x, l.lastY = v, l.top = E - w + v, l.left = A - D + x, r = !1;
        }) : (l.lastX = x, l.lastY = v);
      } else a.gesturing && l.touches.length > 1 && g.length > 1 && c() && (m = W(() => {
        const x = (a9(l.touches[0], l.touches[1]) - a9(g[0], g[1])) / e.width;
        l.touches = g;
        const v = M - x * 1.3;
        v > 0.5 && v < e.maxScale * 1.5 && (l.scale = v), r = !1;
      }));
    },
    onTouchEnd: () => {
      s9(m), a.dragging = !1, a.gesturing = !1, r = !1;
    }
  };
};
function P(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !F9(e);
}
function te(e) {
  return V9(e) && c9(e.src);
}
const S = /* @__PURE__ */ _({
  name: "VueEasyLightbox",
  props: {
    imgs: {
      type: [Array, String],
      default: () => ""
    },
    visible: {
      type: Boolean,
      default: !1
    },
    index: {
      type: Number,
      default: 0
    },
    scrollDisabled: {
      type: Boolean,
      default: !0
    },
    escDisabled: {
      type: Boolean,
      default: !1
    },
    moveDisabled: {
      type: Boolean,
      default: !1
    },
    titleDisabled: {
      type: Boolean,
      default: !1
    },
    maskClosable: {
      type: Boolean,
      default: !0
    },
    teleport: {
      type: [String, Object],
      default: null
    },
    swipeTolerance: {
      type: Number,
      default: 50
    },
    loop: {
      type: Boolean,
      default: !1
    },
    rtl: {
      type: Boolean,
      default: !1
    },
    zoomScale: {
      type: Number,
      default: 0.12
    },
    maxZoom: {
      type: Number,
      default: 3
    },
    minZoom: {
      type: Number,
      default: 0.1
    },
    rotateDisabled: {
      type: Boolean,
      default: !1
    },
    zoomDisabled: {
      type: Boolean,
      default: !1
    },
    pinchDisabled: {
      type: Boolean,
      default: !1
    },
    dblclickDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    hide: () => !0,
    /* eslint-disable @typescript-eslint/no-unused-vars */
    "on-error": (e) => !0,
    "on-prev": (e, l) => !0,
    "on-next": (e, l) => !0,
    "on-prev-click": (e, l) => !0,
    "on-next-click": (e, l) => !0,
    "on-index-change": (e, l) => !0,
    "on-rotate": (e) => !0
    /* eslint-enable @typescript-eslint/no-unused-vars */
  },
  setup(e, {
    emit: l,
    slots: a
  }) {
    const {
      imgRef: d,
      imgState: c,
      setImgSize: m
    } = J9(), r = k(e.index), y = k(""), o = V({
      scale: 1,
      lastScale: 1,
      rotateDeg: 0,
      top: 0,
      left: 0,
      initX: 0,
      initY: 0,
      lastX: 0,
      lastY: 0,
      touches: []
    }), i = V({
      loadError: !1,
      loading: !1,
      dragging: !1,
      gesturing: !1,
      wheeling: !1
    }), u = I(() => P9(e.imgs) ? e.imgs.map((t) => {
      if (typeof t == "string")
        return {
          src: t
        };
      if (te(t))
        return t;
    }).filter(W9) : c9(e.imgs) ? [{
      src: e.imgs
    }] : []), g = I(() => u.value[r.value]), D = I(() => {
      var t;
      return (t = u.value[r.value]) == null ? void 0 : t.src;
    }), w = I(() => {
      var t;
      return (t = u.value[r.value]) == null ? void 0 : t.title;
    }), A = I(() => {
      var t;
      return (t = u.value[r.value]) == null ? void 0 : t.alt;
    }), E = I(() => ({
      // cursor: currCursor(),
      // top: `calc(50% + ${imgWrapperState.top}px)`,
      // left: `calc(50% + ${imgWrapperState.left}px)`,
      // transition: status.dragging || status.gesturing ? 'none' : '',
      // transform: `translate(-50%, -50%) scale(${imgWrapperState.scale}) rotate(${imgWrapperState.rotateDeg}deg)`
    })), M = () => {
      l("hide");
    }, x = () => {
      o.scale = 1, o.lastScale = 1, o.rotateDeg = 0, o.top = 0, o.left = 0, i.loadError = !1, i.dragging = !1, i.loading = !0;
    }, v = (t, s) => {
      const b = r.value;
      x(), r.value = t, u.value[r.value] === u.value[t] && t9(() => {
        i.loading = !1;
      }), !(!e.visible || b === t) && (s && s(b, t), l("on-index-change", b, t));
    }, T = () => {
      const t = r.value, s = e.loop ? (t + 1) % u.value.length : t + 1;
      !e.loop && s > u.value.length - 1 || v(s, (b, z) => {
        l("on-next", b, z), l("on-next-click", b, z);
      });
    }, B = () => {
      const t = r.value;
      let s = t - 1;
      if (t === 0) {
        if (!e.loop) return;
        s = u.value.length - 1;
      }
      v(s, (b, z) => {
        l("on-prev", b, z), l("on-prev-click", b, z);
      });
    }, U = (t) => {
      Math.abs(1 - t) < 0.05 ? t = 1 : Math.abs(c.maxScale - t) < 0.05 && (t = c.maxScale), o.lastScale = o.scale, o.scale = t;
    }, X = () => {
      const t = o.scale + e.zoomScale;
      t < c.maxScale * e.maxZoom && U(t);
    }, $ = () => {
      const t = o.scale - e.zoomScale;
      t > e.minZoom && U(t);
    }, Z = () => {
      const t = o.rotateDeg % 360;
      l("on-rotate", Math.abs(t < 0 ? t + 360 : t));
    }, C = () => {
      o.rotateDeg -= 90, Z();
    }, R = () => {
      o.rotateDeg += 90, Z();
    }, F = () => {
      o.scale = 1, o.top = 0, o.left = 0;
    }, H = (t = 0) => e.moveDisabled ? !1 : t === 0, {
      onMouseDown: r9,
      onMouseMove: u9,
      onMouseUp: d9
    } = Q9(o, i, H), {
      onTouchStart: f9,
      onTouchMove: g9,
      onTouchEnd: m9
    } = ee(c, o, i, H, () => !e.pinchDisabled), v9 = () => {
      e.dblclickDisabled || (o.scale !== c.maxScale ? (o.lastScale = o.scale, o.scale = c.maxScale) : o.scale = o.lastScale);
    }, b9 = (t) => {
      i.loadError || i.gesturing || i.loading || i.dragging || i.wheeling || !e.scrollDisabled || e.zoomDisabled || (i.wheeling = !0, setTimeout(() => {
        i.wheeling = !1;
      }, 80), t.deltaY < 0 ? X() : $());
    }, p = (t) => {
      const s = t;
      e.visible && (!e.escDisabled && s.key === "Escape" && e.visible && M(), s.key === "ArrowLeft" && (e.rtl ? T() : B()), s.key === "ArrowRight" && (e.rtl ? B() : T()));
    }, h9 = () => {
      e.maskClosable && M();
    }, y9 = () => {
      m();
    }, z9 = () => {
      i.loading = !1;
    }, x9 = (t) => {
      i.loading = !1, i.loadError = !0, l("on-error", t);
    }, K = () => {
      e.visible && m();
    };
    j(() => e.index, (t) => {
      t < 0 || t >= u.value.length || v(t);
    }), j(() => i.dragging, (t, s) => {
      const b = !t && s;
      if (!H() && b) {
        const z = o.lastX - o.initX, S9 = o.lastY - o.initY, Q = e.swipeTolerance;
        Math.abs(z) > Math.abs(S9) && (z < Q * -1 ? T() : z > Q && B());
      }
    }), j(() => e.visible, (t) => {
      if (t) {
        x();
        const s = u.value.length;
        if (s === 0) {
          r.value = 0, i.loading = !1, t9(() => i.loadError = !0);
          return;
        }
        r.value = e.index >= s ? s - 1 : e.index < 0 ? 0 : e.index, e.scrollDisabled && D9();
      } else
        e.scrollDisabled && G();
    });
    const D9 = () => {
      document && (y.value = document.body.style.overflowY, document.body.style.overflowY = "hidden");
    }, G = () => {
      document && (document.body.style.overflowY = y.value);
    };
    _9(() => {
      n9(document, "keydown", p), n9(window, "resize", K);
    }), O9(() => {
      l9(document, "keydown", p), l9(window, "resize", K), e.scrollDisabled && G();
    });
    const M9 = () => a.loading ? a.loading({
      key: "loading"
    }) : n(U9, {
      key: "img-loading"
    }, null), I9 = () => a.onerror ? a.onerror({
      key: "onerror"
    }) : n(Z9, {
      key: "img-on-error"
    }, null), L9 = () => n("div", {
      class: `${f}-modal-dialog`
    }, [n("div", {
      class: `${f}-modal-content`
    }, [n("div", {
      class: `${f}-header`
    }, [$9(), E9()]), n("div", {
      class: `${f}-modal-body`
    }, [k9(), T9()])])]), k9 = () => a.sidebar ? n("div", {
      class: `${f}-sidebar`,
      style: E.value
    }, [a.sidebar()]) : !1, T9 = () => n("div", {
      class: `${f}-img-wrapper`,
      style: E.value,
      key: "img-wrapper"
    }, [n("img", {
      alt: A.value,
      ref: d,
      draggable: "false",
      class: `${f}-img`,
      src: D.value,
      onMousedown: r9,
      onMouseup: d9,
      onMousemove: u9,
      onTouchstart: f9,
      onTouchmove: g9,
      onTouchend: m9,
      onLoad: y9,
      onDblclick: v9,
      onDragstart: (t) => {
        t.preventDefault();
      }
    }, null)]), B9 = () => i.loading ? M9() : i.loadError ? I9() : L9(), C9 = () => n("img", {
      style: "display:none;",
      src: D.value,
      onError: x9,
      onLoad: z9
    }, null), Y9 = () => {
      if (a["prev-btn"])
        return a["prev-btn"]({
          prev: B
        });
      if (u.value.length <= 1) return;
      const t = !e.loop && r.value <= 0;
      return n("div", {
        role: "button",
        "aria-label": "previous image button",
        class: `btn__prev ${t ? "disable" : ""}`,
        onClick: B
      }, [e.rtl ? n(h, {
        type: "next"
      }, null) : n(h, {
        type: "prev"
      }, null)]);
    }, w9 = () => {
      if (a["next-btn"])
        return a["next-btn"]({
          next: T
        });
      if (u.value.length <= 1) return;
      const t = !e.loop && r.value >= u.value.length - 1;
      return n("div", {
        role: "button",
        "aria-label": "next image button",
        class: `btn__next ${t ? "disable" : ""}`,
        onClick: T
      }, [e.rtl ? n(h, {
        type: "prev"
      }, null) : n(h, {
        type: "next"
      }, null)]);
    }, E9 = () => a["close-btn"] ? a["close-btn"]({
      close: M
    }) : n("div", {
      role: "button",
      "aria-label": "close image preview button",
      class: `${f}-btn-close`,
      onClick: M
    }, [n(h, {
      type: "close"
    }, null)]), X9 = () => a.toolbar ? a.toolbar({
      toolbarMethods: {
        zoomIn: X,
        zoomOut: $,
        rotate: C,
        rotateLeft: C,
        rotateRight: R,
        resize: F
      },
      zoomIn: X,
      zoomOut: $,
      rotate: C,
      rotateLeft: C,
      rotateRight: R,
      resize: F
    }) : n(q9, {
      zoomIn: X,
      zoomOut: $,
      resize: F,
      rotateLeft: C,
      rotateRight: R,
      rotateDisabled: e.rotateDisabled,
      zoomDisabled: e.zoomDisabled
    }, null), $9 = () => {
      if (a.title)
        return a.title({
          currentImg: g.value
        });
      if (w.value)
        return n(p9, null, {
          default: () => [w.value]
        });
    }, J = () => {
      let t;
      if (e.visible)
        return n("div", {
          onTouchmove: j9,
          class: [`${f}-modal`, e.rtl ? "is-rtl" : ""],
          onClick: R9(h9, ["self"]),
          onWheel: b9
        }, [n(K9, null, null), n(N, {
          name: `${f}-fade`,
          mode: "out-in"
        }, P(t = B9()) ? t : {
          default: () => [t]
        }), C9(), n("div", {
          class: `${f}-btns-wrapper`
        }, [Y9(), w9(), X9()])]);
    };
    return () => {
      let t;
      if (e.teleport) {
        let s;
        return n(A9, {
          to: e.teleport
        }, {
          default: () => [n(N, {
            name: `${f}-fade`
          }, P(s = J()) ? s : {
            default: () => [s]
          })]
        });
      }
      return n(N, {
        name: `${f}-fade`
      }, P(t = J()) ? t : {
        default: () => [t]
      });
    };
  }
}), oe = (e = { imgs: "" }) => {
  const { imgs: l = "", initIndex: a = 0 } = e, d = k(l), c = k(a), m = k(!1), r = (i = c.value) => {
    typeof i == "number" ? y(i) : H9(i) && typeof i.value == "number" ? y(i.value) : i instanceof Event && y(c.value), m.value = !0;
  }, y = (i = c.value) => {
    c.value = i;
  };
  return {
    imgsRef: d,
    indexRef: c,
    visibleRef: m,
    show: r,
    onHide: () => {
      m.value = !1;
    },
    changeIndex: y
  };
}, ae = Object.assign(S, {
  install: (e) => {
    S.name && e.component(S.name, S);
  }
});
export {
  ae as default,
  oe as useEasyLightbox
};
