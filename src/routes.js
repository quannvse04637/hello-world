import Home from './components/HelloWorld.vue';
import Generic from './components/Generic.vue';
import Elements from './components/Elements.vue';

export const routes = [
    {path: '', component: Home},
    {path: '/generic', component: Generic},
    {path: '/elements', component: Elements},
    {path: '*', redirect: '/'}
];