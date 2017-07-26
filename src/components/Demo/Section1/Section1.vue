<template>
    <div id="section1">
        <AnimateCustom>
            <!--<h2>运动方式：从下向上淡入，动画开始点：0.85</h2>-->
            <h3>Animate Type: Bottom->Top and Opacity(0->1)</h3>
            <h3>Animate Start Ratio: 0.85</h3>
            <p>{{desc1}}</p>
            <!--<p>{{desc2}}</p>-->
        </AnimateCustom>
        <AnimateCustom aniType="fade" ratio="0.85">
            <h3>Animate Type: Opacity(0->1)</h3>
            <h3>Animate Start Ratio: 0.85</h3>
            <p>{{desc2}}</p>
        </AnimateCustom>
        <AnimateCustom aniType="fade-bottom" ratio="0.85">
            <h3>Animate Type: Bottom->Top and Opacity(0->1)</h3>
            <h3>Animate Start Ratio: 0.85</h3>
            <p>{{desc3}}</p>
        </AnimateCustom>
        <AnimateCustom aniType="fade" ratio="0.85" class="center-img">
            <img v-bind:src="imageSrc" />
        </AnimateCustom>
        <AnimateCustom aniType="fade-left" ratio="0.85">
            <h3>Animate Type: Left->Right and Opacity(0->1)</h3>
            <h3>Animate Start Ratio: 0.85</h3>
            <p>{{desc4}}</p>
        </AnimateCustom>
        <AnimateCustom aniType="fade-right" ratio="0.55">
            <h3>Animate Type: Right->Left and Opacity(0->1)</h3>
            <h3>Animate Start Ratio: 0.55</h3>
            <p>{{desc5}}</p>
        </AnimateCustom>
        <AnimateCustom aniType="fade" ratio="0.85" class="center-img">
            <img v-bind:src="imageSrc1" />
        </AnimateCustom>
        <AnimateCustom aniType="custom" ratio="0.85">
            <h3>Animate Type: User Defined Animation, Scale(0.3->1) and Opacity(0->1)</h3>
            <h3>Animate Start Ratio: 0.85</h3>
            <p>{{desc6}}</p>
        </AnimateCustom>
        <AnimateCustom aniType="fade" ratio="0.85" class="center-img">
            <img src="./../../../assets/se2.jpg" />
        </AnimateCustom>
    </div>
</template>

<script type="text/javascript" src="./Section1.js"></script>

<style lang="scss">
    @import "./Section1.scss";
</style>
