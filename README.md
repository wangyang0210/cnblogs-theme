# Cnblogs-Theme


`原作者的github地址` | https://github.com/BNDong/Cnblogs-Theme-SimpleMemory

本主题以阅读为核心，尽可能的美化博客园的显示效果，提高用户体验。
基于博皮“SimpleMemor”进行的修改，使用插件较多，所以文件较多。[页面效果](https://www.cnblogs.com/wangyang0210)
支持响应，尺寸分别为：(1200px,∞px)，(960px,1200px]，(720px,960px]，(0px,720px]
# 目录结构
```
├─ css
│  ├─ base.css - 页面定制CSS代码未压缩版本（字符超限）
│  ├─ base.min.css - 页面定制CSS代码压缩版本（使用此版本，禁用默认）
│  ├─ marvin.nav2.css - 文章目录样式文件
│  ├─ menu_bubble.css - 侧边栏样式文件
│  └─ ...
├─ html
│  ├─ pageFooter.html - 页脚HTML
│  ├─ pageHeading.html - 页首HTML
│  └─ sidebar.html - 侧边栏HTML（请开启JS权限）
├─ js
│  ├─ articleStatement.js - 文章后缀JS
│  ├─ baguetteBox.min.js - 图片灯箱JS
│  ├─ base.js - 基础JS
│  ├─ config.js - 加载配置
│  ├─ marvin.nav2.js - 文章目录JS
│  └─ ...
└─ README.md
```
# 使用说明
## 设置
进入管理后台设置界面依次设置
1. 博客皮肤 ---> SimpleMemory
2. 页面定制CSS代码 ---> /css/base.min.css(禁用模板默认CSS)
3. 博客侧边栏公告 ---> /html/sidebar.html(需要开启JS权限)
4. 页首Html代码 ---> /html/pageHeading.html
5. 页脚Html代码 ---> /html/pageFooter.html
>本主题需要JS权限，没有的请先申请权限，然后再进行设置。初始配置在侧边栏Html代码中，请仔细配置，不理解的不要乱修改，直接默认就行。
>/css/base.min.css 的修改参考 /css/base.css，请使用压缩版本，直接使用 /css/base.css 会字符超限！
## 转载文章和文章后缀
文章后缀显示的内容可以在相关配置项进行配置。如果需要其它修改，可以修改 ``/js/articleStatement.js`` 文件。
<br>关于转载文章在HTML源码中加入如下代码来指定文章作者和来源：
```html
<input id="articleAuthor" type="hidden" value="作者" />
<input id="articleSource" type="hidden" value="来源URL" />
```
## 代码高亮
本主题整合了两个代码高亮插件分别是：
* [code-prettify](https://github.com/google/code-prettify) 
* [highlightjs](https://highlightjs.org/) 
>大家添加代码，按博客园默认的方式添加就行，不用做任何调整！
>使用第三方代码高亮插件，对页面加载速度有一定影响，大家自己权衡！
### 高亮主题的配置
#### 配置代码高亮插件
代码高亮主题的类型配置：```essayCodeHighlightingType```

|value        |description|
|:------------|:----------|
|cnblogs      |使用博客园样式，介意加载速度的可以使用此配置。|
|highlightjs  |使用 **highlightjs** 对代码进行渲染。|
|prettify     |使用 **code-prettify** 对代码进行渲染。|
#### 配置代码高亮主题
配置代码高亮主题的配置为：```essayCodeHighlighting```
* essayCodeHighlightingType: 'cnblogs'
```
essayCodeHighlighting 可配置范围：
任意，此配置不会对渲染产生影响。
```
* essayCodeHighlightingType: 'highlightjs'
<br>支持官方所有主题，样式参考：[GoTo](https://highlightjs.org/static/demo/)
```
essayCodeHighlighting 可配置范围：
default、a11y-dark、a11y-light、agate、an-old-hope、androidstudio、arduino-light、arta、ascetic
、atelier-cave-dark、atelier-cave-light、atelier-dune-dark、atelier-dune-light、atelier-estuary-dark
、atelier-estuary-light、atelier-forest-dark、atelier-forest-light、atelier-heath-dark
、atelier-heath-light、atelier-lakeside-dark、atelier-lakeside-light、atelier-plateau-dark、atelier-plateau-light
、atelier-savanna-dark、atelier-savanna-light、atelier-seaside-dark、atelier-seaside-light
、atelier-sulphurpool-dark、atelier-sulphurpool-light、atom-one-dark-reasonable、atom-one-dark、atom-one-light
、brown-paper、codepen-embed、color-brewer、darcula、dark、darkula、docco、dracula、far
、foundation、github-gist、github、gml、googlecode、grayscale、gruvbox-dark、gruvbox-light、hopscotch
、hybrid、idea、ir-black、isbl-editor-dark、isbl-editor-light、kimbie.dark、kimbie.light、lightfair
、magula、mono-blue、monokai-sublime、monokai、nord、obsidian、ocean、paraiso-dark、paraiso-light、pojoaque
、purebasic、qtcreator_dark、qtcreator_light、railscasts、rainbow、routeros、school-book、shades-of-purple
、solarized-dark、solarized-light、sunburst、tomorrow-night-blue、tomorrow-night-bright
、tomorrow-night-eighties、tomorrow-night、tomorrow、vs、vs2015、xcode、xt256、zenburn
```
* essayCodeHighlightingType: 'prettify'
<br>支持官方所有主题，样式参考：[GoTo](https://rawgit.com/google/code-prettify/master/styles/index.html)
```
essayCodeHighlighting 可配置范围：
prettify、desert、sunburst、obsidian、doxy
```
## 网站统计
本主题整合 CNZZ 网站统计，并对样式进行了优化。如果需要本功能，请首先去 CNZZ 配置网站的统计，然后修改下面的代码，添加至页脚Html代码中。
```html
<div id="cnzzProtocol"  style="display: none;">
    <span class="id_cnzz_stat_icon" id='cnzz_stat_icon_你的统计ID'></span>
    <script src='https://s19.cnzz.com/z_stat.php?id=你的统计ID&online=1&show=line' type='text/javascript'></script>
</div>
```
## 播放器
播放器的设置，可以参考作者的 [GitHub](https://github.com/metowolf/MetingJS)
## Loading
Loading的设置，可以参考作者的 [GitHub](https://github.com/claudiocalautti/spring-loaders)

## 字体图标库及其拓展方法
本博客使用的图标库为阿里巴巴矢量图标库 iconfont。

### 拓展方法
大家可以在 iconfont 生成自己的图标库，生成方法参考[官方教程](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.13&helptype=about)。
<br>获取样式地址后添加到加载配置文件中：``/js/config.js``

> 为了兼容，请不要删除原有的图标库，除非你能替换掉所有的图标样式引用。

```
    ...
        base: {
            deps: [
                'tools',
                'css!https://at.alicdn.com/t/font_543384_ezv3l7gd9r7.css', // 阿里云字体图标
                // 添加至此位置，.css文件 url 前须添加 css!
            ]
        }
    ...
```

# 常见问题
## 菜单数据不显示
这个是大家遇到最多的问题，请以下面的方式进行处理。
### Solution:开启对应显示设置
『博客设置』--->『选项』--->『控件显示设置』--->『SAVE』
>由于博客园有缓存机制，设置后稍等几分钟才会生效。
### Solution:设置对应数据
如果没有相应的数据，即使设置了显示，博客园也不会返回对应的栏目的数据，这样也会造成不显示的问题。
* 随笔分类：『博客设置』--->『随笔』--->『分类』
* 推荐排行：如果没有推荐，此类别不会显示，解决办法只能是别人给你点个推荐。

