/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:26
 * ----------------------------------------------
 * @describe: 书单页处理
 */
import '../style/books.css'
import booksTemp from '../template/books.html'
import articleDirectory from '../components/articleDirectory/articleDirectory'
import comArticle from './common/com-article'

export default function main() {
    /**
     * 文章页公共处理
     */
    ;(() => {
        comArticle()
    })()

    /**
     * 书单页处理
     */
    ;(() => {
        if ($.__config.bookList.length) {
            import(/* webpackChunkName: "gf-blink" */ /* webpackPrefetch: true */ '../style/gf-blink.css')

            let postBody = $('#cnblogs_post_body'),
                html = ''
            $.each($.__config.bookList, i => {
                let list = $.__config.bookList[i]
                if (list.title) html += '<h1 class=`iconfont ${list.icon}`>' + list.title + '</h1>'

                html += '<div class="book-cards">'
                $.each(list.books, j => {
                    let cardHtml = booksTemp,
                        books = list.books[j]
                    // 评星
                    let scoreHtml = ''
                    if (typeof books.score !== 'undefined' && books.score > 0) {
                        scoreHtml += '<i class="iconfont icon-star-full"></i>'.repeat(parseInt(books.score))
                        if (books.score > parseInt(books.score)) scoreHtml += '<i class="iconfont icon-star-half"></i>'
                        scoreHtml += '<i class="iconfont icon-icon-star"></i>'.repeat(parseInt(5 - books.score))
                    } else {
                        scoreHtml += '<i class="iconfont icon-icon-star"></i>'.repeat(5)
                    }

                    // 图书信息
                    let infoHtml = ''

                    const infoObj = {
                        formerName: formerName => {
                            infoHtml += `<span title="${formerName}">原　名：${formerName}</span><br>`
                        },
                        author: author => {
                            infoHtml += `<span title="${author}">作　者：${author}</span><br>`
                        },
                        translator: translator => {
                            infoHtml += `<span title="${translator}">译　者：${translator}</span><br>`
                        },
                        press: press => {
                            infoHtml += `<span title="${press}">出版社：${press}</span><br>`
                        },
                        year: year => {
                            infoHtml += `<span title="${year}">出版年：${year}</span><br>`
                        },
                        direct: direct => {
                            infoHtml += `<span title="${direct}">导　演: ${direct}</span><br>`
                        },
                        scenarist: scenarist => {
                            infoHtml += `<span title="${scenarist}">编　剧: ${scenarist}</span><br>`
                        },
                        star: star => {
                            infoHtml += `<span title="${star}">主　演: ${star}</span><br>`
                        },
                        type: type => {
                            infoHtml += `<span title="${type}">类　型: ${type}</span><br>`
                        },
                        productionCountry: productionCountry => {
                            infoHtml += `<span title="${productionCountry}">制片国家/地区: ${productionCountry}</span><br>`
                        },
                        language: language => {
                            infoHtml += `<span title="${language}">语　言: ${language}</span><br>`
                        },
                        releaseDate: releaseDate => {
                            infoHtml += `<span title="${releaseDate}">上映日期: ${releaseDate}</span><br>`
                        },
                        filmLength: filmLength => {
                            infoHtml += `<span title="${filmLength}">片　长: ${filmLength}</span><br>`
                        },
                        alias: alias => {
                            infoHtml += `<span title="${alias}">别　名: ${alias}</span><br>`
                        },
                    }

                    books?.formerName && infoObj['formerName'](books.formerName)
                    books?.author && infoObj['author'](books.author)
                    books?.translator && infoObj['translator'](books.translator)
                    books?.press && infoObj['press'](books.press)
                    books?.year && infoObj['year'](books.year)
                    books?.scenarist && infoObj['scenarist'](books.scenarist)
                    books?.star && infoObj['star'](books.star)
                    books?.type && infoObj['type'](books.type)
                    books?.productionCountry && infoObj['productionCountry'](books.productionCountry)
                    books?.language && infoObj['language'](books.language)
                    books?.releaseDate && infoObj['releaseDate'](books.releaseDate)
                    books?.filmLength && infoObj['filmLength'](books.filmLength)
                    books?.alias && infoObj['alias'](books.alias)

                    // 阅读时间 & 进度
                    let readDate = typeof books.readDate !== 'undefined' ? books.readDate : ''
                    let readDateStyle = readDate ? 'initial;' : 'none'

                    let readPercentage = typeof books.readPercentage !== 'undefined' ? books.readPercentage : ''
                    let readPercentageStyle = readPercentage ? 'initial;' : 'none'

                    // 处理模版
                    cardHtml = $.__tools.batchTempReplacement(cardHtml, [
                        ['cover', typeof books.cover !== 'undefined' ? books.cover : ''],
                        ['name', typeof books.name !== 'undefined' ? books.name : ''],
                        ['readDate', readDate],
                        ['readDateStyle', readDateStyle],
                        ['readPercentage', readPercentage],
                        ['readPercentageStyle', readPercentageStyle],
                        ['scoreHtml', scoreHtml],
                        ['infoHtml', infoHtml],
                    ])
                    html += cardHtml
                })

                html += '</div>'
            })

            // 插入模版
            let articleSuffixFlg = $('.articleSuffix-flg')
            articleSuffixFlg.length ? articleSuffixFlg.before(html) : postBody.append(html)
        }
    })()

    /**
     * 设置文章目录
     */
    ;(() => {
        articleDirectory()
    })()
}
