import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import {
  uniUsersAlt,
  uniEstate,
  uniSchedule,
  uniSearch,
  uniPlus,
} from 'vue-unicons/dist/icons'

Unicon.add([uniUsersAlt, uniEstate, uniSchedule, uniSearch, uniPlus])
Vue.use(Unicon)
