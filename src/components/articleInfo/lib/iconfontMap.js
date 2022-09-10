/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-11 22:24
 * ----------------------------------------------
 * @describe: 字体图标映射
 */


const foods = [
    'hongzao', 'putaogan', 'kele', 'kuangquanshui', 'futejia', 'pijiu', 'putaojiu', 'baozi',
    'mianbao', 'fantuan', 'hanbao', 'xiezishousi', 'baomihua', 'regou', 'tianfuluo', 'shaomai',
    'shousi', 'pisa', 'nuomici', 'roujiamo', 'zhangyuxiaowanzi', 'hebaodan', 'kesong', 'feiyuguantou',
    'shengjian', 'youtiao', 'yuzijiang', 'zhutongfan', 'doujiang', 'sanmingzhi', 'jiaozi', 'huoguo', 'mantou', 'jiroujuan'
]

const dessert = [
    'qiaokeli', 'baomihua', 'bingtanghulu', 'kafei1', 'mojituo', 'bingkuai', 'meishikafei',
    'zhenzhunaicha', 'xuegao', 'nailao', 'tiantong', 'makalong', 'tiantianquan', 'huafubing',
    'mocha', 'bingsha', 'suannai', 'tongluoshao', 'cha', 'chengzhi', 'qianceng', 'fengmi', 'paofu',
    'dangaojuan', 'banji', 'danta', 'xiangcaobingqilin', 'tilamisu', 'mianhuatang', 'paobing', 'qishui',
    'guodong', 'danhuangsu', 'dangao', 'binggan', 'buding'
]

const fruit = [
    'ganlan', 'lanmei', 'shiliu', 'yezi', 'tiangua', 'mihoutao', 'boluo', 'manyuemei', 'taozi', 'xiangjiao',
    'caomei', 'niuyouguo', 'hamigua', 'chelizi', 'li', 'bale', 'juzi', 'baixiangguo', 'putao', 'pipa', 'yangtao',
    'youzi', 'lianwu', 'wuhuaguo', 'lizhi', 'boluomi', 'qingning', 'shizi', 'pingguo', 'chengzi', 'mangguo', 'ningmeng',
    'liulian', 'banli', 'xigua', 'huolongguo', 'shanzhu'
]

const vegetable = [
    'jidan', 'niunai', 'zhangyu', 'pangxie', 'longxia', 'rou', 'jitui', 'huage', 'xianyu', 'sanwenyu', 'doufu',
    'zhouzi', 'haixing', 'haizhe', 'feiyuguantou', 'doujiang', 'shanbei', 'huangyou', 'xiangchang', 'huasheng',
    'mogu', 'hongshu', 'qingjiao', 'lajiao', 'xihongshi', 'baocai', 'huluobu', 'yangcong', 'qiezi', 'xilanhua',
    'tudou', 'nangua', 'zhusun', 'shuiluobu', 'candou', 'yumi', 'wandou', 'huanggua', 'suantou', 'yuancaitou',
    'baicai'
]

const defaults = [
    'hebaodan','bingtanghulu','kesong','qianceng','fengmi','feiyuguantou','shengjian','youtiao','yuzijiang',
    'zhutongfan','doujiang','sanmingzhi','paofu','shanbei','dangaojuan','futejia','huangyou','xiangchang',
    'banji','danta','qingning','lajiao','shizi','mojituo','pijiu','putaojiu','kouxiangtang','xiangcaobingqilin',
    'jiaozi','tilamisu','huoguo','hongshu','bingkuai','mianhuatang','paobing','meishikafei','mantou','qishui',
    'ganlan','jiroujuan','guodong','baozi','pingguo','chengzi','qingjiao','jidan','xihongshi','mangguo','baocai',
    'niunai','mianbao','huluobu','zhangyu','pangxie','longxia','yangcong','rou','jitui','huage','xianyu','mogu',
    'qiezi','xilanhua','ningmeng','liulian','banli','sanwenyu','tudou','xigua','nangua','huolongguo','fantuan',
    'zhusun','shuiluobu','shanzhu','lanmei','shiliu','yezi','tiangua','mihoutao','boluo','kaixinguo','hetao',
    'xiaweiyiguo','huasheng','bigenguo','kuihuazi','songzi','xiguazi','badanmu','yaoguo','danhuangsu','dangao',
    'binggan','buding','tangguo','qiaokeli','hongzao','candou','putaogan','manyuemei','taozi','xiangjiao','caomei',
    'niuyouguo','hamigua','chelizi','li','bale','kafei1','shutiao','zhenzhunaicha','xuegao','nailao','kele','tiantong',
    'hanbao','xiezishousi','baomihua','regou','makalong','tianfuluo','juzi','baixiangguo','putao','shaomai','yumi','pipa',
    'yangtao','youzi','lianwu','wuhuaguo','paomian','wandou','huanggua','suantou','tiantianquan','shupian','huafubing',
    'bangbangtang','shousi','lizhi','doufu','mocha','boluomi','zhouzi','bingsha','suannai','pisa','haixing','haizhe',
    'tongluoshao','nuomici','kuangquanshui','roujiamo','cha','zhangyuxiaowanzi','chengzhi','yuancaitou','baicai'
]

export default {
    foods,
    dessert,
    fruit,
    vegetable,
    defaults
}
