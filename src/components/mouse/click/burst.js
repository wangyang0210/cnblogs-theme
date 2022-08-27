/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: BNTang, BNTang.303158131@qq.com
 * @Date 2022-08-27 20:29
 * ----------------------------------------------
 * @describe: 炸开点击特效
 */
export default function main(_) {
    import('https://cdn.bootcdn.net/ajax/libs/jquery/1.12.0/jquery.min.js');
    import('https://cdn.bootcdn.net/ajax/libs/mo-js/0.265.6/mo.min.js');
    function createBurst() {
        const burst = new mojs.Burst({
            left: 0,
            top: 0,
            radius: {5: 40},
            children: {shape: "circle", fill: ["red", "cyan", "orange"], fillOpacity: .8, radiusX: 3.5, radiusY: 3.5}
        });
        document.addEventListener("click", function (a) {
            burst.tune({
                x: a.pageX,
                y: a.pageY
            }).generate().replay()
        });
    }
}