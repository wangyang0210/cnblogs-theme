/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:20
 * ----------------------------------------------
 * @describe: 评论处理
 */

export default function main(_) {
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

                    let op = $('#comment_' + id + '_avatar'), patch  = op.length > 0 ? op.text().trim() : 'https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_221114123823_default_avatar.webp';

                    let ac = $('#a_comment_author_' + id), ah = ac.length ? ac.attr('href') : 'javascropt:void(0);';

                    avatarHtml = '<div class="feedbackAvatar"><a href="' + ah + '" target="_blank"><img src="'+patch+'"/></a></div>';
                    obj.prepend(avatarHtml);
                }

                if (feedbackListSubtitle.length && feedbackListSubtitle.find('.louzhu').length) feedbackListSubtitle.addClass('feedbackListSubtitle-louzhu');
            });
            $(feedbackItem[0]).css('padding-top', '0');
            $(feedbackItem[feedbackItem.length - 1]).css('padding-bottom', '0');
            _.__config.animate.avatar.enable && $('.feedbackAvatar').addClass('img-rounded')
        }
    }
    _.__timeIds.commentTId = window.setInterval(() =>{
        if ($('.feedbackItem').length > 0) {
            setComment();
            _.__tools.clearIntervalTimeId(_.__timeIds.commentTId);
        }
    },1000);

    $(document).ajaxSuccess(function (event, xhr, settings) {
        if (settings.url.includes("GetComments.aspx")) setComment();
    });
}
