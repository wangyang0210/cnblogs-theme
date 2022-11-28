# 版本切换

> 注意：任何版本的切换，最好都更新一下对应版本的css样式，不然可能会发生兼容性问题！

## v2.\*.* 之间切换版本

### 使用 jsdelivr 加载资源

只需要更改 simple-memory.js 文件引入的版本。

例如：

```html
<script src="https://cdn.jsdelivr.net/gh/cnblogs-theme@v2.0.0/dist/simple-memory.js" defer></script>
```

变为

```html
<script src="https://cdn.jsdelivr.net/gh/cnblogs-theme@v2.0.1/dist/simple-memory.js" defer></script>
```

版本变更： `v2.0.0` >>> `v2.0.1` 

### 使用自己的云资源

如果你的资源是托管到自己的云资源上。

#### 随机参方式更新加载资源

> 减少浏览器缓存造成的不生效或生效慢问题 | 推荐这种方式来更新加载资源。

例如：

```html
<script src="https://www.wangyangyang.vip/dist/simple-memory.js" defer></script>
```

变为

```html
<script src="https://www.wangyangyang.vip/dist/simple-memory.js?_12322" defer></script>
```
