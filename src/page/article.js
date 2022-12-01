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

export default function main(_) {

    /**
     * 文章页公共处理
     */
    (() => {
        comArticle(_);
    })();

    /**
     * 代码高亮处理
     */
    (() => {
        // 异步处理防止影响loading结束
        import(/* webpackChunkName: "article-code" */  '../components/code/code').then(module => {
            const code = module.default;
            code(_);
        });
    })();

    /**
     * 图片灯箱处理
     */
    (() => {
        imgBox(_);
    })();
}
