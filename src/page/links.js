/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 友链页处理
 */
import comArticle from "./common/comArticle";
import '../style/links.css';
import linksTemp from '../template/links.html';

export default function main(_) {
    /**
     * 文章页公共处理
     */
    (() => {
        comArticle(_);
    })();

    /**
     * 添加友链
     */
    (() => {
        if (_.__config.links.page.length) {
            let postBody = $('#cnblogs_post_body'),
                html = '';

            $.each(_.__config.links.page, (i) => {
                let list = _.__config.links.page[i];
                if (list.title) html += '<h1 class="iconfont ' + list.icon + '" style="'+ list.style +'"> ' + list.title + '</h1>';

                html += '<div id="links-box">';

                $.each(list.links, (j) => {
                    let linksHtml = linksTemp,  data = list.links[j];

                    // 处理模版
                    linksHtml =  _.__tools.batchTempReplacement(linksHtml, [
                        ['avatar', typeof data.avatar !== 'undefined' ? data.avatar : ''],
                        ['name', typeof data.name !== 'undefined' ? data.name : ''],
                        ['introduction', typeof data.introduction !== 'undefined' ? data.introduction : ''],
                        ['url', typeof data.url !== 'undefined' ? data.url : ''],
                        ['icon', j % 3 === 0 ? 'icon-zhifeiji': (j % 3 === 1 ? 'icon-like-fill' : 'icon-flashlight-fill')]
                    ]);
                    html += linksHtml;
                });

                html += '</div>';
            })

            // 插入模版
            let articleSuffixFlg = $('.articleSuffix-flg');
            articleSuffixFlg.length ? articleSuffixFlg.before(html) : postBody.append(html);
        }
    })();
}
