/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2024-12-27
 * ----------------------------------------------
 * @describe: 相册页处理
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
     * 设置相册页标题
     */
    (() => {
        // 从相册页面的HTML结构中提取相册标题
        let sbTitle = $('.entrylistTitle').text().trim() || 
                     $('title').text().replace(' - 博客园', '').trim() || 
                     '相册';
        
        if ($.__config.animate.articleTitle.enable) {
            consoleText([sbTitle], 'sbTitleText', 'sbTitleConsole', ['#fff'], false, $.__tools.setDomHomePosition);
        } else {
            $('.sb-title').text(sbTitle);
        }
    })();

    /**
     * 设置图片展示效果
     */
    (() => {
        // 为相册图片添加点击放大效果
        $('.gallery_image img, .entrylistPosttitle img').each(function() {
            let $img = $(this);
            let src = $img.attr('src');
            
            if (src) {
                // 包装图片为可点击的链接
                if (!$img.parent('a[data-fancybox]').length) {
                    $img.wrap(`<a data-fancybox="gallery" href="${src}"></a>`);
                }
                
                // 添加图片加载效果
                $img.on('load', function() {
                    $(this).addClass('loaded');
                }).on('error', function() {
                    $(this).addClass('error');
                });
            }
        });
        
        // 动态加载Fancybox库用于图片预览
        if ($('[data-fancybox]').length > 0) {
            $.__tools.dynamicLoadingCss($.__config.libraryLinks.fancyboxcss);
            $.__tools.dynamicLoadingJs($.__config.libraryLinks.fancybox).then(() => {
                // 初始化新版本 Fancybox
                if (window.Fancybox) {
                    window.Fancybox.bind('[data-fancybox]', {
                        // 配置选项
                        Carousel: {
                            Toolbar: {
                              display: {
                                left: ["counter"],
                                middle: [
                                  "zoomIn",
                                  "zoomOut",
                                  "toggle1to1",
                                  "rotateCCW",
                                  "rotateCW",
                                  "flipX",
                                  "flipY",
                                ],
                                right: ["autoplay", "thumbs", "close"],
                              },
                            },
                          },
                    });
                }
            });
        }
    })();

    /**
     * 设置页面动效
     */
    (() => {
        $.__tools.setDomHomePosition();
    })();
}