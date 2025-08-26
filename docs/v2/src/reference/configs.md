# 配置项

::: danger 注意
所有配置需要配置在 `window.cnblogsConfig` 里。
:::

::: tip 提示
Url 类型的配置，请尽量配置支持 Https 的地址！
:::

::: info 信息
JavaScript 对象是被命名值的容器。值以名称:值对的方式来书写（名称和值由冒号分隔）。
:::

**示例配置**

例如我原配置为：

```html
<script type="text/javascript">
    window.cnblogsConfig = {
        info: {
            name: 'userName',
            startDate: '2021-01-01',
            avatar: 'http://xxxx.png',
        },
    }
</script>
```

我需要新增关于主页图片的配置，新增配置为：

```html
<script type="text/javascript">
    window.cnblogsConfig = {
        info: {
            name: 'userName',
            startDate: '2021-01-01',
            avatar: 'http://xxxx.png',
        },
        banner: {
            home: {
                background: [
                    "https://x1.jpg",
                    "https://x2.jpg",
                    "https://x3.jpg",
                ],
            },
        }
    }
</script>
```

## info - 基础信息

### name - 用户昵称

* 类型：`String`
* 默认值：`{默认抓取博客园用户名}`

用户昵称。

```javascript
window.cnblogsConfig = {
  info: {
    name: 'userName',
  },
}
```

### avatar - 用户头像

* 类型：`Url`
* 默认值：`""`

用户头像图片 Url。

```javascript
window.cnblogsConfig = {
  info: {
    avatar: 'https://x1.jpg',
  },
}
```

### startDate - 入园时间

* 类型：`Date`
* 默认值：`2021-01-01`

入园时间，年-月-日，入园时间查看方法：鼠标停留园龄时间上，会显示入园时间。

```javascript
window.cnblogsConfig = {
  info: {
    startDate: '2021-01-01',
  },
}
```

### blogIcon - 网站图标

* 类型：`Url`
* 默认值：`""`

网站图标图片 Url。

```javascript
window.cnblogsConfig = {
  info: {
    blogIcon: 'https://x1.jpg',
  },
}
```

## sidebar - 侧边栏

### navList - 菜单导航

* 类型：`Array`
* 默认值：`[]`

自定义菜单导航，显示在默认导航下方。

```javascript
window.cnblogsConfig = {
  sidebar: { // 列表数据 ['导航名称', '链接', 'icon']
    navList: [
        {text: "随笔", link:'https://i.cnblogs.com/posts/edit', icon: 'icon-brush-fill'},
    ],
  },
}
```

### customList - 菜单数据

* 类型：`Object`
* 默认值：`{}`

自定义菜单数据，显示在默认数据上方。

```javascript
window.cnblogsConfig = {
  sidebar: { // 列表数据 ['导航名称', '链接', 'icon']
   customList: [
      {
          title: '哈哈哈哈哈',
          data: [
              {text:'我的博客1' , link: 'https://www.cnblogs.com/wangyang1225/'},
              {text:'我的博客2' , link: 'https://www.cnblogs.com/wangyang1225/'},
          ],
          icon: 'icon-brush-fill',
      },
    ],
  },
}
```

### infoBackground - 侧边栏背景

* 类型：`Url`
* 默认值：`""`

```javascript
window.cnblogsConfig = {
  sidebar: {
    infoBackground: 'https://x1.jpg',
  },
}
```

### titleMsg - 侧边栏title信息

* 类型：`String`
* 默认值：`"欢迎访问本博客~"`

配置侧边栏 title 信息。

```javascript
window.cnblogsConfig = {
  sidebar: {
      titleMsg: '欢迎访问本博客~',
  },
}
```
### blogStatus - 博客统计信息

* 类型：`Boolean`
* 默认值：`true`

配置侧边栏 title 信息。

```javascript
window.cnblogsConfig = {
  sidebar: {
      blogStatus: true,
  },
}
```

### submenu - 侧边栏是否展开配置

-   类型：`Object`
-   默认值：`{}`

默认都不展开，设置为 true 则展开。

```javascript
window.cnblogsConfig = {
    sidebar: {
        submenu: {
            // 积分排行
            pointsRank: false,
            // 最新随笔
            latestPosts: false,
            // 我的标签
            myTags: false,
            // 随笔分类
            postsClassify: false,
            // 文章分类
            articleClassify: false,
            // 阅读排行
            readRank: false,
            // 推荐排行
            recommendRank: false,
            // 帖子档案
            postsArchive: false,
            // 文章档案
            articleArchive: false,
            // 自定义列表
            customList: false,
            // 最新评论
            latestComment: false,
        },
    },
}
```

## banner - Banner

### home - 主页
<br>


### titleSelect - 标题是否可选择

* 类型：`Boolean`
* 默认值：`false`

主页 Banner 标题和文章页标题是否可选择，默认为 false，不可以选择。
```javascript
window.cnblogsConfig = {
    banner: {
        titleSelect: false,
    },
}
```


#### background - 主页 Banner 图片

* 类型：`Array`
* 默认值：`[]`

主页 Banner 图片 URL，推荐尺寸 >= 1920*1080，支持多张，每次刷新随机设置一张。

```javascript
window.cnblogsConfig = {
    banner: {
        home: {
            background: [
                "https://x1.jpg",
                "https://x2.jpg",
                "https://x3.jpg",
            ],
        },
    },
}
```

#### title - 主页 Banner 标语

* 类型：`String | Array`
* 默认值：`""`

主页 Banner 上的标语，设置此选项会显示自定义文字，默认为空，自动获取一句。

1. 设置文字，会固定显示该文字。
2. 设置数组，随机从数组中获取一条文字显示。

```javascript
window.cnblogsConfig = {
    banner: {
        home: {
            title: '每一个不曾起舞的日子，都是对生命的辜负。',
        },
    },
}
```

or

```javascript
window.cnblogsConfig = {
    banner: {
        home: {
            title: [
                '每一个不曾起舞的日子，都是对生命的辜负。',
                '公主死去了，屠龙的少年还在燃烧'
            ],
        },
    },
}
```

#### titleSource - 主页 Banner 标语获取源

* 类型：`String`
* 默认值：`"jinrishici"`

主页 Banner 上的标语获取源，默认为 `jinrishici` 每次刷新随机获取一句古诗词。

```javascript
window.cnblogsConfig = {
    banner: {
        home: {
            titleSource: 'one',
        }
    },
}

/** 所有可配置项
jinrishici：每次刷新随机获取一句古诗词。
one：每日获取一句话
*/
```

### article - 文章页
<br>

#### background - 文章页 Banner 图片

* 类型：`Array`
* 默认值：`[]`

文章页 Banner 图片 URL，推荐尺寸 >= 1920*1080，支持多张，每次刷新随机设置一张。

```javascript
window.cnblogsConfig = {
    banner: {
        article: {
            background: [
                "https://x1.jpg",
                "https://x2.jpg",
                "https://x3.jpg",
            ],
        },
    },
}
```

## loading - Loading

* 类型：`Object`
* 默认值：

```json5
{
    rebound: {
        tension: 16,
        friction: 5,
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
            child: '#272633',
        },
        alwaysForward: true, // When false the spring will reverse normally.
        restAt: 0.5,         // A number from 0.1 to 0.9 || null for full rotation
        renderBase: false,
    }
}
```

页面加载 Loading。

```javascript
window.cnblogsConfig = {
    loading: {
         rebound: {
             tension: 16,
         },
         spinner: {
             id: 'spinner',
             radius: 90,
         }
    },
}
```

## fontIconExtend - 字体图标库扩展

* 类型：`Url`
* 默认值：`""`

字体图标库扩展Css的Url。

```javascript
window.cnblogsConfig = {
    fontIconExtend: "//at.alicdn.com/t/font_xxxxxxxxxx.css",
}
```

## progressBar - 顶部进度条

* 类型：`Object`
* 默认值：

```json5
{
    id      : 'top-progress-bar', // 请勿修改该值
    color   : '#77b6ff',
    height  : '2px',
    duration: 0.2,
}
```

进度条配置，显示在页面顶部。

```javascript
window.cnblogsConfig = {
    progressBar: {
         color   : '#77b6ff',
    },
}
```

## title - 页面标签

### onblur - 失去焦点标签文字

* 类型：`String`
* 默认值：`(oﾟvﾟ)ノ Hi`

当页面失去焦点，页面 title 显示的文字。

```javascript
window.cnblogsConfig = {
  title: {
    onblur: '(oﾟvﾟ)ノ Hi',
  },
}
```

### onblurTime - 失去焦点变化延时

* 类型：`Number`
* 默认值：`500`

当页面失去焦点，页面 title 变化的延时时间，单位毫秒。

该配置值为 -1 时，当页面失去焦点，页面 title 显示的文字不会变化。

```javascript
window.cnblogsConfig = {
  title: {
    onblurTime: 500,
  },
}
```

### focus - 获取焦点标签文字

* 类型：`String`
* 默认值：`(*´∇｀*) 欢迎回来！`

当页面获取焦点，页面 title 显示的文字；显示后，延时恢复原 title。

```javascript
window.cnblogsConfig = {
  title: {
    focus: '(*´∇｀*) 欢迎回来！',
  },
}
```

### focusTime - 获取焦点变化延时

* 类型：`Number`
* 默认值：`1000`

当页面获取焦点，页面 title 变化的延时时间，单位毫秒。

该配置值为 -1 时，当页面获取焦点，页面 title 显示的文字不会变化。

```javascript
window.cnblogsConfig = {
  title: {
    focusTime: 1000,
  },
}
```

## footer - 页脚

### style - 页脚样式

* 类型：`Number`
* 默认值：`2`

页脚样式：

style: 1

![img](https://pic.imgdb.cn/item/676bcb46d0e0a243d4e9f58e.png)

style: 2

![img](https://pic.imgdb.cn/item/676bcb4cd0e0a243d4e9f592.png)

```javascript
window.cnblogsConfig = {
  footer: {
    style: 1,
  },
}
```

### text - 页脚标语

#### left - 页脚标语左侧文字

* 类型：``String`
* 默认值：`""`

页脚标语左侧文字。

```javascript
window.cnblogsConfig = {
  footer: {
    text: {
      left: '好好学习',
    },
  },
}
```

#### right - 页脚标语右侧文字

* 类型：`String`
* 默认值：`""`

页脚标语右侧文字。

```javascript
window.cnblogsConfig = {
  footer: {
    text: {
      right: '天天向上',
    },
  },
}
```

#### iconFont - 页脚标语中间图标

* 类型：`Object`
* 默认值：`{}`

```json
{
    icon:  "icon-xinlv", // iconfont 图标名称
    color: "red", // 图标颜色
    fontSize: "16px" // 图标大小
}
```

页脚标语中间字体图标。

```javascript
window.cnblogsConfig = {
  footer: {
    text: {
      iconFont: {
        icon:  "icon-xinlv",
        color: "red",
        fontSize: "16px"
      }
    },
  },
}
```

### aplayer - 音乐播放器

-   类型：`Object`
-   默认值：

```json5
{
    enable: false,
    options: {
        id: '3778678',
        server: 'netease',
        type: 'playlist',
        auto: 'netease',
        fixed: 'true',
        mini: 'true',
        autoplay: 'false',
        theme: '#2980b9',
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: '0.7',
        mutex: 'true',
        lrcType: '0',
        listFolded: 'true',
        listMaxHeight: '340px',
        storageName: 'cnblogsTheme',
    }
}
```

音乐播放器

* aplayer.options:

| option        | default                                                                   | description                                                                                                                  |
| ------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| id            | **require**                                                               | song id / playlist id / album id / search keyword                                                                            |
| server        | **require**                                                               | music platform: `netease`, `tencent`, `kugou`, `xiami`, `baidu`                                                              |
| type          | **require**                                                               | `song`, `playlist`, `album`, `search`, `artist`                                                                              |
| auto          | options                                                                   | music link, support: `netease`, `tencent`, `xiami`                                                                           |
| fixed         | `true`                                                                    | enable fixed mode                                                                                                            |
| mini          | `false`                                                                   | enable mini mode                                                                                                             |
| autoplay      | `false`                                                                   | audio autoplay                                                                                                               |
| theme         | `#2980b9`                                                                 | main color                                                                                                                   |
| loop          | `all`                                                                     | player loop play, values: 'all', 'one', 'none'                                                                               |
| order         | `random`                                                                  | player play order, values: 'list', 'random'                                                                                  |
| preload       | `auto`                                                                    | values: 'none', 'metadata', 'auto'                                                                                           |
| volume        | `0.7`                                                                     | default volume, notice that player will remember user setting, default volume will not work after user set volume themselves |
| mutex         | `true`                                                                    | prevent to play multiple player at the same time, pause other players when this player start play                            |
| lrcType       | `0`                                                                       | lyric type , Don't display lyrics when the value is 0                                                                        |
| listFolded    | `true`                                                                    | indicate whether list should folded at first                                                                                 |
| listMaxHeight | `340px`                                                                   | list max height                                                                                                              |
| storageName   | `cnblogsTheme`                                                            | localStorage key that store player setting                                                                                   |
| api           | `https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r` | When there is a problem with the API, you can use a different API instead                                                    |


```javascript
window.cnblogsConfig = {
    footer: {
        aplayer: {
            enable: false,
        },
    },
}
```

## links - 友情链接

### footer - 页脚友链

* 类型：`Array`
* 默认值：`[]`

页脚友链。

```javascript
window.cnblogsConfig = {
  links: {
    footer: [
        {text: "。思索", link: "https://www.wangyangyang.vip"},
    ],
  },
}
```

### page - 友链页

* 类型：`Array`
* 默认值：`[]`

友链页。需要在页面源码中添加 `<input id="linkListFlg" type="hidden" />`

```javascript
window.cnblogsConfig = {
  links: {
    page: [
      {
          title: '友情链接', // 标题
          icon: 'icon-lianjie', // iconfont
          style: 'color: #a78bfa;', // 标题颜色
          links: [
              {
                  name: '。思索', // 昵称
                  introduction: 'IT技术类博客', // 简介
                  avatar: 'https://pic.cnblogs.com/face/1334215/20180504110551.png', // 头像
                  url: 'https://cnblogs.com/wangyang0210' // 友链地址
              },
          ]
      },
    ],
  },
}
```

## umami - 网站统计

### umami - umami

* 类型：`Object`
* 默认值：`{}`

umami 需要配合进行调整才行。

```javascript
window.cnblogsConfig = {
  umami: {
     url: '',
     shareId: '',
  }
}
```

## rtMenu - 右下角菜单

### qrCode - 二维码

* 类型：`Url`
* 默认值：`""`

二维码图片 URL。

```javascript
window.cnblogsConfig = {
  rtMenu: {
    qrCode: 'https://x1.jpg',
  },
}
```
### reward - 赞赏

* 类型：`Object`
* 默认值：

```json5
{
  alipay: '', // 支付宝收款码
  wechatpay: '' // 微信收款码
}
```

赞赏。

```javascript
window.cnblogsConfig = {
  rtMenu: {
    reward: {
      alipay: 'https://x1.jpg',
      wechatpay: 'https://x2.jpg'
    },
  },
}
```

### downScrollDom - 跳至底部位置定义

* 类型：`String`
* 默认值：`""`

跳至底部位置定义，配置为 JQuery 选择器。

```javascript
window.cnblogsConfig = {
  rtMenu: {
    downScrollDom: '#blog_post_info_block',
  },
}
```

## switchDayNight - 日/夜间模式

* 类型：`Object`
* 默认值：

```json5
{
    enable: true,       // 是否开启日/夜间模式切换按钮
    nightMode: false,   // 强制夜间模式 （版本 >= v2.0.6）
    auto: {             // 自动切换相关配置
        enable: false,  // 开启自动切换
        dayHour: 5,     // 日间模式开始时间，整数型，24小时制
        nightHour: 19   // 夜间模式开始时间，整数型，24小时制
    }
}
```

日/夜间模式配置。页面使用日/夜间模式优先级：用户设置 > 自动切换 > 默认。

```javascript
window.cnblogsConfig = {
    switchDayNight: {
        enable: true,
        auto: {
            enable: true
        }
    },
}
```

## animate - 动效

::: danger 注意
1. 所有动效默认配置为关闭。
2. 动效会消耗 GPU，可能会导致页面卡顿，请大家按需谨慎选择开启！！！
:::

### homeBannerTitle - 主页banner上name的动效

* 类型：`Object`
* 默认值：

```json5
{
    enable: false // 是否开启动效
}
```

主页 banner 上 name 的动效（鼠标移入显示）

```javascript
window.cnblogsConfig = {
    animate: {
        homeBannerTitle: {
            enable: true
        },
    },
}
```

### homeBanner - 主页 Banner 动效

* 类型：`Object`
* 默认值：

```json5
{
    enable: false, // 是否开启动效
    options: {
        radius: 15,
        density: 0.2,
        color: 'rgba(255,255,255, .2)', // 颜色设置，“random” 为随机颜色
        clearOffset: 0.3
    }
}
```

主页 Banner 动效配置。

```javascript
window.cnblogsConfig = {
  animate: {
    homeBanner: {
      enable: true,
      options: {
        radius: 15,
      }
    },
  }
}
```

### articleTitle - 文章页标题动效

* 类型：`Object`
* 默认值：

```json5
{
    enable: true // 是否开启动效
}
```

文章页标题动效配置。

```javascript
window.cnblogsConfig = {
  animate: {
    articleTitle: {
      enable: true
    },
  }
}
```

### articleBanner - 文章页 Banner 动效

* 类型：`Object`
* 默认值：

```json5
{
    enable: false // 是否开启动效
}
```

文章页 Banner 动效配置。

```javascript
window.cnblogsConfig = {
  animate: {
    articleBanner: {
      enable: true
    },
  }
}
```

### background - 背景动效

* 类型：`Object`
* 默认值：

```json5
{
  enable: false,
  options: {
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
  }
}
```

背景动效。

```javascript
window.cnblogsConfig = {
  animate: {
    background: {
      enable: true,
    },
  }
}
```

### bannerImages - Banner 背景图自动切换

* 类型：```Object```
* 默认值：

```json5
{
  enable: false, // 是否开启
  options: {
    itemNum: 5, // 图片拆分成几列
    current: 0, // 初始图片的下标，如果为负数则为随机
    sort: 1, // 1 代表每次向下加载一个图片，-1 代表每次向上加载一个图片
    time: 30000 // 每次切换间隔时间，单位：毫秒
  }
}
```

Banner 背景图自动切换动效。

```javascript
window.cnblogsConfig = {
  animate: {
    bannerImages: {
      enable: true,
    },
  }
}
```

### background - 背景动效

* 类型：`Object`
* 默认值：

```json5
  ribbons: {},
  particles: {},
  season: {},
```
#### ribbons - 背景动效

* 类型：`Object`
* 默认值：
```json5
ribbons: {
    enable: false,
    options: {
        colorSaturation: '60%',
        colorBrightness: '50%',
        colorAlpha: 0.5,
        colorCycleSpeed: 5,
        verticalPosition: 'random',
        horizontalSpeed: 200,
        ribbonCount: 3,
        strokeSize: 0,
        parallaxAmount: -0.2,
        animateSections: true,
    },
},
```
彩带动效，随机变换颜色。

#### particles - 背景动效

* 类型：`Object`
* 默认值：
```json5
  particles: {
      enable: false,
      options: {},
  }
```
粒子动效，对阅读影响小，适合阅读场景。

#### season - 花瓣飘落动效

::: tip 提示
img 建议使用 base64 转码后的图片，素材建议透明背景素材
:::

-   类型：`Object`
-   默认值：

```json5
{
    "enable": false,
    "options": {
      // 默认为一个花瓣图片
      "img": "data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURQAAAO20w/bT2O4wY/Gvw//t4/PL1fPL1e7a3vHk5fCgufPT3/HL0PWlv/Pw7u7r4fPW3fOkvO+ku+qtvfaauvHr5O/p3/TAz/LO1fPJyfLZ2/TJ1fTE0PamwPCxw/RGfO5qiu0gVfDq4+/r3vDr5PDm4fDs5vaOsfTF0PS2yPC3x/aivfOMsefIzfKUse7r4u/p4vHk4fPZzPS0x/K4yvW1yPG4x/aYuvSnvu5ejPmKrPZ3ovaJqvOJsORAY9yvtPHb3u3YqvTX2uzarfTEz/Wuw/aivPNunfSGoeZDaeZqgPDf3/XZ3vnH1/XW3fm/0Pq80PHc3u7l1PTT2fTL1PTQ2PXQ2/rB1PnD1fTb3/Pg4ffB0/XK1/jM2fnF1vq4zvuyy/iqx+/n2fDn3PPg4PPX3PXO2fXN2PbG1fPe3/Pi4/bT2/e70vbM1vbJ1PjD0vjP2/u1zfLo3/TV2/XT3Pezy/XE1Pe4z/iyyPnJ2u3p4fW2zPi8zvnB0fu6zvWsxfutxvqlvvXV2/bS2fbP2PjH0/jE1Paqw/jK2PutyfDi3+zq3vPk4/S2yfaxyveiwfemw/q/0vuwyf2ivfLi4e/l4PW90ve+0PbC0feuyPmnxfq1yvu50PqqwvunwvjE2PuqxvHf3/Pn5fPE0fO6zPbH2PbC1fbF0/fV3vi50PqyyPjS3vq80/yjwvyuy/Hp3fPa3e3izvPN1vi0z/WxyPiev/Pr5ve+0/S9zvi+zfqvxvqlw/uRtfyWtfDf3PLr4fbd4fm/0/i5zPebuvybufWHqfHj3fTAzvTH1PW6z/anwfm20PqevPyHr/Lm4fixzft+qezo2+7p3/HZ3PmhvfjZ4veXtf6oxvDs4e7l3PWkvvqYvPeRsfx2pPyEq/aApfRvmfe2zPeuw/uLs/mYuPZ4n/XL2PyewPeNrPnL3fyLruzgxvJSh/Vmk/Ncj/nQ4fpvnvxdje7fvvafuu85be/kx/xQifs3ePogY/5lmPh7pe3Xoe/esL43SeAAKvcAQnmz4P0AAABMdFJOUwCQCv4kA0pZIxlsCBK2Zsk+hUd/0libwo+AOWmco1P4jf1HevPc4dbmlmrBYTSjqOmOoeL+qtXp8N/o07LG9WK9s9nR08/H85bkuvhtB3TeAAALMElEQVR42u2YeVRadxbH0yTNnmZtmzRN07TNpPs26TZtp7NvRwSDIAoCRkU0AiIiGFBRUdAoIBoWjYipgnsMalFRE1yRaN2IrbvGJXuabbrNeh8m/03aJDU9Z855Hx/+e7/33u+9v997S5agoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg3Bdrn3p50871r/zplfXr33lp+46VG1ct/RmjL12581cTExfHGmdbW1tnZ4eGhsbGbr7/x3e279i4+mcIv2LnexM9jd0qlUwvPBsfL5PJ4hX6eOfIzdah1hHnL598evuKVY8+tOirt+ztm+l2KWuVKqVSpeeLauJrauJloCO+ZkHMWdmIrAZk7FjxEKqx8aX28ZnanABlbavLqWxtVSqVTqdSGR8PKkRdXSKEDFFhXWFGRk1Gxr4nt61ctai1X9/X11ibE6+C+COqWqdsxOmM14tEEFyUAfln1IgKRYUQel9h4b7Cus7OuozCzj9s27hI4Vdu/b6nVqkMCAhQKWV6UCGLd8pkTlmGrg7yhfjxSBOQ4BlI8M5PERwOh7fjyZWLYIkdW/v6apHYqgCVKieAr9DrFQqFiK8QKaDsXV11gKZOtA9S73SDRPf29oafxdv7xW1P/cTs9473jaoCclSQv57P1+v5LSKIzxeJBJquLo1GEx0d7YiOXgjpcCzk/qnDgidYIDw+OJiA/83jP6H3e8dnurtrA/S9vdXV1QJreLWgJBwQCbRaLVkLEshFzPl5CmV+3hLCsFgIhIWfxdsCsfGDwYNu9jz2YLtq1UfjM6OuipwcW46i1y2hpCTcGg4/q5VMNjGZJquGrIuOZjoo8DCIFguRSMDzeHiAgMcPDnoBg14FBc3Nbz72APE3XRsfrR1F0g8IqD59urq6tzociS/gC0oEXWSyxqoxFc0XReuimdGddXU6s+PT6PkoPKKAB6mDgMECwKu5OS2t+ciGx+7Tj898+N3M6GhOb29JdW+JNd8UU5Sfn1+Ub7JaERXhVo1AgBiACU/RPCVap3P7DwqBD64KDuYFV93OHvJPS0s7cuTIoV/cj4TXPro+3jNaC6PXexopgKA63GTSdFkFCkG4Kb+oyCoQIA7UaLQarU4HyTsoIRQA/Eex4PGIAqQDg4PNBWlptwUcAgn32vzXv/66Z7aiuzsnx1idqj+tztEL7Ha71WoKVyAjoFDoFZoiikmjMcEQQPbaaJgAB3iRwCDA/FnAAaAAsUBzM9KBYaAfFBzacC8TsXTTrq/7emYaz1XUdncrbTZbgF6tByeUW8OtZLtVOy3i80VaCGwik81MiFpU5HCw50NCQiyWEGKUZxSDAOB57ga4BUD+dxQc2vP8jxwUq9fs+vab8Qnof+OozWVT2SRqW06AyqbK4QsUQj5/ukXLZBbB8BGjohgMJtNdeAcSmQhPSBQxKpjH8/SsAiOAAq+C2w04MtDffxgACS+89QMSVj+77Ntvro9fu3axcXa2cbZNIrEpXZIGQx4XByOYYo0rKRFzUmAKTf5yfzmxmHjwIMN/nsKmsCiMEAaDERUV5cmL4nkGV4VW+YaGIh5EFAwPHxkYOOxWgPDCurs4b81fdv/nm+vX+vouNjU1GfLyElwug6tp1mVISHAlOPP0/BIfKjlfToU+wDQKtGTYBmRTPtMMDmQQGUSkBkm8KDwP0g+GIhQEZRekQQ86oAEDCIf73Rx+4n8L+ORf//72+nfXxycuTkxM9DQ1uRISEiB2Xl5paWnDWfjL0wthFyumxXYymcOBLYQlk7Vaq44ZbTYz5935QwU8eTwPwLfKK9QvOyitI62jI3A4ECQc7j8wfODA/v39/SfuckCs2/LrZdd7evraGuHaNYGUoSmrrbu7LSHBKCnFZeJocdNCvRBhukWs1YrF2hTKvJTFpjDNTDNooEATGERwgIcH0gAvr6DsoKA0ENAxfDxwoH+4Hwm//8T+/ZfevusA/m33re8rsrKyjIaKhDYgK6tptnEG3NCdJyktbcHSSnBaLBwE4pYWsVjcgtWZ2clmB5tCYcwzpGAEBsG9jYOrqryQCvhlZ6d1IB6MjDweGIjEP4Hw99/e3Yaf/HX31YsVWd0GSV5WXkNuQ6kkwWBATOBy5TUIG0pzhbm5EFrMidXqzGQOmcNkJnuzzUwmi8LypsACSESWsQco8PWtQgRkpx/7PDIyMDJwQQAouHTpn7//oTXw7LJlU03n2mYTsgwNuXE4XC43jsulq8EHDXl5ErCCEDRMt7TEcuBENHNgENlQBSYUwsH2JiTBCkDWUFVVaFBQaEG2X3b658BCfLeAS5du/GP7D66C5c/++taVxi+gE3kSNWig4XC4zKO0uLhMGuRfKsSKW+LEsdj6emgDth6rrReL6+s7dclsNsvCkroFgAJ8sJcXDGJoQVp22ueRx90tWCjAjRs3fux4Rqpwpa3yi4oKg0StltBzS0EE1SeTCkak4bAcDicWIyfHYrHYeogNQuBfPUeng8sI22JxlwCORE9EAmyC7OyOQDd3BJx4/h5uQh/svjWX9UWFITVVwuWqc2k0blxmLBaHzcykkmJJpFisnUS2p6RgtebkZDMHZoANTmDDvQipwe02wGkQGgQCkDGA+t/2wKUTG+7lQHp0ywfLds2dqzRUVBiNEjoXF0eLw9FwcTgsDmen2n04KSkYOSYFm8JOTmazks1sFitJCgZISsIn4d0Eu+8D6eCBDpgBN24FB/asu7cz8dFNl29dvtaINOKcQZ2amqqmc2l0NZ3GpYGSWB8SJsWuhUHUcpDuwzpgSaUsKT4xEerPC3YfhqGwC9MRCZGRkScRFVCHgQ1r7/1O9vrVXZevNNIrKmw2I9TBaDNAOVKN4As6jUbnHgVn5E6LsWJsbCwnFlwg9UySSgmJoMEDKgCDUFDgFxaWDnMQeRIYGDh+/G5r+C489fqfLyNV4NpSuWrwAhSACwWI48bRjA0tR0lyKo1rx+HENFhQ9hSxOKKY5WAlJRHwIQRPjypkCIKCwtI7Oj47efJLN288d783w3Wvfnj16pWJyqOVqUYDnatWwxjYMzNxEjpYIOLMmQgfez6VbCfJIyLKInTJZ8ADiZ6eBEuir29oWFBokF8Y5P8Zwpdfbnj+wd7XXv34yuWrfcZy4zlbamUq9zQUoZzb4EPFYMoiqBg7DcaBjJHL/f2L/XXFnomevqcSCXg4DmAT+6WnHzu2EP7NJ5578PeDzR9PXZ1qp/tUGsGL9FQjvbycDkqOcmE8aHZMTAzkH+HvL43QSQ8meRRLichp6BvqF3bMTfqxF954fO1Pe0N6de/3V6bGhPkXYspP0yvpRzNxdNBipPtgqCQq1U7F+MvlGLl/Musgi3gwCY5DD7f7wvxO+YbueeLxxXhfX7O1fWpuckx44UI+qbw804fkA5F9fEjwn2MnYZDw/lCHCGIxkv6pMD+PRIKUlfS7t55btG8Wa7YOTU5NTbbyY766EJOfj8HIYzBQfgCiR0QgbSg7CAJOnfKImmfVt8Qme7+9WG/od95W1teChrl2F9fnqzNfXYC+yzH+JHtMPgkTAwUoKys7Uzxv5kzDgSlsqffetmrJorN8zc73xibn5trHWoUkqMSFmBgMCeoAT1kZsUh81glXyYSzGZ0vPr3yYX22Wrp509ax9jkwxPkhl1MG17NpQQukLHPdHBoaSjgrzCh88ekVa5c8VJaveaV16Pzk5GS7m/Pn4Tk/NjQC0TPefelhR7+jYf37I8DNm62tN0ecTpmsJmPfu488s/xn/Gy5bvnyzZs3P/PylkfcbHn5NfRDMgoKCgoKCgoKCgoKCgoKCsr/J/8FN0txXt+1Wj8AAAAASUVORK5CYII=",
      "size": 40
    }
}
```

### mouse - 跟随鼠标动效

* 类型：`Object`
* 默认值：

```json5
{
  cursor: {},
  bubble: {},
  mouse: {},
  mo: { },
  click: {},
}
```

#### cursor - 鼠标指针样式
* 类型：`Object`
* 默认值：
```json5
{
  cursor: {
    enable: false,
    options: {
        url: 'https://files.cnblogs.com/files/wangyang0210/normal.gif?t=1681261712',
    },
  },
}

#### bubble - 气泡动效

* 类型：`Object`
* 默认值：

```json5
{
  bubble: {
      enable: false,
      options: {
          live: 30,
          colors: ['149, 197, 252', '224, 199, 252'],
          quantity: 15,
          size: 5,
      },
  },
}
```

#### mouse - 跟随鼠标动效

* 类型：`Object`
* 默认值：
```json5
 mouse: {
    enable: false,
    options: {
        size: 8,
        sizeF: 36,
    },
},
```

#### mo - 鼠标移动动效

* 类型：`Object`
* 默认值：
```json5
 mo: {
    enable: false,
    options: {
        radius: { '0': 100 },
        count: 5,
        children: {
            shape: 'polygon',
            fill: { cyan: 'yellow' },
            radius: 20,
            rotate: { '360': 0 },
            duration: 2000,
        },
    },
},
```
基于mo.js可自定义动画效果。

#### click - 点击动效

* 类型：`Object`
* 默认值：

```json5
click: {
    enable: false,
    options: {},
}
```

### avatar - 头像旋转动效

-   类型：`Object`
-   默认值：

```json5
{
  enable: false // 是否开启
}
```

```javascript
window.cnblogsConfig = {
    animate: {
        avatar: {
            enable: false
        },
    },
}
```

<!-- TODO 待调整 -->


## articleDirectory - 文章目录

### position - 文章目录定位

* 类型：`String`
* 默认值：`"right"`

用于设置文章目录显示在文章的左侧还是右侧，配置项：`right`、`left`

```javascript
window.cnblogsConfig = {
    articleDirectory: {
        position: 'right',
    },
}
```

### minBodyWeight - 文章目录隐藏宽度

* 类型：`Number`
* 默认值：`900`

文章目录在屏幕宽度到多少像素及以内时开始隐藏；例如：配置成 1000，当屏幕宽度 <= 1000 时，隐藏目录（可通过右下角按钮显示）

```javascript
window.cnblogsConfig = {
    articleDirectory: {
        minBodyWeight: 1400,
    },
}
```

### autoWidthScroll - 文章目录横向滚动条

* 类型：`Boolean`
* 默认值：`false`

文章目录中标题过长时候是否显示横向滚动条。

```javascript
window.cnblogsConfig = {
    articleDirectory: {
        autoWidthScroll: true,
    },
}
```

### number - 文章目录标题编号

* 类型：`Boolean`
* 默认值：`false`

文章目录中标题是否显示编号。

```javascript
window.cnblogsConfig = {
    articleDirectory: {
         number: false,
    },
}
```

## articleContent - 文章内容

### commentBackground - 文章评论背景

* 类型：`Object`
* 默认值：

```json5
    {
      enable: false,
      options: {
        day: 'rgba(0, 0, 0, 0) url("https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_230301073716_comment_bg_day.png") no-repeat scroll 100% 31% / 35% padding-box border-box',
        night: 'rgba(0, 0, 0, 0) url("https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_230301073520_comment_bg_dark.png") no-repeat scroll 100% 31% / 35% padding-box border-box',
      },
    }
```

文章评论背景

```javascript
window.cnblogsConfig = {
    articleContent: {
        commentBackground: {
            enable: false,
        },
    },
}
```

### typing - 评论框打字动效

-   类型：`Object`
-   默认值：

```json5
{
    enable: false, // 是否开启
    options: {
        colorful: true,  // 是否多彩
        shake: false, // 是否震动
    }
}
```

```javascript
window.cnblogsConfig = {
    articleContent: {
        commentTyping: {
            enable: false
        },
    },
}
```

### prefixIcon - 文章标题前图标

* 类型：`Object`
* 默认值：

```json5
{
    enable: false,
    options: {
        // iconfont 地址
        link: "https://at.alicdn.com/t/c/font_3628204_t6n3fw8b1zn.js",
        // 用于展示的iconfont名称
        iconfontArr: [
            'hebaodan','bingtanghulu','kesong','qianceng','fengmi','feiyuguantou','shengjian','youtiao','yuzijiang','zhutongfan','doujiang','sanmingzhi',
            'paofu','shanbei','dangaojuan','futejia','huangyou','xiangchang','banji','danta','qingning','lajiao','shizi','mojituo','pijiu','putaojiu',
            'kouxiangtang','xiangcaobingqilin','jiaozi','tilamisu','huoguo','hongshu','bingkuai','mianhuatang','paobing','meishikafei','mantou','qishui',
            'ganlan','jiroujuan','guodong','baozi','pingguo','chengzi','qingjiao','jidan','xihongshi','mangguo','baocai','niunai','mianbao','huluobu','zhangyu',
            'pangxie','longxia','yangcong','rou','jitui','huage','xianyu','mogu','qiezi','xilanhua','ningmeng','liulian','banli','sanwenyu','tudou','xigua','nangua',
            'huolongguo','fantuan','zhusun','shuiluobu','shanzhu','lanmei','shiliu','yezi','tiangua','mihoutao','boluo','kaixinguo','hetao','xiaweiyiguo','huasheng',
            'bigenguo','kuihuazi','songzi','xiguazi','badanmu','yaoguo','danhuangsu','dangao','binggan','buding','tangguo','qiaokeli','hongzao','candou','putaogan',
            'manyuemei','taozi','xiangjiao','caomei','niuyouguo','hamigua','chelizi','li','bale','kafei1','shutiao','zhenzhunaicha','xuegao','nailao','kele','tiantong',
            'hanbao','xiezishousi','baomihua','regou','makalong','tianfuluo','juzi','baixiangguo','putao','shaomai','yumi','pipa','yangtao','youzi','lianwu','wuhuaguo',
            'paomian','wandou','huanggua','suantou','tiantianquan','shupian','huafubing','bangbangtang','shousi','lizhi','doufu','mocha','boluomi','zhouzi','bingsha',
            'suannai','pisa','haixing','haizhe','tongluoshao','nuomici','kuangquanshui','roujiamo','cha','zhangyuxiaowanzi','chengzhi','yuancaitou','baicai'
        ],
    }
}
```

标题前的图标，便于区分内容和标题

```javascript
window.cnblogsConfig = {
    articleContent: {
        prefixIcon: {
            enable: false,
            options: {
                link: '',
                iconfontArr: [],
            }
        }
    },
}
```


### diggit - 点赞效果

* 类型：`Boolean`
* 默认值：

```json5
{
    diggit: false,
}
```

文章点赞效果

```javascript
window.cnblogsConfig = {
    articleContent: {
         diggit: false,
    },
}
```

### link - 文章内部链接尾部icon

* 类型：`Boolean`
* 默认值：

```json5
{
    link: false,
}
```

文章链接尾部增加分享icon

```javascript
window.cnblogsConfig = {
    articleContent: {
         link: false,
    },
}
```

### roughNotation - 文章注释效果

* 类型：`Object`
* 默认值：

```json5
{
    enable: false,
    options: {
        underline: { type: 'underline', color: 'blue' },
        circle: { type: 'circle', color: 'red' },
        box: { type: 'box', color: 'orange' },
        highlight: { type: 'highlight', color: 'yellow', iterations: 1, multiline: true },
        bracket: {
            type: 'bracket',
            color: 'red',
            padding: [2, 10],
            brackets: ['left', 'right'],
            strokeWidth: 3,
        },
        strikeThrough: { type: 'strike-through', color: 'red' },
        crossedOff: { type: 'crossed-off', color: 'red' },
    },
}
```

文章注释效果，具体效果可参考[roughnotation](https://roughnotation.com/)

```javascript
window.cnblogsConfig = {
    articleContent: {
        roughNotation: {
            enable: false,
            options: {
                underline: { type: 'underline', color: 'blue' },
                circle: { type: 'circle', color: 'red' },
                box: { type: 'box', color: 'orange' },
                highlight: { type: 'highlight', color: 'yellow', iterations: 1, multiline: true },
                bracket: {
                    type: 'bracket',
                    color: 'red',
                    padding: [2, 10],
                    brackets: ['left', 'right'],
                    strokeWidth: 3,
                },
                strikeThrough: { type: 'strike-through', color: 'red' },
                crossedOff: { type: 'crossed-off', color: 'red' },
            },
        }
    },
}
```


## articleSuffix - 文章后缀

### imgUrl - 左侧图片

* 类型：`Url`
* 默认值：`""`

文章后缀左侧图片，不配置使用用户头像配置 `info.avatar`，用户头像没配置使用主题默认头像。

```javascript
window.cnblogsConfig = {
  articleSuffix: {
    imgUrl: 'https://x1.jpg',
  },
}
```

### aboutHtml - 关于博主

* 类型：`String`
* 默认值：`""`

关于博主，支持 HTML 代码，不配置使用默认。

```javascript
window.cnblogsConfig = {
    articleSuffix: {
        aboutHtml: "I am a good person",
    },
}
```

### copyrightHtml - 版权声明

* 类型：`String`
* 默认值：`""`

版权声明，支持 HTML 代码，不配置使用默认。

```javascript
window.cnblogsConfig = {
    articleSuffix: {
        copyrightHtml: "版权...",
    },
}
```

### supportHtml - 声援博主

* 类型：`String`
* 默认值：`""`

声援博主，支持 HTML 代码，不配置使用默认。

```javascript
window.cnblogsConfig = {
    articleSuffix: {
        supportHtml: "声援...",
    },
}
```

### copyInfo - 文章复制携带版权信息

* 类型：`Object`
* 默认值：

```json5
{
    enable: false, // 是否开启
    length: 100, // 当文章页面上选中多少文字后开始生效
    copyright: '', //  复制携带版权信息，默认为 copyrightHtml
}
```

文章页上，鼠标选中文字进行复制携带版权信息。

```javascript
window.cnblogsConfig = {
    articleSuffix: {
        copyInfo: {
            enable: true,
            length: 100,
            copyright: '',
        }
    }
}
```

## memorialDays - 国家公祭日和自定义缅怀的日期

* 类型：`Array`
* 默认值：`[]`

国家公祭日和自定义缅怀的日期，日期配置为带有前导零的月日，格式 MM-DD

```javascript
window.cnblogsConfig = {
    memorialDays: [
        '07-04',
        '12-13'
    ],
}
```

## consoleList - 控制台输出

* 类型：`Array`
* 默认值：`[]`

控制台输出。

```javascript
window.cnblogsConfig = {
  consoleList: [
    {text:'wangyang0210 CNBlogs' , link:'https://www.cnblogs.com/wangyang0210' },
  ],
}
```