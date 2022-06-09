//import { defineNuxtPlugin } from 'nuxt3/nuxt';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCaretDown,
  faBars,
  faXmark,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
//import { far } from '@fortawesome/free-regular-svg-icons';

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

library.add(faCaretDown, faBars, faXmark, faPlus);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('Fa', FontAwesomeIcon);
});
