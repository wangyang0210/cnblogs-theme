# 字体图标库

本主题使用的图标库为阿里巴巴矢量图标库 [iconfont](https://www.iconfont.cn/)。

## 拓展图标
大家可以在 iconfont 生成自己的图标库，生成方法参考[官方教程](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.13&helptype=about) 。
<br>获取样式地址后按照下面示例方式添加到配置中.

!> 扩展图表只适用于在配置文件中配置的icon图标,如侧边栏`navList`

```javascript
window.cnblogsConfig = {
    fontIconExtend: "//at.alicdn.com/t/font_xxxxxxxxx.css",
}
```

## 内置图标

> 内置图标分为基本图标和文章图标， 两则加载的文件和位置均不同；

### 基本图标

?> 用于主题基本图标的配置，默认以CSS方式进行加载，主题初始化时就会加载；

<iframe  
height=850
width=90%
src="https://docs.wangyangyang.vip/iconfont/base/demo_index.html"  
frameborder=0  
allowfullscreen>
</iframe>

### 文章图标

?> 用于文章标题前的修饰，默认以JS方式进行加载，只会在文章页进行加载；

<iframe  
height=850
width=90%
src="https://docs.wangyangyang.vip/iconfont/posts/demo_index.html"  
frameborder=0  
allowfullscreen>
</iframe>

