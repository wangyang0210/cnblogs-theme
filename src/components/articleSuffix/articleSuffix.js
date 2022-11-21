/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:18
 * ----------------------------------------------
 * @describe: 文章后缀处理
 */
import "../../style/articleSuffix.css";
import suffixTemp from '../../template/articleSuffix.html';

export default function main(_) {

    // 图片
    let imgUrl  = _.__tools.ternaryOperation(_.__config.articleSuffix.imgUrl, _.__config.info.avatar, 'https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_221114123823_default_avatar.webp' )

    // 本文作者 & 本文链接
    let articleAuthor = $('#articleAuthor');
    let articleSource = $('#articleSource');
    let author  = articleAuthor.length ? articleAuthor.val() : _.__config.info.name,
        source  = articleSource.length ? articleSource.val() : _.__status.url,
        homeUrl = articleSource.length ? articleSource.val() : _.__status.homeUrl,
        origin  = articleAuthor.length || articleSource.length ? '原' : '本';

    // 关于博主
    let aboutHtml = _.__config.articleSuffix.aboutHtml ? _.__config.articleSuffix.aboutHtml :
        '评论和私信会在第一时间回复。或者<a href="https://msg.cnblogs.com/msg/send/' + _.__status.user + '" target="_blank">直接私信</a>我。';

    // 版权声明
    let copyrightHtml = _.__config.articleSuffix.copyrightHtml ? _.__config.articleSuffix.copyrightHtml :
        '本博客所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" alt="BY-NC-SA" title="BY-NC-SA" target="_blank">BY-NC-SA</a> 许可协议。转载请注明出处！';

    // 声援博主
    let supportHtml = _.__config.articleSuffix.supportHtml ? _.__config.articleSuffix.supportHtml :
        '如果您觉得文章对您有帮助，可以点击文章右下角<strong><span style="color: #ff0000; font-size: 12pt;">【<a id="post-up" onclick="votePost(' + _.__status.articleId + ',\'Digg\')" href="javascript:void(0);">推荐</a>】</span></strong>一下。';

    let re = [
        ['origin', origin],
        ['imgUrl', imgUrl],
        ['homeUrl', homeUrl],
        ['author', author],
        ['source', source],
        ['aboutHtml', aboutHtml],
        ['copyrightHtml', copyrightHtml],
        ['supportHtml', supportHtml],
    ];
    let suffixHtml = _.__tools.batchTempReplacement(suffixTemp, re);

    $("#cnblogs_post_body").append(suffixHtml);

    // 版权声明 - COPY
    (() => {
        if (_.__config.articleSuffix.copyText.enable) {
            let textLength = _.__config.articleSuffix.copyText.length || 30;
            let copyrightText = _.__config.articleSuffix.copyText.copyright || copyrightHtml;
            document.body.addEventListener('copy', function (e) {
                if (window.getSelection().toString() && window.getSelection().toString().length > textLength) setClipboardText(e);
            });
            function setClipboardText(event) {
                let clipboardData = event.clipboardData || window.clipboardData;
                if (clipboardData) {
                    event.preventDefault();
                    let htmlData = window.getSelection().toString()
                        + '<br /><br /> ———————————————————————————————————————————————— <br />'
                        + `${copyrightText} <br />`
                        + `作者：${author} <br />`
                        + `原文链接：${source} <br />`;

                    let textData = window.getSelection().toString()
                        + '\n\n ———————————————————————————————————————————————— \n'
                        + `${copyrightText.replace(/<\/?.+?>/g,"").replace(/ /g,"")} \n`
                        + `作者：${author} \n`
                        + `原文链接：${source} \n`;

                    clipboardData.setData('text/html', htmlData);
                    clipboardData.setData('text/plain',textData);
                }
            }
        }
    })()
}
