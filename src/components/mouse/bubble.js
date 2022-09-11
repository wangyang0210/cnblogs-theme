/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-09-02 23:05
 * ----------------------------------------------
 * @describe: 鼠标移动汽包粒子
 */

export default function main(_) {
    let canvasElement = document.createElement('canvas');
    canvasElement.id = 'bubble';
    $('#home').after(canvasElement);
    let canvas = document.getElementById("bubble")
    let ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = 'fixed';
    canvas.style.left = '0';
    canvas.style.bottom = '0';
    canvas.style.pointerEvents = 'none';
    let points = []
    let live = _.__config.animate.mouse.options.bubble.live
    let colors = _.__config.animate.mouse.options.bubble.colors

    window.addEventListener("mousemove", function (evt) {
        for (let i = 0; i < _.__config.animate.mouse.options.bubble.quantity; i++) {
            points.push({
                sx: evt.x,
                sy: evt.y,
                vx: 0.5 - Math.random(),
                vy: 0.5 - Math.random(),
                life: live, //存活周期
                color: colors[parseInt(Math.random() * colors.length)],
                size: Math.random() * _.__config.animate.mouse.options.bubble.size
            })
        }
    })

    function drawpoints() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < points.length; i++) {
            let point = points[i]
            ctx.beginPath()
            ctx.arc(point.sx, point.sy, point.size, Math.PI * 2, false)
            ctx.fillStyle = "rgba(" + point.color + "," + point.life / live + ")"
            ctx.fill()
            point.life--
            if (point.life <= 0) {
                points.splice(i, 1)
            }
            point.sx += point.vx * 3
            point.sy += point.vy * 3
        }
    }

    setInterval(drawpoints, 20)

}
