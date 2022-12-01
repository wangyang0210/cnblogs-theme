/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:21
 * ----------------------------------------------
 * @describe: 事件监听
 */

export default {
    init(){
        // 滚动监听
        $.__event.scroll = {};
        $.__event.scroll.handle = [];
        $.__event.scroll.temScroll = 0; // 上一次页面滚动位置
        $.__event.scroll.docScroll = $(document).scrollTop(); // 当前滚动位置
        $.__event.scroll.homeScroll = $('#home').offset().top - 40; // 主体滚动
        $(window).scroll(() => {
            $.__event.scroll.docScroll = $(document).scrollTop();
            $.__event.scroll.homeScroll = $('#home').offset().top - 40;
            this.handle.scroll();
            $.__event.scroll.temScroll = $.__event.scroll.docScroll;
        });
        // 窗口大小监听
        $.__event.resize = {};
        $.__event.resize.handle = [];
        $(window).resize(() => {
            this.handle.resize()
        });
    },
    handle: {
        scroll: () => {
            for (let i = 0; i < $.__event.scroll.handle.length; i++) {
                ($.__event.scroll.handle[i])()
            }
        },
        resize: () => {
            for (let i = 0; i < $.__event.resize.handle.length; i++) {
                ($.__event.resize.handle[i])()
            }
            $.__tools.setDomHomePosition();
        },
    }
}
