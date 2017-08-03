import Vue      from 'vue'
import Router   from 'vue-router'
import Archive  from '../components/front/Archive.vue' //总览组件
import Article  from '../components/front/Article.vue'  //?
import Console  from '../components/back/Console.vue' //控制台
import Login    from '../components/back/Login.vue' //登录
import Articles from '../components/back/Articles.vue' //文章列表
import Editor   from '../components/back/Editor.vue' //编辑保存
import Links    from '../components/back/Links.vue' //链接-添加删除链接
import Account  from '../components/back/Account.vue' //账户-修改密码
import Book     from '../components/back/Book.vue' //书单

Vue.use(Router) //前端路由:

export default new Router({
  mode: 'history',
  routes: [
    {path: '/archive', name: 'archive', component: Archive},
    {path: '/article', name: 'article', component: Article},
    {path: '/', component: Login},//登录界面
    {
      path: '/console',//子路由到控制台
      component: Console,
      children: [
        {path: '', component: Articles},
        {path: 'articles', name: 'articles', component: Articles},
        {path: 'editor', name: 'editor', component: Editor},
        {path: 'links', name: 'links', component: Links},
        {path: 'account', name: 'account', component: Account},
        {path: 'book', name:'book', component: Book}
      ]
    }
  ]
})
