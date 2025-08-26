/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:22
 * ----------------------------------------------
 * @describe: 图片灯箱处理
 */
await $.__tools.dynamicLoadingCss($.__config.default.fancyboxcss);
await $.__tools.dynamicLoadingJs($.__config.default.fancybox).catch((e) => console.error('fancybox.js', e));
export default function main() {
    setTimeout(() => {
        let imgLength = $('#cnblogs_post_body img').length - 1;
        if (!imgLength) return;

        let cpb = $('#cnblogs_post_body'),
            imgList = $(`#cnblogs_post_body img:lt(${imgLength})`),
            comImgList = $('.feedbackCon img'),
            data = [];

        $.each(imgList, (i) => data.push(imgList[i]));

        $.each(comImgList, (i) => data.push(comImgList[i]));

        if (cpb.length && data.length) {
            $.each(data, (i) => {
                let tem = $(data[i]);
                if (!tem.hasClass('code_img_closed') && !tem.hasClass('code_img_opened')) {
                    let width = tem.attr('width');
                    let height = tem.attr('height');
                    let alt = tem.attr('alt') ?? '';
                    let style = tem.attr('style') ?? '';
                    tem.after(
                        `<a data-fancybox="gallery" href="${tem.attr('src')}">
                        <img ${width ? ' width="' + width + '" ' : ''}
                        ${height ? ' height="' + height + '" ' : ''}
                        src="${tem.attr('src')}" alt="${alt}" style="${style}"/></a>`
                    );
                    tem.remove();
                }
            });
            
            // 初始化 Fancybox
            setTimeout(() => {
                if (window.Fancybox) {
                    window.Fancybox.bind('[data-fancybox="gallery"]', {
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
                                right: ["slideshow", "thumbs", "close"],
                            },
                        },
                    });
                }
            }, 100);
        }
    }, 800);
}
