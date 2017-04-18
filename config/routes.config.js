/**
 * Created by liubeijing on 2017/4/8.
 */
import index from '../src/component/index.vue';
import food from '../src/component/food.vue';
import shop from '../src/component/shop.vue';
import search from '../src/component/search.vue';
export default [
    {
        path:'/',
        component:index
    },
    {
        path:'/index',
        component:index
    },
    {
    	path:'/food',
    	component:food
    },
    {
        path:'/shop',
        component:shop
    },{
        path:'/search',
        component:search
    }
];