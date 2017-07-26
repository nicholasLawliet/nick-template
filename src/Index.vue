<template>
    <div id="app">
        <logo></logo>
        <hello></hello>
        <section1></section1>
    </div>
</template>

<script>
    import platform from './plugin/platform.js';
    import Logo from './components/Demo/Logo/Logo.vue';
    import Hello from './components/Demo/Hello/Hello.vue';
    import Section1 from './components/Demo/Section1/Section1.vue';
    
    export default {
        name: 'app',
        components: {
            Logo,
            Hello,
            Section1
        },
        mounted: function(){
            this.$nextTick(function(){
                //这样可以动态获取文件
                // System.import('./plugin/platform.js').then((platform) => {
                //     console.log(platform);
                // });
                console.log(platform);
            })
        }
    }
</script>

<style lang="scss">
    html,body{
        margin: 0;
        padding: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding: 60px 0px;
        width: 100%;
        max-width: 1605px;
        background-color: #f1f1f1;
        margin: 0 auto;
        overflow: hidden;
    }
</style>
