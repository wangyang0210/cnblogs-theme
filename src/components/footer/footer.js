/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:22
 * ----------------------------------------------
 * @describe: footer底部信息
 */
import footerTemp from '../../template/footer.html';
import footerImg from './../../images/footer.webp';
import backgroundImg from './../../images/background.webp';
import cloudsImg from './../../images/clouds.webp';
import foregroundImg from './../../images/foreground.webp';
import {getConfigInfo, getOnline, getWebSiteState} from "../../api";

export default function main(_) {

    const footer = $('#footer');
    const footerText = footer.text();

    let footerHtml = footerTemp;
    let config = _.__config.footer;

    footerHtml = _.__tools.tempReplacement(footerHtml, 'footerText', footerText);

    /**
     * 设置标语
     */
    (() => {
        if (config.text.left || config.text.right) {
            let re = [
                ['textLeft', config.text.left],
                ['iconFont', config.text.iconFont.icon],
                ['iconColor', config.text.iconFont.color],
                ['iconSize', config.text.iconFont.fontSize],
                ['textRight', config.text.right],
                ['textShow', 'block'],
            ];
            footerHtml = _.__tools.batchTempReplacement(footerHtml, re);
        } else {
            footerHtml = _.__tools.tempReplacement(footerHtml, 'textShow', 'none');
        }
    })();

    /**
     * 设置友情链接
     */
    (() => {
        if (_.__config.links.footer.length > 0) {
            let linksHtml = '友情链接：';
            for (let i = 0; i < _.__config.links.footer.length; i++) {
                linksHtml += '<a href="' + (_.__config.links.footer[i][1]) + '" target="_blank">' + (_.__config.links.footer[i][0]) + '</a>';
                if (i < _.__config.links.footer.length - 1) linksHtml += '<span style="margin: 0 3px;">/</span>';
            }
            footerHtml = _.__tools.batchTempReplacement(footerHtml, [
                ['linksHtml', linksHtml],
                ['linkShow', 'block']
            ]);
        } else {
            footerHtml = _.__tools.tempReplacement(footerHtml, 'linkShow', 'none');
        }
    })();

    /**
     * 添加页脚
     */
    (() => {
        footer.html(footerHtml);
    })();

    /**
     * 页脚样式
     */
    (() => {
        switch (parseInt(config.style)) {
            case 1:
                $('#footer').addClass('footer-t1').find('#footerStyle1')
                    .show().css('background', 'url(\'' + footerImg + '\')  no-repeat 50%');
                break;
            case 2:
            default:
                $('#footer .footer-text').css({
                    'padding-bottom': '0',
                    'border-bottom': 'none',
                    'margin-bottom': '0'
                });
                let footerStyle2 = $('#footerStyle2');
                footerStyle2.show().find('.clouds').css('background', 'url(\'' + cloudsImg + '\')  repeat-x');
                footerStyle2.find('.background').css('background', 'url(\'' + backgroundImg + '\')  repeat-x');
                footerStyle2.find('.foreground').css('background', 'url(\'' + foregroundImg + '\')  repeat-x');
                break;
        }
    })();

    /**
     * 设置运行时间
     */
    (() => {
        window.setInterval(() => {
            let runDate = _.__tools.getRunDate(_.__config.info.startDate ? _.__config.info.startDate : '2021-01-01');
            $('#blogRunTimeSpan').text('This blog has running : ' + runDate.daysold + ' d ' + runDate.hrsold + ' h ' + runDate.minsold + ' m ' + runDate.seconds + ' s');
        }, 500);
    })();

    /**
     * 定时网站统计
     */
    (() => {

        if (_.__config.umami?.url && _.__config.umami?.shareId) {
            const baseUrl = _.__config.umami.url
            _.__timeIds.umamiTId = window.setInterval(() => {
                getConfigInfo(baseUrl, `api/share/${_.__config.umami.shareId}`).then( r => {
                    Promise.all([
                        getWebSiteState(baseUrl, `api/website/${r.websiteId}/stats`, {'start_at': _.__tools.getTodayStart(),'end_at': _.__tools.getTodayEnd()}),
                        getWebSiteState(baseUrl, `api/website/${r.websiteId}/stats`, {'start_at': _.__tools.getYesterdayStart(),'end_at': _.__tools.getYesterdayEnd()}),
                        getOnline(baseUrl, `api/website/${r.websiteId}/active`)])
                        .then(function (results) {
                            const todayState = results[0]
                            const yesterdayState = results[1]
                            const online = results[2]
                            $('#cnzzInfo').text(`Online: ${online[0].x} | Today: ${todayState.pageviews.value} / ${todayState.uniques.value} / ${todayState.totaltime.value} | Yesterday: ${yesterdayState.pageviews.value} / ${yesterdayState.uniques.value} / ${yesterdayState.totaltime.value}`).show();
                        });
                })
                _.__tools.clearIntervalTimeId(_.__timeIds.umamiTId);
            },1000);
        }
    })();
}
