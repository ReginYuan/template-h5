import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// 全局样式配置
import '@/assets/styles/style.css'
//初始化覆盖全局样式
import '@/assets/styles/reset.css'

/**
 * Vant 中有个别组件是以函数的形式提供的，
 * 包括 Toast，Dialog，Notify 和 ImagePreview 组件。
 * 在使用函数组件时，unplugin-vue-components 无法自动引入对应的样式，
 * 因此需要手动引入样式。
*/

// Toast
import { showToast } from 'vant';
import 'vant/es/toast/style';

// Dialog
import { showDialog } from 'vant';
import 'vant/es/dialog/style';

// Notify
import { showNotify } from 'vant';
import 'vant/es/notify/style';

// ImagePreview
import { showImagePreview } from 'vant';
import 'vant/es/image-preview/style';

// 使用lib-flexible 动态设置REM基准值（html标签的字体大小）
import 'amfe-flexible'


// 创建app实例
const app = createApp(App)

// 在实例上挂载路由
app.use(router)

// 单独挂载vant-ui组件到原型
app.config.globalProperties.$showToast = showToast
app.config.globalProperties.$showDialog = showDialog
app.config.globalProperties.$showNotify = showNotify
app.config.globalProperties.$showImagePreview = showImagePreview

// 将实例挂载到对应html节点上
app.mount('#app')
