/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2024-12-27
 * ----------------------------------------------
 * @describe: 随笔档案页处理
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
     * 设置档案页标题
     */
    (() => {
        // 从档案页面的HTML结构中提取档案标题
        let sbTitle = $('.entrylistTitle').text().trim() || '随笔档案';
        
        // 提取年月信息
        const urlParts = window.location.pathname.split('/');
        if (urlParts.length >= 7) {
            const year = urlParts[6];
            const month = urlParts[7];
            if (year && month) {
                sbTitle = `${year}年${month}月 随笔档案`;
            } else if (year) {
                sbTitle = `${year}年 随笔档案`;
            }
        }
        
        if ($.__config.animate.articleTitle.enable) {
            consoleText([sbTitle], 'sbTitleText', 'sbTitleConsole', ['#fff'], false, $.__tools.setDomHomePosition);
        } else {
            $('.sb-title').text(sbTitle);
        }
    })();

    /**
     * 设置文章信息
     */
    (() => {
        $('.postTitle, .postTitle2, .postTitl2').each(function () {
            let postDesc = $(this).next('.postDesc, .postCon, .c_b_p_desc').text();
            let postData = $.__tools.handlePostDesc(postDesc);
            
            if (postData) {
                let { date, vnum, cnum, tnum } = postData;
                
                let metaHtml = `
                    <div class="postMeta">
                        <i class="iconfont icon-schedule"></i>发表于 ${date}
                        <i class="iconfont icon-browse"></i>阅读：${vnum}
                        <i class="iconfont icon-interactive"></i>评论：${cnum}
                        <i class="iconfont icon-hot"></i>推荐：${tnum}
                    </div>
                `;
                
                $(this).next('.postDesc, .postCon, .c_b_p_desc').html(metaHtml);
            }
        });
    })();

    /**
     * 设置页面动效
     */
    (() => {
        $.__tools.setDomHomePosition();
    })();
}