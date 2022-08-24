# 网站统计

本主题整合 CNZZ 网站统计(该统计目前已收费)，并对样式进行了优化。如果需要本功能，请首先去 CNZZ 配置网站的统计，然后将网站ID添加到配置中。

## 如何配置 CNZZ

CNZZ 网址：[U-Web](https://web.umeng.com/)

注册/登录你的账户，立即使用并开始配置站点。

### 添加站点

![statistical_01](../../Images/statistical_01.png)

### 获取统计 ID

![statistical_02](../../Images/statistical_03.png)

### 站点设置

开启详细数据。

![statistical_02](../../Images/statistical_02.png)

### 主题配置

```javascript
window.cnblogsConfig = {
    cnzz: "123456",
}
```

## 搭建自己的网站流量分析统计工具
[网站统计——利用开源的网站流量分析统计工具](https://www.cnblogs.com/wangyang0210/p/16504237.html)

### 主题配置
```js
window.cnblogsConfig = {
    umami: {
        url: 'https://xxxxx/',
        shareId: 'xxxx'
    }
}
```

![statistical_02](../../Images/umami.gif)



