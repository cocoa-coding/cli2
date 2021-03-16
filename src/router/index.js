import Vue from 'vue'
import Router from 'vue-router'
       //元件檔名       引用的位置
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', //主機網址的哪個目錄上
      name: 'HelloWorld',
      component: HelloWorld  //就是元件的檔名
    },
    {
      path: '/HelloWorld123', //子目錄可以自己取名
      name: 'HelloWorld',
      component: HelloWorld2
    }
  ]
})
