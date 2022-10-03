/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:18
 * ----------------------------------------------
 * @describe: 文章目录处理
 */
import "../../style/articleDirectory.css";
import articleDirectoryTemp from '../../template/articleDirectory.html';
import "bootstrap";

export default function main(_) {
    let body     = $('body');
    let postBody = $('#cnblogs_post_body');
    let header   = postBody.find(':header');

    if (header.length > 0) {
        let tagList = [];

        $.each(header, function () {
            tagList.push(parseInt($(this)[0].tagName.replace(/H/g, '')));
        });

        let uniqTagList = uniq(tagList).sort();

        let html = '';
        $.each(header, function () {
            let obj = $(this);
            let h = parseInt(obj[0].tagName.replace(/H/g, ''));

            let hid = '_' + obj.attr('id');
            let titleId = 'tid-' + _.__tools.randomString(6);
            obj.attr('tid', titleId);
            if (!hid || /^[\d]+.*/.test(hid)) {
                if (hid) {
                    let tocObj = $('.toc a[href="#'+hid+'"]');
                    tocObj.length && tocObj.attr('href', '#' + titleId);
                }
                hid = titleId;
                obj.attr('id', hid);
            }

            let num = uniqTagList.indexOf(h);
            let str = num === 0 || num === -1 ? '' : '&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(num);
            html += '<li class="nav-item"><a class="nav-link" href="#' + hid + '" goto="' + titleId + '" onclick="return false;">' + str + obj.text() + '</a></li>';
        });

        let dirHtml = _.__tools.tempReplacement(articleDirectoryTemp, 'dirHtml', html);

        postBody.append(dirHtml);

        body.attr('data-bs-spy', 'scroll');
        body.attr('data-bs-target', '#articleDirectory');
        body.attr('data-bs-offset', '0');
        body.attr('tabindex', '0');
        body.scrollspy({ target: '#articleDirectory' });

        if (!_.__config.articleDirectory.autoWidthScroll) {
            $('#articleDirectory ul li').addClass('articleDirectory-overflow');
            $('#articleDirectory ul li a').addClass('articleDirectory-overflow');
        }

        _.__event.scroll.handle.push(() => {
            let articleDirectory = $('#articleDirectory');
            if (_.__event.scroll.temScroll < _.__event.scroll.docScroll && _.__event.scroll.homeScroll <= _.__event.scroll.docScroll) {
                articleDirectory.addClass('articleDirectoryFixed');
            }

            if (_.__event.scroll.temScroll > _.__event.scroll.docScroll &&_.__event.scroll.homeScroll >= _.__event.scroll.docScroll) {
                articleDirectory.removeClass('articleDirectoryFixed');
            }
        });

        _.__event.resize.handle.push(() => {
            const bodyWidth = parseFloat(document.body.clientWidth),
                articleDirectory = $('#articleDirectory');
            if (articleDirectory.length > 0) {
                let mainContentWidth = $('#home').outerWidth(false),
                    listWidth        = articleDirectory.outerWidth(true);
                let bothWidth        = (bodyWidth - mainContentWidth) / 2,
                    rightPx          = bothWidth - listWidth - 5,
                    sideToolbarTop   = $('.main-header').outerHeight();

                switch (_.__config.articleDirectory.position) {
                    case 'left':
                        articleDirectory.css({
                            'top': (sideToolbarTop + 5) + 'px',
                            'left': (rightPx > 0 ? rightPx : 5) + 'px',
                            'width': (bothWidth > 190 && bothWidth < 260 ? bothWidth - 10 : listWidth) + 'px'
                        });
                        break;
                    case 'right':
                    default:
                        articleDirectory.css({
                            'top': (sideToolbarTop + 5) + 'px',
                            'right' : (rightPx > 0 ? rightPx : 5) + 'px',
                            'width': (bothWidth > 190 && bothWidth < 260 ? bothWidth - 10 : listWidth) + 'px'
                        });
                        break;
                }

                if (bodyWidth <= _.__config.articleDirectory.minBodyWeight || bothWidth <= 190) {
                    articleDirectory.hide();
                } else {
                    articleDirectory.show();
                }
            }
        });

        $('#articleDirectory .nav-link').click(function () {
            let titleH = $(':header[tid="' + $(this).attr('goto') + '"]');
            titleH.length && _.__tools.actScroll(titleH.offset().top + 3, 500);
        });
    }

    /**
     * 数组去重
     * @param array
     * @returns {[]}
     */
    function uniq(array){
        return [...new Set(array)];
    }
}
