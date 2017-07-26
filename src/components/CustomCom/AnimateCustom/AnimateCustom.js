import Vue from 'vue';

export default {
    name: 'animate-custom',
    props: ['aniType', 'ratio'],
    data: function () {
        return {
            typeClass: ''
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.initData();
        })
    },
    methods: {
        initData: function () {

            this.typeClass = this.aniType ? this.aniType : 'fade-bottom';
            const ratio = this.ratio ? this.ratio : 0.85;
            
            System.import('./runtime.js').then((runtime) => {
                //this.$refs.root指当前元素
                const el = this.$refs.root;
                runtime.default.init(el, ratio);
            });

        }
    }
}
