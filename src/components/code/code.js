/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:20
 * ----------------------------------------------
 * @describe: 代码高亮处理
 */
import ClipboardJS from "clipboard/dist/clipboard.min";
import beforeCode from "../../hooks/beforeCode";
import afterCode from "../../hooks/afterCode";

export default function main() {
    let preList = $('#main pre');

    beforeCode();

    /**
     * 初始化代码结构
     */
    (() => {
        $.each(preList, function (i) {
            let pre = $(preList[i]);
            let boxId = 'code-' + $.__tools.randomString(6);

            // 设置外部标签
            pre.wrap('<code-box id="' + boxId + '"></code-box>');
            pre.attr('boxid', boxId);
        });
    })();

    /**
     * 工具条
     */
    (() => {
        if ( $.__config.code.options.macStyle) {
            let codeBox = $('code-box');
            $.each(codeBox, function (i) {
                $(codeBox[i]).prepend('<div class="code-tools"></div>');
            });
        } else {
            preList.css('border-radius', '4px');
        }
    })();

    /**
     * 复制代码
     */
    (() => {
        let codeBox = $('code-box');
        $.each(codeBox, function (i) {
            let code = $(codeBox[i]);
            let boxId = code.attr('id');
            let copyHtml = '<button boxid="' + boxId + '" type="button" class="clipboard code-copay-btn" data-clipboard-action="copy" data-clipboard-target="#' + boxId + ' pre" aria-label="复制代码" ><i class="iconfont icon-fuzhi"></i></button>';
            code.prepend(copyHtml);
        });

        // 点击效果
        $('code-box .code-copay-btn').click(function () {
            $(this).find('i').removeClass('icon-fuzhi').addClass('icon-right');
            setTimeout("$('code-box button[boxid='" + $(this).attr('boxid') + "'] i').removeClass('icon-right').addClass('icon-fuzhi')", 1500);
        });
        // 显示/隐藏
        codeBox.on({
            mouseover: function () {
                $(this).find('.code-copay-btn').css({
                    opacity: 1,
                    visibility: 'visible'
                });
            },
            mouseout: function () {
                $(this).find('.code-copay-btn').css({
                    opacity: 0,
                    visibility: 'hidden'
                });
            }
        });

        new ClipboardJS('.clipboard');
    })();

    /**
     * 限制代码框高度
     */
    (() => {
        if ( $.__config.code.options.maxHeight) $('code-box pre').css('max-height', $.__config.code.options.maxHeight);
    })();

    /**
     * 渲染代码
     */
    (() => {
        let codeType = $.__config.code.type.toLowerCase()
        if (codeType === 'hljs') {
            import(/* webpackChunkName: "code-hljs" */ /* webpackPrefetch: true */ './lib/hljs').then(module => {
                const codeMain = module.default;
                codeMain(setCodeLine);
            });
        } else {
            preList.css('background', '#f5f5fa');
            $('code-box .code-tools').css('background', '#f5f5fa');
            $('pre .hljs').css({
                'background': 'none',
                'border': '0',
                'border-radius': '0',
                'padding': '0'
            });
            setCodeLine();
        }
        afterCode();
    })();

    /**
     * 设置代码行号
     */
    function setCodeLine() {
        if (!$.__config.code.options.line) return true;

        let preListLine = $('code-box pre code');
        $.each(preListLine, function (i) {
            let pre = $(preListLine[i]);
            let codeLine = pre.html().replace(/\<br\>/g, '\n').split('\n');
            let code = [];

            $.each(codeLine, (j) => {
                if (codeLine[j].trim() || j < codeLine.length - 1) {
                    codeLine[j] !== '</code>' && code.push('<code-line class="line-numbers-rows"></code-line>' + codeLine[j]);
                }
            });

            pre.html(code.join('\n'));
            pre.addClass('code-pre-line');
        });
    }

    /**
     * 代码对比
     */
    function codeDiff() {
        $("code-box pre code").html((i,c) => {
            if(/\+&gt;&gt;([\s\S]*)\+&lt;&lt;/.test(c)) return c.replace(/\+&gt;&gt;([\s\S]*)\+&lt;&lt;/, `<span style='background-color: #e6ffec;'>$1</span>`);
            if(/\-&gt;&gt;([\s\S]*)\-&lt;&lt;/.test(c)) return c.replace(/\-&gt;&gt;([\s\S]*)\-&lt;&lt;/, `<span style='background-color: #ffebe9;'>$1</span>`);
        })
    }
}
