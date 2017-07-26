<template>
    <div ref="root" class="animate-custom-element" v-bind:class="typeClass">
        <slot>
        </slot>
    </div>
</template>

<script type="text/javascript" src="./AnimateCustom.js"></script>

<style lang="scss">
    @import "./AnimateCustom.scss";
</style>
