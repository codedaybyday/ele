/**
 * Created by liubeijing on 2017/4/8.
 */
import takeout from '../src/component/takeout.vue';
import food from '../src/component/food.vue';
export default [
    {
        path:'/',
        component:takeout
    },
    {
        path:'/takeout',
        component:takeout
    },
    {
    	path:'/food',
    	component:food
    }
];