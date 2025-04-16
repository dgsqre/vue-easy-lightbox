<template>
  <div>
    <button
      @click="showSingle"
      class="dgsq-p-1 border"
    >
      Show single picture.
    </button>
    <button
      @click="showMultiple"
      class=""
    >
      Show a group of pictures.
    </button>
    <br />
    <button
      @click="test"
      class=""
    >
      test1
    </button>
    <button
      @click="test2"
      class=""
    >
      test2
    </button>
    <button
      @click="show"
      class=""
    >
      test show
    </button>

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      :pinchDisabled="pinchRef"
      :dblclickDisabled="true"
      @hide="onHide"
      @on-index-change="onIndexChange"
      @on-rotate="onRotate"
    >
      <template #title="titleSlotProps">
        <h2>Title {{ titleSlotProps.currentImg?.title }}</h2>
      </template>
      <template #sidebar>
        <h3>Sidebar content is here</h3>
      </template>
    </vue-easy-lightbox>
  </div>
</template>

<script lang="ts">
import { defineComponent, isReactive, ref } from 'vue'
import { useEasyLightbox } from '../composables'
import VueEasyLightbox from '../index'

export default defineComponent({
  components: {
    VueEasyLightbox
  },
  setup() {
    const imgList = ref([
      { src: 'https://placehold.co/350x150', title: 'img1' },
      'https://placehold.co/250x150'
    ])

    const { visibleRef, indexRef, imgsRef, show, changeIndex, onHide } =
      useEasyLightbox({
        imgs: imgList.value,
        initIndex: 0
      })

    const test = () => {
      console.log(isReactive(imgList.value))
      console.log(imgList.value)
      show()
    }
    const test2 = () => {
      imgList.value.push('https://placehold.co/250x150')
      show()
    }

    const showSingle = () => {
      imgsRef.value = 'http://it-does-not-matter.png/'
      show()
    }
    const showMultiple = () => {
      imgsRef.value = [
        'https://placehold.co/2000x2000',
        'https://placehold.co/350x150'
      ]
      changeIndex()
      show()
    }

    const onIndexChange = (old: number, newN: number) => {
      console.log(old, newN)
    }

    const onRotate = (deg: number) => {
      console.log(deg)
    }
    const pinchRef = ref(true)

    return {
      visibleRef,
      indexRef,
      imgsRef,
      showSingle,
      showMultiple,
      onHide,
      test,
      test2,
      onIndexChange,
      show,
      onRotate,
      pinchRef
    }
  }
})
</script>
