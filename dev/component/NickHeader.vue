<template lang="html">
    <header>
        <div class="nick-header">
            <a href="http://www.nick.com/" class="nick-link">
                <img class="nick-logo" src="/common/layout/img/nick-logo.jpg">
            </a>
            <img class="nick-adbug" src="/common/layout/img/nick-adbug.jpg">
        </div>
    </header>
</template>

<script>
export default {
};
</script>

<style lang="scss">
body {
    margin: 0;
}

header .nick-header {
    background-color: #000;
    height: 30px;
    left: 0;
    position: relative;
    top: 0;
    width: 100%;
    z-index: 100;
}

header .nick-header a.nick-link {
    float: left;
    margin: 0;
}

header .nick-header .nick-logo {
    height: 26px;
    width: 102px;
}

header .nick-header .nick-adbug {
    float: right;
    height: 26px;
    width: 108px;
}
</style>
