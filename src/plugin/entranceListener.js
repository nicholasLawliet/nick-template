import Vue from 'vue';

export default class App extends Vue {
    flagTopReachBottom = false;
    flagBottomReachTop = false;

    offsetTopEnterBottom = 0;
    offsetTopLeaveBottom = 0;
    offsetBottomReachTop = 0;

    ratio = 0.85;

    onTopEnterBottom = function () {};
    onTopLeaveBottom = function () {};
    onBottomEnterTop = function () {};
    onBottomLeaveTop = function () {};
    onEnterArea = function () {};
    onLeaveArea = function () {};

    constructor(options) {
        super();
        for (const key in options) {
            this[key] = options[key];
        }

        window.addEventListener('scroll', this.entranceHandler.bind(this));
        window.addEventListener('resize', this.entranceHandler.bind(this));

        this.entranceHandler();
    }

    entranceHandler() {
        const innerHeight = window.innerHeight;
        // const rect = this.el.getBoundingClientRect();
        const vueVaule = {
            top: 0,
            bottom: 0
        }
        this.adjustEdge(innerHeight, vueVaule);
    }

    adjustEdge(innerHeight, vueVaule) {
        // const flagTopHigherThanBottom = (vueVaule.top + this.offsetTopEnterBottom) <= innerHeight * 0.85;
        // const flagTopLowerThanBottom = (vueVaule.top + this.offsetTopLeaveBottom) > innerHeight;
        const flagTopHigherThanBottom = (vueVaule.top + getTop(this.el)) <= innerHeight * this.ratio;
        const flagTopLowerThanBottom = (vueVaule.top + getTop(this.el)) > innerHeight;

        //暂时没用到
        const flagBottomHigherThanTop = (vueVaule.bottom + this.offsetBottomReachTop) < 0;
        const flagBottomLowerThanTop = (vueVaule.bottom + this.offsetBottomReachTop) >= 0;

        // top enter bottom
        if (flagTopHigherThanBottom && !this.flagTopReachBottom) {
            this.flagTopReachBottom = true;
            this.onTopEnterBottom.call(this.el);
            this.onEnterArea.call(this.el);
        }

        // top leave bottom
        if (flagTopLowerThanBottom && this.flagTopReachBottom) {
            this.flagTopReachBottom = false;
            this.onTopLeaveBottom.call(this.el);
            this.onLeaveArea.call(this.el);
        }

        // bottom leave top
        if (flagBottomHigherThanTop && !this.flagBottomReachTop) {
            this.flagBottomReachTop = true;
            this.onBottomLeaveTop.call(this.el);
            this.onLeaveArea.call(this.el);
        }

        // bottom enter top
        if (flagBottomLowerThanTop && this.flagBottomReachTop) {
            this.flagBottomReachTop = false;
            this.onBottomEnterTop.call(this.el);
            this.onEnterArea.call(this.el);
        }

        function getTop(e) {
            // var offset = e.offsetTop;
            var offsetTopValue = e.offsetTop;
            var parent = e.offsetParent;
            while (parent != null) {
                offsetTopValue += parent.offsetTop;
                parent = parent.offsetParent;
            };
            var scrollTopValue = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            return offsetTopValue - scrollTopValue;
        }
    }
}
