import { defineNuxtModule, addComponent } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'

interface ModuleOptions {}

export default defineNuxtModule({
  meta: {
    name: 'vue-easy-lightbox',
    configKey: 'easyLightbox'
  },
  setup(options: ModuleOptions, nuxt: Nuxt) {
    // Register the component globally
    addComponent({
      name: 'VueEasyLightbox', // tag name to use in templates
      export: 'default', // default export
      filePath: 'vue-easy-lightbox' // module name or path
    })
  }
})
