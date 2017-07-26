import Vue from 'vue';
import axios from 'axios';
import $ from 'jquery';
import AnimateCustom from './../../CustomCom/AnimateCustom/AnimateCustom.vue';

export default {
    name: 'section1',
    components:{
        AnimateCustom
    },
    data: function () {
        return {
            desc1: '',
            desc2: '',
            desc3: '',
            desc4: '',
            desc5: '',
            desc6: '',
            imageSrc: require('./../../../assets/se.jpg'),
            imageSrc1: require('./../../../assets/se1.jpg'),
            isActive: false,
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.initData();
        })
    },
    methods: {
        initData: function () {
            //这里可以用jquery
            // console.log($('#section1').html());
            var _this = this;
            axios.get('./static/data.json').then(function (response) {
                var data = response.data;
                var dataSection = data.section1;
                _this.desc1 = dataSection.desc1;
                _this.desc2 = dataSection.desc2;
                _this.desc3 = dataSection.desc3;
                _this.desc4 = dataSection.desc4;
                _this.desc5 = dataSection.desc5;
                _this.desc6 = dataSection.desc6;
                //这里使用了模板
                _this.imageSrc1 = require(`./../../../${dataSection.imageSrc1}`);
            });
        }
    }
}
