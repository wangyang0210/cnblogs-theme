# 网站统计

## 搭建自己的网站流量分析统计工具

?>如果你不想搭建，又想体验统计功能，那可以使用我搭建的 umami 平台 <br /> [传送门](https://umami.oyo.cool/)

[网站统计——利用开源的网站流量分析统计工具](https://www.cnblogs.com/wangyang0210/p/16504237.html)

!> 如果不需要集成到博皮，推荐直接使用 docker 安装，启动后按着官方文档去添加网址，获取到统计地址放入`页首HTML代码`即可；

## 主题配置

?> 这一块可能会存在两种情况即集成博皮和不集成博皮；

### 基础配置

> 无论是否集成博皮都需要接入统计代码

#### 添加站点

!> 如果你想集成到博皮，在博皮上进行数据的展示，这里请务必勾选“启用共享链接”。

![添加站点](https://cdn.jsdelivr.net/gh/wangyang0210/pic/imgs/project/cnblogs/1.gif)

#### 添加统计代码

![接入统计代码](https://cdn.jsdelivr.net/gh/wangyang0210/pic/imgs/project/cnblogs/2.gif)

#### 验证是否成功

![验证](https://cdn.jsdelivr.net/gh/wangyang0210/pic/imgs/project/cnblogs/20230414193030.png)

!> 到这里，不集成到博皮的配置就完成了，你可以愉快的去玩耍了，如果你还想集成到博皮里那就继续往下跟着操作吧~ <br /> 因为具体的操作都差不多，这里直接拿已有的图做演示吧；

#### 获取共享 ID

![共享ID](https://cdn.jsdelivr.net/gh/wangyang0210/pic/imgs/project/easybe/5.gif)

#### 博皮配置

```js
window.cnblogsConfig = {
    umami: {
        url: 'https://umami.wangyangyang.vip',
        shareId: '0uuvzPh5',
    },
}
```

![博皮配置](https://cdn.jsdelivr.net/gh/wangyang0210/pic/imgs/project/easybe/6.gif)

#### 集成效果

| 字段      | 解释                             |
| --------- | -------------------------------- |
| Online    | 当前在线人数                     |
| Today     | 今天的数据 pv/uv/平均访问时长(s) |
| Yesterday | 昨天的数据 pv/uv/平均访问时长(s) |

![效果展示](https://cdn.jsdelivr.net/gh/wangyang0210/pic/imgs/project/easybe/20230414185822.png)
