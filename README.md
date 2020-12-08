
# 简介

📖 本主题以阅读为核心，美化博客园的显示效果，提高用户体验。 

🍰 基于博皮“SimpleMemory”进行的修改；

🧀 支持响应，尺寸分别为：(1200px,∞px)，(960px,1200px]，(720px,960px]，(0px,720px]

>[原作者github](https://github.com/BNDong/Cnblogs-Theme-SimpleMemory)


# Docs
>原作者文档
- v1.*.*版本：[永久地址](https://bndong.github.io/Cnblogs-Theme-SimpleMemory/v1.1)　[备用地址](https://www.dbnuo.com/Cnblogs-Theme-SimpleMemory/docs/v1.1/)
- v1.0.*版本：[永久地址](https://bndong.github.io/Cnblogs-Theme-SimpleMemory/v1.0)　[备用地址](https://www.dbnuo.com/Cnblogs-Theme-SimpleMemory/docs/v1.0/)

## 完整配置
```JavaScript
<script type="text/javascript">
    window.cnblogsConfig = {
        GhUserName: 'wangyang0210',
        GhRepositories: 'Cnblogs-Theme',
        GhVersions: '2.0.1',
        CnVersions: "",
        blogUser      : "。思索",
        blogAvatar    : "https://pic.cnblogs.com/avatar/1334215/20180504110551.png",
        blogStartDate : "2018-2-12",
        menuCustomList: {},
        menuNavList: [
            ['随笔', 'https://i.cnblogs.com/posts/edit', 'icon-brush_fill'],
            ['GitHub', 'https://github.com/wangyang0210', 'icon-github'],
            ['Cnblogs', 'https://www.cnblogs.com/', 'icon-cnblogs'],
        ],
        menuUserInfoBgImg: '',
        webpageTitleOnblur: "(◍´꒳`◍) Hi,Dear",
        webpageTitleOnblurTimeOut: 500,
        webpageTitleFocus: "(*´∇｀*) 欢迎回来！",
        webpageTitleFocusTimeOut: 1000,
        webpageIcon: "https://files.cnblogs.com/files/wangyang0210/blog_logo.gif",
        fontIconExtend: "",
        progressBar: {
            id: 'top-progress-bar',
            color: '#77b6ff',
            height: '2px',
            duration: 0.2
        },
        loading: {
            rebound: {
                tension: 16,
                friction: 5
            },
            spinner: {
                id: 'spinner',
                radius: 90,
                sides: 3,
                depth: 4,
                colors: {
                    background: '#f0f0f0',
                    stroke: '#272633',
                    base: null,
                    child: '#272633'
                },
                alwaysForward: true,
                restAt: 0.5,
                renderBase: false
            }
        },
        homeTopAnimationRendered: true,
        homeTopAnimation: {
            radius: 15,
            density: 0.2,
            color: 'rgba(255,255,255, .2)',
            clearOffset: 0.3
        },
        essayTopAnimationRendered: true,
        essayTopAnimation: {
            triW: 14,
            triH: 20,
            neighbours: ["side", "top", "bottom"],
            speedTrailAppear: .1,
            speedTrailDisappear: .1,
            speedTriOpen: 1,
            trailMaxLength: 30,
            trailIntervalCreation: 100,
            delayBeforeDisappear: 2,
            colorsRandom: false,
            colors: [
                '#96EDA6', '#5BC6A9',
                '#38668C', '#374D84',
                '#BED5CB', '#62ADC6',
                '#8EE5DE', '#304E7B'
            ]
        },
        bgAnimationRendered: true,
        backgroundAnimation: {
            colorSaturation: "60%",
            colorBrightness: "50%",
            colorAlpha: 0.5,
            colorCycleSpeed: 5,
            verticalPosition: "random",
            horizontalSpeed: 200,
            ribbonCount: 3,
            strokeSize: 0,
            parallaxAmount: -0.2,
            animateSections: true
        },
        homeTopImg: [
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/wallhaven-j55w9p_1920x1080.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/wallhaven-dgzkw3_1920x1080.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/home_top_bg.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/wallhaven-x1wroo.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/nothome_top_bg.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/wallhaven-13gom9.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/wallhaven-vg7lv3.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/wallhaven-odej2m.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/wallhaven-j5mz95.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/19059-wallhaven-3911w9.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/wallhaven-6k3oox.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/for.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/wallhaven-737jo3.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/42476-wallhaven-oxzk8m.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/wallhaven-oxdyvl.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/44817-wallhaven-p8rdq9.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/39093-wallhaven-oxkjgm"
             
        ],
        homeBannerText: "",
        homeBannerTextType: "one", // one 每天一句话 jinrishici 每天一句诗词
        essayTopImg: [
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/nothome_top_bg.webp",
            "https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@theme-simpleMemory/img/webp/wallhaven-13gom9.webp"
     ],
        essayCodeHighlightingType: 'highlightjs',
        essayCodeHighlighting: 'a11y-dark',
        essayCodeLanguages: [],
        essayCode: {
            fontFamily: "'Ubuntu Mono',monospace",
            fontSize: "14px",
        },
        codeMaxHeight: false,
        codeLineNumber: false,
        essayTitleStyle: false,
        essaySuffix: {
            codeImgUrl: '',
            aboutHtml: '',
            copyrightHtml: '',
            supportHtml: ''
        },
        bottomBlogroll: [],
        bottomText: {
            iconFont: {
                icon:  "icon-xl",
                color: "red",
                fontSize: "16px"
            },
            left: "学无止境",
            right: "谦卑而行",
        },
        footerStyle: 2,
        consoleList: [
             ['wangyang0210 CNBlogs', 'https://www.cnblogs.com/wangyang0210'],
             ['wangyang0210 GitHub', 'https://github.com/wangyang0210'],
             ['wangyang0210 Email', 'wangyang.0210@foxmail.com'],
             ['主题计划', 'footer改为鱼跃']
         ],
        bookList: [],
        themeAuthor: false,
        isVersionMapping: false,
        switchDayNight: {
            enable: true,
            auto: {
                enable: false,
                dayHour: 5,
                nightHour: 19
            }
        },
        reward: {
            enable: false,
            wechatpay: '',
            alipay: ''
        },
        weChatOfficialAccounts: '',
        advertising: true,
    }
</script>

<script src="https://cdn.jsdelivr.net/gh/wangyang0210/Cnblogs-Theme@2.0.1/src/script/simpleMemory.min.js" defer></script>

```
