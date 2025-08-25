/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 分类页处理
 */
import consoleText from "../vendor/consoleText/consoleText";

export default function main() {

   /**
     * 设置文章banner动效
     */
    (() => {
        if ($.__config.animate.articleBanner.enable)
            import(/* webpackChunkName: "nhBannerAnimation" */ '../style/nhBannerAnimation.css');
    })();

    /**
     * 设置分类标题
     */
    (() => {
        // 从分类页面的HTML结构中提取分类标题
        let sbTitle = $('.entrylistTitle .category-crumb-item').text().trim() || '分类页面';
        
        if ($.__config.animate.articleTitle.enable) {
            consoleText([sbTitle], 'sbTitleText', 'sbTitleConsole', ['#fff'], false, $.__tools.setDomHomePosition);
        } else {
            $('#sbTitleText').text(sbTitle).css('color', '#fff');
        }
        $('.inner').css('max-width', '100vw');
        $.__tools.setDomHomePosition();
    })();

      /**
     * 设置主页文章信息样式
     */
      (() => {
        let read = $('#main .c_b_p_desc_readmore'), titleList = $('#main .postTitle');
        read.text('阅读全文 »');
        $.each(titleList, (i) => {
            let title = $(titleList[i]),
                titleText = title.text(),
                postDescText = title.nextAll('.postDesc:eq(0)').text();
            title.after(postMetaHtml(postDescText));
            if (/\[置顶\]/.test(titleText)) title.append('<span class="postSticky">置顶</span>');
            title.find('a').text(titleText.replace('[置顶]', ''));
        });

        titleList = $('#main .entrylistPosttitle');
        $.each(titleList, (i) => {
            let title = $(titleList[i]),
                postDescText = title.nextAll('.entrylistItemPostDesc:eq(0)').text();
            title.after(postMetaHtml(postDescText));
        });

        function postMetaHtml(postDescText) {
            const { date, vnum, cnum, tnum } = $.__tools.handlePostDesc(postDescText);
            return `<span class="postMeta">
                <i class="iconfont icon-schedule"></i>发表于 ${date}
                <i class="iconfont icon-browse"></i>阅读：${vnum}
                <i class="iconfont icon-interactive"></i>评论：${cnum}
                <i class="iconfont icon-hot"></i>推荐：${tnum}
            </span>`;
        }
    })();

     /**
     * 设置摘要文章
     */
     (() => {
        let desc = $('.c_b_p_desc');
        $.each(desc, (i) => {
            let obj = $(desc[i]), img = obj.find('img.desc_img');
            if (img.length > 0) {
                let src = img.attr('src');
                img.hide();
                obj.css('width', '60%');
                obj.parent('div').css('min-height', '150px');
                let html = '<div class="c_b_p_desc_img"><div style="background: url(\''+ src +'\') center center / contain no-repeat;"></div></div>';
                obj.after(html);
            }
        });
    })();
}