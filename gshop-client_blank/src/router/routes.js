
import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Search from '../pages/Search/Search.vue'
import Cart from '../pages/Cart/Cart.vue'
import Person from '../pages/Person/Person.vue'
import SearchShop from '../pages/SearchShop/SearchShop.vue'
import LoginEmail from '../pages/Person/Login/LoginEmail.vue'
import LoginPhone from '../pages/Person/Login/LoginPhone.vue'
export default[
  {
    path:'/home',
    component:Home,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/category',
    component:Category,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/cart',
    component:Cart,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/person',
    component:Person
  },
  {
    path:'/searchShop',
    component:SearchShop
  },
  {
    path:'/loginEmail',
    component:LoginEmail
  },
  {
    path:'/loginPhone',
    component:LoginPhone
  },
  {
    path:'/',
    redirect:'/home'
  },

]
