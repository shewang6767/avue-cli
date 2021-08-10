import { createApp } from 'vue'
import website from './config/website'
import axios from './axios';
import router from './router/';
import store from './store';
import i18n from './lang/';
import 'styles/common.scss';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { validatenull } from './utils/validate'
import './permission';
import error from './error';
import basicBlock from 'components/basic-block/main.vue'
import basicContainer from 'components/basic-container/main.vue'
import App from './App.vue'
const app = createApp(App)
//注册全局容器
app.component('basicContainer', basicContainer)
app.component('basicBlock', basicBlock)
app.config.globalProperties.$axios = axios
app.config.globalProperties.website = website
app.config.globalProperties.validatenull = validatenull;
app.use(error);
app.use(i18n)
app.use(store)
app.use(router)
app.use(ElementPlus, {
  i18n: i18n.global.t,
})
app.mount('#app')
