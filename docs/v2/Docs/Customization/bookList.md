# 书单/影单

> 考虑到兼容直接在现有的 books 字段中增加影单相应的字段

样式参考：[https://www.cnblogs.com/wangyang0210/p/16535755.html](https://www.cnblogs.com/wangyang0210/p/16535755.html)

## 配置方式

### 标识页面为书单/影单页面

首先需要在页面源码中加入以下代码，来标识该页面为书单页面：

```html
<input
    id="bookListFlg"
    type="hidden" />
```

!> 注意：是添加到 Html 源码中，博客园文章的富文本编辑器和 Markdown 都有添加 Html 代码的方式！

#### 富文本编辑器

![edit_book](https://cdn.jsdelivr.net/gh/wangyang0210/pic/imgs/project/cnblogs/reprinted_01.png)

#### Markdown

> 直接拷贝上面的内容到文本框即可。

![markdown_book](https://cdn.jsdelivr.net/gh/wangyang0210/pic/imgs/project/cnblogs/markdown-book.png)

### 配置书单数据

书单的配置，可以参考其他[配置](https://wangyang0210.github.io/cnblogs-theme/v2/#/Docs/Customization/bookList) 的方式。例如：

```javascript
window.cnblogsConfig = {
    bookList: [],
}
```

但是一般书单的数据比较多，所以建议将此配置单独出来。例如：

```javascript
window.cnblogsConfig.bookList = [
    {
        title: '在读',
        books: [
            {
                cover: 'https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/l/public/s29934992.jpg',
                name: '后物欲时代的来临',
                formerName: '',
                author: '郑也夫',
                translator: '',
                press: '中信出版社',
                year: '2016-8',
                score: 2,
                readDate: '21.02.05',
                readPercentage: '100%',
            },
        ],
    },
    {
        title: '已读',
        books: [
            {
                cover: 'https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/l/public/s29934992.jpg',
                name: '后物欲时代的来临',
                formerName: '',
                author: '郑也夫',
                translator: '',
                press: '中信出版社',
                year: '2016-8',
                score: 5,
            },
        ],
    },
    {
        title: '已观',
        books: [
            {
                cover: 'https://images.cnblogs.com/cnblogs_com/wangyang0210/2205307/o_230318061444_p2614500649.webp',
                name: '疯狂动物城 Zootopia (2016)',
                direct: ' 拜伦·霍华德 / 瑞奇·摩尔 / 杰拉德·布什',
                scenarist:
                    ' 拜伦·霍华德 / 瑞奇·摩尔 / 杰拉德·布什 / 吉姆·里尔顿 / 乔西·特立尼达 / 菲尔·约翰斯顿 / 珍妮弗·李',
                star: ' 金妮弗·古德温 / 杰森·贝特曼 / 伊德里斯·艾尔巴 / 珍妮·斯蕾特 / 内特·托伦斯 / 邦尼·亨特 / 唐·雷克 / 汤米·钟 / J·K·西蒙斯 / 奥克塔维亚·斯宾瑟 / 艾伦·图代克 / 夏奇拉 / 雷蒙德·S·佩尔西 / 德拉·萨巴 / 莫里斯·拉马奇 / 菲尔·约翰斯顿 / 约翰·迪·马吉欧 / 凯蒂·洛斯 / 吉塔·雷迪 / 杰西·科尔蒂 / 汤米·利斯特 / 乔希·达拉斯 / 瑞奇·摩尔 / 凯斯·索西 / 彼得·曼斯布里奇 / 拜伦·霍华德 / 杰拉德·布什 / 马克·史密斯 / 乔西·特立尼达 / 约翰·拉维尔 / 克里斯汀·贝尔 / 吉尔·科德斯 / 梅利莎·古德温',
                type: ' 喜剧 / 动画 / 冒险',
                productionCountry: ' 美国',
                language: ' 英语 / 挪威语',
                releaseDate: ' 2016-03-04(中国大陆/美国) / 2020-07-24(中国大陆重映)',
                filmLength: ' 109分钟(中国大陆) / 108分钟',
                alias: ' 优兽大都会(港) / 动物方城市(台) / 动物乌托邦 / 动物大都会 / Zootropolis',
            },
        ],
    },
]
```

!> 请按照此格式配置，无内容可以不配置。

|           **Key**           |      **Description**       |
| :-------------------------: | :------------------------: |
|          **title**          |     书目标题，可以不填     |
|          **books**          |       书目/电影数据        |
|       **books.cover**       |            封面            |
|       **books.name**        |        书名/电影名         |
|    **books.formerName**     |           原书名           |
|      **books.author**       |            作者            |
|    **books.translator**     |            译者            |
|       **books.press**       |           出版社           |
|       **books.year**        |           出版年           |
|       **books.score**       | 书/电影评级 1 ～ 5，支持.5 |
|     **books.readDate**      |          阅读日期          |
|  **books.readPercentage**   |          阅读进度          |
|      **books.direct**       |            导演            |
|     **books.scenarist**     |            编剧            |
|       **books.star**        |            主演            |
|       **books.type**        |            类型            |
| **books.productionCountry** |       制片国家/地区        |
|     **books.language**      |            语言            |
|    **books.releaseDate**    |          上映日期          |
|    **books.filmLength**     |            片长            |
|       **books.alias**       |            别名            |
