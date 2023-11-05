import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGears, faUsersLine, faBox, faBrain, faPlay } from '@fortawesome/free-solid-svg-icons'

library.add(faGears)
library.add(faUsersLine)
library.add(faBox)
library.add(faBrain)
library.add(faPlay)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
