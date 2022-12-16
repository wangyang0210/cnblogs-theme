/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:26
 * ----------------------------------------------
 * @describe: 文章页处理
 */
import comArticle from "./common/com-article";
import imgBox from "../components/imgBox/imgBox";
$.__tools.dynamicLoadingJs($.__config.default.iconfont).catch(e => console.error('iconfont.js', e))

export default function main() {

    /**
     * 文章页公共处理
     */
    (() => {
        comArticle();
    })();

    /**
     * 代码高亮处理
     */
    (() => {
        // 异步处理防止影响loading结束
        import(/* webpackChunkName: "article-code" */  /* webpackPrefetch: true */ '../components/code/code').then(module => {
            const code = module.default;
            code();
        });
    })();

    /**
     * 图片灯箱处理
     */
    (() => {
        imgBox();
    })();
}
