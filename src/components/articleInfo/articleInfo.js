/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:18
 * ----------------------------------------------
 * @describe: 文章信息处理
 */
import postMeta from "../../components/postMeta/postMeta"
import consoleText from "../../vendor/consoleText/consoleText"

export default function main() {

    /**
     * 设置文章标题
     */
    (() => {
        const sbTitle = $('#cb_post_title_url').text();
        if ( $.__config.animate.articleTitle.enable) {
            consoleText([sbTitle], 'sbTitleText', 'sbTitleConsole', ['#fff'], false, $.__tools.setDomHomePosition);
        } else {
            $('#sbTitleText').text(sbTitle).css('color', '#fff');
        }
        $('.inner').css('max-width', '100vw');
        $.__tools.setDomHomePosition();
    })();

    /**
     * 设置文章信息
     */
    (() => {
        $('#articleInfo').append('<p class="article-info-text"></p>');
        $.__timeIds.postDescTid = window.setInterval( () => {
            if ($('#post_view_count').text() !== '...' && $('#post_comment_count').text() !== '...') {
                let postDescText = $('.postDesc').show().text();
                $('#articleInfo p.article-info-text').html(postMetaHtml(postDescText));
                $.__tools.setDomHomePosition();
                $.__tools.clearIntervalTimeId( $.__timeIds.postDescTid);
            }
        }, 1000 );

        function postMetaHtml(postDescText) {
            let info = postMeta(postDescText);
            let textNum = $('#cnblogs_post_body').text().length;

            return '<span class="postMeta"><i class="iconfont icon-schedule"></i>' + info.date.replace(/-/g,"/") + '' +
                '<i class="iconfont icon-browse"></i>' + info.vnum + '' +
                '<i class="iconfont icon-interactive"></i>' + info.cnum + '' +
                '<i class="iconfont icon-hot"></i>' + info.tnum + '' +
                '<br><i class="iconfont icon-article"></i>' + textNum + '' +
                '<i class="iconfont icon-kafei"></i>' + $.__tools.minToTime(textNum / 500) + ' ~ ' + $.__tools.minToTime(textNum / 300) +
                '</span>';
        }
    })();

    /**
     * 设置文章信息-分类
     */
    (() => {
        $.__timeIds.articleInfoClassTId = window.setInterval(() => {
            let obj = $('#BlogPostCategory').find('a');
            if (obj.length > 0) {
                $.__tools.articleInfo(obj, 1)
                $.__tools.setDomHomePosition();
                $.__tools.clearIntervalTimeId( $.__timeIds.articleInfoClassTId);
            }
        }, 1000);
    })();

    /**
     * 设置文章信息-标签
     */
    (() => {
        $.__timeIds.articleInfoTagTId = window.setInterval(() => {
            let obj = $('#EntryTag').find('a');
            if (obj.length > 0) {
                $.__tools.articleInfo(obj, 2)
                $.__tools.setDomHomePosition();
                $.__tools.clearIntervalTimeId( $.__timeIds.articleInfoTagTId);
            }
        }, 1000);
    })();

    /**
     * 设置文章信息-链接icon
     */
    (() => {
        if ( $.__config.articleContent.link) {
            $('#cnblogs_post_body a').addClass('iconfont icon-fenxiang')
            $('.footnote-ref a').removeClass('iconfont icon-fenxiang')
            $('.footnotes-list a').removeClass('iconfont icon-fenxiang')
        }
    })();

    /**
     * 设置文章标题-iconfont
     */
    (() => {
        let titleInfo = $('#cnblogs_post_body').find(':header');
        if ( $.__config.articleContent.iconfont && titleInfo.length > 0) {
            let iconfonts = $.__config.articleContent.iconfontArr
            titleInfo.html((i, c) => {
                let arr = []
                let num=Math.floor((Math.random()*(iconfonts.length-i))+i);
                if(arr.indexOf(num)==-1){
                    arr.push(num)
                    $('<svg class="icon"> <use xlink:href="#icon-'+ iconfonts[num] +'"></use></svg>').prependTo(titleInfo[i])
                }else{
                    i--;
                }
            })
        }
    })();

    /**
     * 设置文章引用 | 扩展markdown语法
     */
    (() => {
        $(".blogpost-body p").html((i,c) => {
            if (/^\?&gt;/.test(c)) return '<p class="tip">' + c.slice(5).trim() + "</p>";
            if (/^!&gt;/.test(c)) return '<p class="warn">' + c.slice(5).trim() + "</p>";
        })
    })();

    /**
     * 设置文章手绘效果
     */
    (() => {
        $(".blogpost-body p").html((i,c) => {
            if (/~~b/.test(c)) return c.replace(/~~b/g, '<mbox>');
            if (/b~~/.test(c)) return c.replace(/b~~/g, '</mbox>')
            if (/~~c/.test(c)) return c.replace(/~~c/g, '<mc>');
            if (/c~~/.test(c)) return c.replace(/c~~/g, '</mc>');
            if (/~~u/.test(c)) return c.replace(/~~u/g, '<mu>');
            if (/u~~/.test(c)) return c.replace(/u~~/g, '</mu>');
            if (/~~h/.test(c)) return c.replace(/~~h/g, '<mhl>');
            if (/h~~/.test(c)) return c.replace(/h~~/g, '</mhl>');
            if (/~~bk/.test(c)) return c.replace(/~~bk/g, '<mbk>');
            if (/bk~~/.test(c)) return c.replace(/bk~~/g, '</mbk>');
            if (/~~s/.test(c)) return c.replace(/~~s/g, '<mst>');
            if (/s~~/.test(c)) return c.replace(/s~~/g, '</mst>');
            if (/~~x/.test(c)) return c.replace(/~~x/g, '<mco>');
            if (/x~~/.test(c)) return c.replace(/x~~/g, '</mco>');
        })
    })();

}
