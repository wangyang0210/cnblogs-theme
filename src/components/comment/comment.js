/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:20
 * ----------------------------------------------
 * @describe: 评论处理
 */

export default function main() {

    // 评论框背景图片
    let setBackground = (dayStatus) => {
            dayStatus == 'day' ? $("textarea").css("background", $.__config.articleContent.commentBackground.options.day) : $("textarea").css("background", $.__config.articleContent.commentBackground.options.night)
            localStorage.setItem('isDay', dayStatus )
    }

    // 评论框打字特效
    if($.__config.articleContent.commentTyping.enable) {
        const POWERMODE  = require('./commentTyping/commentTyping')
        POWERMODE.colorful = $.__config.articleContent.commentTyping.options.colorful;
        POWERMODE.shake = $.__config.articleContent.commentTyping.options.shake;
        document.body.addEventListener('input', POWERMODE);
    }

    let setComment = () => {
        let feedbackItem = $('.feedbackItem');
        if (feedbackItem.length > 0) {
            $.each(feedbackItem, (i) => {
                let obj = $(feedbackItem[i]),
                    feedbackCon = obj.find('.feedbackCon'),
                    feedbackListSubtitle = obj.find('.feedbackListSubtitle'),
                    commentBody = feedbackCon.length ? feedbackCon.find('.blog_comment_body') : [],
                    avatarHtml = '',
                    idInfo = commentBody.length ? commentBody.attr('id').split('_') : undefined;

                if (idInfo && idInfo.length > 0) {
                    let id = idInfo[idInfo.length - 1],
                        idTmp = id.toString().match(/\d/g);

                    if ($.isArray(idTmp)) id = idTmp.join('');

                    let op = $('#comment_' + id + '_avatar'), patch  = op.length > 0 ? op.text().trim() : $.__config.default.avatar;

                    let ac = $('#a_comment_author_' + id), ah = ac.length ? ac.attr('href') : 'javascropt:void(0);';

                    avatarHtml = '<div class="feedbackAvatar"><a href="' + ah + '" target="_blank"><img src="'+patch+'"/></a></div>';
                    obj.prepend(avatarHtml);
                }

                if (feedbackListSubtitle.length && feedbackListSubtitle.find('.louzhu').length) feedbackListSubtitle.addClass('feedbackListSubtitle-louzhu');
            });
            $(feedbackItem[0]).css('padding-top', '0');
            $(feedbackItem[feedbackItem.length - 1]).css('padding-bottom', '0');
            $.__config.animate.avatar.enable && $('.feedbackAvatar').addClass('img-rounded')
        }
    }

    $.__timeIds.commentTId = window.setInterval(() =>{
        let isDay = localStorage.getItem('isDay');
        let dayStatus = $.__tools.getCookie('cnblogs_config_isNight');
        if ($.__config.articleContent.commentBackground.enable && (!isDay || isDay != dayStatus)) setBackground(dayStatus);
        if ($('.feedbackItem').length > 0) {
            setComment();
            $.__tools.clearIntervalTimeId( $.__timeIds.commentTId);
        }
    },1000);

    $(document).ajaxSuccess(function (event, xhr, settings) {
        if (settings.url.includes("GetComments.aspx")) setComment();
    });
}
