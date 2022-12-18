/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:28
 * ----------------------------------------------
 * @describe: 工具处理类
 */

import {request} from './request'

export default {
    /**
     * 获取当天00:00:00的13位时间戳
     * @return {string}
     */
    getTodayStart: () => { return moment().startOf('day').format('x') },

    /**
     * 获取当天23:59:59的13位时间戳
     * @return {string}
     */
    getTodayEnd: () => { return moment().endOf('day').format('x') },

    /**
     * 获取前一天00:00:00的13位时间戳
     * @return {string}
     */
    getYesterdayStart: () => {
        return moment().subtract(1, 'days').startOf('day').format('x')
    },

    /**
     * 获取前一天23:59:59的13位时间戳
     * @return {string}
     */
    getYesterdayEnd: () => {
        return moment().subtract(1, 'days').endOf('day').format('x')
    },

    /**
     * 获取当天的日期
     * @return {string}
     */
    getTodayDate: () => {
        return moment().format('MM-DD')
    },

    /**
     * 处理文章信息分类和标签
     * @param obj {object} 获取的dom对象
     * @param type {number} 1为分类2为标签
     */
    articleInfo: (obj, type) => {
        let iconfont = type === 1 ? 'icon-marketing_fill' : 'icon-label-fill';
        let style = type === 1 ? 'article-tag-class-color' : 'article-tag-color';
        $.each(obj, (i) => {
            let tag = $(obj[i]);
            tag.prepend('<span class="iconfont ' + iconfont + '"></span>');
            $('#articleInfo').append('<a href="' + tag.attr('href') + '" target="_blank"><span class="article-info-tag ' + style + '">' + (tag.text()) + '</span></a>');
        });
    },

    /**
     * 模版替换
     * @param temp {String} 模板文件
     * @param par {String} 需查找的字符串
     * @param str {String} 替换后的内容
     */
    tempReplacement: (temp, par, str) => {
        let re = new RegExp('##' + par + '##', "g");
        return temp.replace(re, str);
    },

    /**
     * 批量模版替换
     * @param temp {String} 模板内容
     * @param list {String} 需查找的字符串
     */
    batchTempReplacement: (temp, list) => {
        let t = temp;
        $.each(list, function (i) {
            let par = list[i];
            let re = new RegExp('##' + par[0] + '##', "g");
            t = t.replace(re, par[1]);
        });
        return t;
    },

    /**
     * 动态加载CSS文件
     * @param href {String} CSS文件地址
     */
    dynamicLoadingCss: (href) => {
        $('head').append('<link>')
        const link = $('head').children(':last')
        link.attr({ rel: 'stylesheet', type: 'text/css',  href })
    },

    /**
     * 动态加载JS文件
     * @param url {String} JavaScript文件地址
     *
     */
    dynamicLoadingJs: (url) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                dataType: 'script',
                cache: true,
                url,
                success:function (data) {
                    resolve(data)
                },
                error:function (err) {
                    reject(err)
                }
            })
        })
    },

    /**
     * 过滤HTML中JavaScript代码
     * @param str {String} html代码内容
     */
    htmlFiltrationScript: (str) => {
        let subStr = new RegExp('\<script.*\<\/script\>', 'ig');
        return str.replace(subStr, "");
    },

    /**
     * 清除单个定时器
     * @param timeId {number} 定时器ID
     */
    clearIntervalTimeId: (timeId) => { null != timeId && window.clearInterval(timeId) },

    /**
     * 滚动主体滚动条到指定位置
     * @param endScroll {number} 结束位置
     * @param time {number} 滚动时间
     */
    actScroll: (endScroll, time) => {
        $('html,body').stop().animate({ scrollTop: endScroll }, time)
    },

    /**
     * 获取页面滚动百分比
     * @return {string}
     */
    getScrollPercent: () => {
        let scrollTo = $(window).scrollTop(),
            docHeight = $(document).height(),
            windowHeight = $(window).height(),
            scrollPercent = (scrollTo / (docHeight - windowHeight)) * 100;
        return scrollPercent.toFixed(0);
    },

    /**
     * 随机数
     * @param minNum {number} 最小值
     * @param maxNum {number} 最大值
     * @return {number}
     */
    randomNum: function (minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1);
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
            default:
                return 0;
        }
    },

    /**
     * 初始化主体内容位置
     */
    setDomHomePosition: () => { $('#home').css('margin-top', $('.main-header').outerHeight() + 'px') },

    /**
     * 运行时间
     * @param dateString {String} 年-月-日
     */
    getRunDate: (dateString) => {
        let temp = dateString.split('-');
        let date = new Date();
        date.setUTCFullYear(temp[0], temp[1] - 1, temp[2]);
        date.setUTCHours(0, 0, 0, 0);
        let birthDay = date;
        let today = new Date();
        let timeold = today.getTime() - birthDay.getTime();
        let msPerDay = 24 * 60 * 60 * 1000;
        let e_daysold = timeold / msPerDay;
        let daysold = Math.floor(e_daysold);
        let e_hrsold = (daysold - e_daysold) * -24;
        let hrsold = Math.floor(e_hrsold);
        let e_minsold = (hrsold - e_hrsold) * -60;
        let minsold = Math.floor((hrsold - e_hrsold) * -60);
        let seconds = Math.floor((minsold - e_minsold) * -60).toString();
        return { daysold: daysold, hrsold: hrsold, minsold: minsold, seconds: seconds };
    },

    /**
     * 设置 cookie
     * @param key {String} key名
     * @param value {String} key值
     * @param expires 过期时间，单位秒
     */
    setCookie: (key, value, expires) => {
        let exp = new Date();
        exp.setTime(exp.getTime() + expires * 1000);
        document.cookie = key + "=" + escape(value) + "; expires=" + exp.toGMTString() + "; path=/";
    },

    /**
     * 获取 cookie
     * @param key {String} key名
     * @returns {string|null}
     */
    getCookie: (key) => {
        let arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
        arr = document.cookie.match(reg);
        if (arr) return unescape(arr[2]);
        else return null;
    },

    /**
     * 随机字符串
     * @param len {number} 字符串长度
     */
    randomString: (len) => {
        len = len || 32;
        let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678', maxPos = $chars.length, pwd = '';
        for (let i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
        }
        return pwd;
    },

    /**
     * 分钟转换为时间格式
     * @param min {number} 文章内容长度
     * @return {String} 阅读时间范围
     */
    minToTime: (min) => {
        let minTime =  parseInt(min);
        let second =  parseInt((min - minTime) * 60);
        second = ('' + second).length === 1 ? '0' + second : second;
        return `${minTime}:${second}`;
    },

    /**
     * 版本对比
     * @param v1 {string} 当前版本
     * @param v2 {string} 最新版本
     * @return {number} 是否为最新版本
     */
    compareVersion: (v1, v2) => {
        const nums1 = v1.split('.')
        const nums2 = v2.split('.')
        let i = 0
        while (i < nums1.length || i < nums2.length) {
            let x = 0, y = 0
            if (i < nums1.length) x = parseInt(nums1[i])
            if (i < nums2.length) y = parseInt(nums2[i])
            if (x > y) return 1
            if (x < y) return -1
            i++
        }
        return 0
    },

    /**
     * 获取当前版本是否为最新版本
     * @return {number}
     */
    getVersion: () => {
        let remoteVersion = localStorage.getItem('version')
        if (!remoteVersion) {
            request('https://api.github.com/repos/wangyang0210/cnblogs-theme/releases/latest').then(r => {
                localStorage.setItem('version', r.tag_name)
                localStorage.setItem('repoUrl', r.html_url)
            })
        } else {
            return this.compareVersion(remoteVersion, $.__config.default.version)
        }
    }
}
