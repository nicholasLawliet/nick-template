import Vue from 'vue';
import axios from 'axios';

export default {
    name: 'hello',
    // data() {
    //     return {
    //         msg: 'Welcome to Your Vue.js App'
    //     }
    // },
    data: function(){
        return {
            msg: 'Welcome to Your Vue.js App',
            title: 'test'
        }
    },
    mounted: function(){
        this.$nextTick(function(){
            this.initData();
        })
    },
    methods: {
        initData: function(){
            this.title = 'www.vuejs.org';
        }
    }
}