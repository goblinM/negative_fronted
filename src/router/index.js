import Vue from 'vue'
import VueRouter from "vue-router";
import login from '@/components/login'
import HomePage from '@/components/common/HomePage'
import hotDaily from '@/components/common/hotDaily'
import newsWatch from '@/components/common/newsWatch'
import spiderManage from '@/components/common/spiderManage'
import userManage from '@/components/common/userManage'
import dataReport from '@/components/common/dataReport'
import dataAnalysis from '@/components/common/dataAnalysis'
Vue.use(VueRouter);

const routes= [
     {
      path: '*', redirect: '/login'
    },
    {
      path:'/login',
      name:"login",
      component:login
    },
    {
      path:"/HomePage",
      name:"HomePage",
      component:HomePage,
      redirect:'/HomePage/hotDaily',
      children:[
        {
          path:'',
          redirect:'hotDaily'
        },
        {
          path:"/HomePage/hotDaily",
          name:'hotDaily',
          component:hotDaily
        },
        {
          path:"/HomePage/newsWatch",
          name:'newsWatch',
          component:newsWatch
        },
        {
          path:"/HomePage/spiderManage",
          name:'spiderManage',
          component:spiderManage
        },
        {
          path:"/HomePage/userManage",
          name:'userManage',
          component:userManage
        },
        {
          path:"/HomePage/dataAnalysis",
          name:'dataAnalysis',
          component:dataAnalysis
        }
      ]
    },
    {
       path:"/dataReport/:data_name",
      name:'dataReport',
      component:dataReport
    }
  ]

const router = new VueRouter({
  routes
});

export default router;
