<template lang="html">
    <div class="app-container">
        <nick-header></nick-header>
        <nick-footer></nick-footer>
    </div>
</template>

<script>
import NickHeader from './NickHeader.vue';
import NickFooter from './NickFooter.vue';

export default {
    components: {
        NickHeader,
        NickFooter,
    },
};
</script>

<style lang="scss">
@import "../style/reset";
@import "../style/mixin";

// @include font-face("Lato-Regular");

:root{
    --color1: red;
}

@media (max-width: 1000px) {
    :root{
        --color1: green;
    }
}




</style>
