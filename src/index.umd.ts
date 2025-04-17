import './styles/index.scss'

import type { App } from 'vue'
import _VueEasyLightbox from './vue-easy-lightbox'
import { useEasyLightbox } from './composables'

const VueEasyLightbox = Object.assign(_VueEasyLightbox, {
  install: (app: App) => {
    if (_VueEasyLightbox.name) {
      app.component(_VueEasyLightbox.name, _VueEasyLightbox)
    }
  },
  useEasyLightbox
})

export default VueEasyLightbox
