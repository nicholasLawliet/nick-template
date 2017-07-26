import ArrivalListener from './../../../plugin/entranceListener';

export default {
    init(ele, ratio) {
        const el = ele;
        
        new ArrivalListener({
            el: el,
            ratio: ratio,
            onTopEnterBottom: () => {
                el.setAttribute('data-active', '');
            },
            onTopLeaveBottom: () => {
                el.removeAttribute('data-active');
            },
        });
    },
};
