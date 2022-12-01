/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 右下角菜单处理
 */
import rtMenuTemp from '../../template/rtMenu.html';

export default function main(_) {
    $('#blog-news').prepend(rtMenuTemp);
    const rightMenu = $('#rightMenu');

    /**
     * 公共事件
     */
    (() => {
        rightMenu.find('i').on({
            mouseover: function () {
                typeof $(this).attr('banmv') === 'undefined' && $(this).rotate({
                    animateTo: -60, duration: 250, callback: function () {
                        $(this).rotate({
                            animateTo: 60, duration: 250, callback: function () {
                                $(this).rotate({
                                    animateTo: -30, duration: 150, callback: function () {
                                        $(this).rotate({
                                            animateTo: 30, duration: 150, callback: function () {
                                                $(this).rotate({animateTo: 0, duration: 100});
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });

        rightMenu.find('.rightMenuItem').on({
            mouseover: function () {
                $(this).find('.rightMenuSpan').stop().fadeIn(300);
            },
            mouseout: function () {
                $(this).find('.rightMenuSpan').stop().fadeOut(300);
            }
        });
    })();

    /**
     * 上下滚动
     */
    (() => {

        // 点击事件
        $('#toUpDown').click(function () {
            let ac = $(this).attr('data');
            if (ac === 'down') {
                let downScroll;
                if (_.__config.rtMenu.downScrollDom && $(_.__config.rtMenu.downScrollDom).length > 0) {
                    downScroll = $(_.__config.rtMenu.downScrollDom).offset().top + 10;
                } else {
                    let docHeight = $(document).height();
                    let windowHeight = $(window).height();
                    downScroll = docHeight - windowHeight;
                }

                $.__tools.actScroll(downScroll, 900)
            } else {
                $.__tools.actScroll(0, 900)
            }
        });

        // 滚动事件
        $.__event.scroll.handle.push(() => {
            let toUpDown = $("#toUpDown"),
                toUpDownI = $("#toUpDownI"),
                toUpDownSpan = $('.toUpDownSpan');

            $.__event.scroll.docScroll = $(document).scrollTop(); // 当前滚动位置
            $.__event.scroll.homeScroll = $('#home').offset().top - 40; // 主体滚动

            if (_.__event.scroll.homeScroll <= $.__event.scroll.docScroll) {
                toUpDownI.rotate({animateTo: 0});
                toUpDown.attr('data', 'up');
                toUpDownSpan.text('返回顶部');
            } else {
                toUpDownI.rotate({animateTo: -180});
                toUpDown.attr('data', 'down');
                toUpDownSpan.text('跳至底部');
            }
        });
    })();

    /**
     * 设置
     */
    (() => {
        // 旋转
        let angle = 0;
        setInterval(function () {
            angle += 7;
            $('#rightMenuSite i').rotate(angle);
        }, 30);

        // 点击事件
        $('#rightMenuSite').click(function () {
            let flg = $(this).attr('clickflg');
            if (flg === 'true') {
                $('#rightMenuSite .rightMenuSpan').text('点击关闭');
                $(this).attr('clickflg', 'false');
            } else {
                $('#rightMenuSite .rightMenuSpan').text('点击开启');
                $(this).attr('clickflg', 'true');
            }
            $('#rightMenu .hideRightMenu').slideToggle(350);
        });
    })();

    /**
     * 关注
     */
    (() => {
        $.__timeIds.followTId = window.setInterval(() => {
            let followObj = $('#p_b_follow');
            if (followObj.length > 0) {
                let clickStr = followObj.text() !== '' ? $('#p_b_follow a').attr('onclick') : '';
                if (clickStr && !!clickStr.indexOf('unfollow') > 0) {
                    let attention = $('#attention');
                    attention.attr('onclick', clickStr.replace('unfollow', 'follow'))
                        .attr('clickflg', 'false');
                    attention.find('.rightMenuSpan').text('关注');
                    attention.find('i').removeClass('icon-follower').addClass('icon-unfollower');
                }
                $.__tools.clearIntervalTimeId(_.__timeIds.followTId);
            }
        }, 1000);
    })();

    /**
     * 二维码
     */
    (() => {
        if (_.__config.rtMenu.qrCode) {
            $('#rightGzh').show().find('.ds-gzh img').attr('src', $.__config.rtMenu.qrCode);
        }
    })();


    /**
     * 打赏
     */
    (() => {
        if (_.__config.rtMenu.reward.alipay || $.__config.rtMenu.reward.wechatpay) {
            $('#rightDashang').show();

            $.__config.rtMenu.reward.alipay
            && $('#rightDashang .ds-alipay').show().find('img').attr('src', $.__config.rtMenu.reward.alipay);

            $.__config.rtMenu.reward.wechatpay
            && $('#rightDashang .ds-wecat').show().find('img').attr('src', $.__config.rtMenu.reward.wechatpay);
        }
    })();

    /**
     * 顶踩
     */
    (() => {

        // 顶
        $.__timeIds.diggitTId = window.setInterval(() => {
            let diggit = $(".diggit");
            if (diggit.length > 0) {
                diggit.prepend('<i class="iconfont icon-dianzan"></i>');

                let rightDiggit = $('#rightDiggit');
                let rightMenuSpan = rightDiggit.find('.rightMenuSpan');

                rightDiggit.attr('onclick', diggit.attr("onclick"));
                rightMenuSpan.text($('#digg_count').text());

                rightDiggit.show().click(function () {
                    clickHdl($(this), rightMenuSpan, $('#digg_count').text());
                });

                $.__tools.clearIntervalTimeId(_.__timeIds.diggitTId);
            }
        }, 1000);

        // 踩
        $.__timeIds.buryitTId = window.setInterval(() => {
            let buryit = $(".buryit");
            if (buryit.length > 0) {
                buryit.prepend('<i class="iconfont icon-buzan"></i>');

                let rightBuryit = $('#rightBuryit');
                let rightMenuSpan = rightBuryit.find('.rightMenuSpan');

                rightBuryit.attr('onclick', buryit.attr("onclick"));
                rightMenuSpan.text($('#bury_count').text());

                rightBuryit.show().click(function () {
                    clickHdl($(this), rightMenuSpan, $('#bury_count').text());
                });

                $.__tools.clearIntervalTimeId(_.__timeIds.buryitTId);
            }
        }, 1000);

        // 处理顶踩数值更新
        function clickHdl(obj, subObj, cun) {
            if (obj.attr('clickflg') === 'false') {
                obj.attr('clickflg', 'true');
                subObj.text('提交中.');

                setTimeout(() => {
                    subObj.text('提交中..')
                }, 300);
                setTimeout(() => {
                    subObj.text('提交中...')
                }, 600);
                setTimeout(() => {
                    subObj.text('更新中.')
                }, 900);
                setTimeout(() => {
                    subObj.text('更新中..')
                }, 1200);
                setTimeout(() => {
                    subObj.text('更新中...')
                }, 1500);
                setTimeout(() => {
                    subObj.text(cun);
                    obj.attr('clickflg', 'false');
                }, 1800);
            }
        }
    })();

    /**
     * 文章目录
     */
    (() => {
        if (_.__status.pageType !== 'home') {
            let rtaDirectory = $('#rtaDirectory');
            rtaDirectory.show();

            // 点击事件
            rtaDirectory.click(function () {
                let articleDirectory = $('#articleDirectory');
                if (articleDirectory.length) {
                    articleDirectory.is(':hidden') ? articleDirectory.fadeIn(300) : articleDirectory.fadeOut(300);
                }
            });
        }
    })();

    /**
     * 主页
     */
    (() => {
        if (_.__status.pageType !== 'home') {
            let rightMenuHome = $('#rightMenuHome');
            rightMenuHome.show();

            // 点击事件
            rightMenuHome.click(function () {
                window.location.href = $.__status.homeUrl;
            });
        }
    })();
}
