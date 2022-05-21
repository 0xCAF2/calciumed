import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import script from './global'

loadFonts()

const app = createApp(App)
app.config.globalProperties.$script = script

app.use(vuetify).mount('#app')
