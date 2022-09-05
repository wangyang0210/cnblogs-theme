/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:23
 * ----------------------------------------------
 * @describe: 文章信息
 */

export default function main(postDescText) {
    let getPostMetaInfo = (postDescInfo) => {
       let postDescRep = postDescInfo.replace(/[\r\n]/g, '');

        let postMetaRex  = /.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*推荐\s*\((\d*)\).*/,
            postMetaRex2 = /.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*/,
            postMetaRex3 = /.*posted\s*@\s*([0-9\-:\s]{16}).*/,
            diggCount = $('#digg_count'),
            info = postDescRep.match(postMetaRex)
                || postDescRep.match(postMetaRex2)
                || postDescRep.match(postMetaRex3),
            date = typeof info[1] === 'undefined' ? '1970-01-01 00:00' : info[1],
            vnum = typeof info[2] === 'undefined' ? '0' : info[2],
            cnum = typeof info[3] === 'undefined' ? '0' : info[3],
            tnum = typeof info[4] === 'undefined' ? (diggCount.length ? diggCount.text() : '0') : info[4];

        return {
            date: date,
            vnum: vnum,
            cnum: cnum,
            tnum: tnum,
        };
    };

    return getPostMetaInfo(postDescText);
}
