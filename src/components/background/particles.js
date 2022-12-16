/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:23
 * ----------------------------------------------
 * @describe: 背景鼠标滚动动画
 */
import particlesTemp from '../../template/particles.html'
import '../../style/particles.css'

export default function main(options) {
    $.__tools.dynamicLoadingJs($.__config.default.gsap).catch(e => console.error('gsap.js', e))
    $('#footer').after(particlesTemp)
    let wrapper = document.getElementById("particles"),
        ela  = wrapper.querySelector(".particles-layer--1"),
        elb  = wrapper.querySelector(".particles-layer--2"),
        elc  = wrapper.querySelector(".particles-layer--3"),
        particlesList = [
            { el: ela, opacity: 0.07, speed: 0.06 },
            { el: elb, opacity: 0.07, speed: 0.04 },
            { el: elc, opacity: 0.07, speed: 0.05 },
        ];
    particlesList.forEach(l => { gsap.to(l.el , .6, {delay: Math.random(), opacity: l.opacity}) })
    document.addEventListener("mousemove", particlesMousemove)
    function particlesMousemove(t) {
        let e = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
            n = { x: t.clientX || t.pageX, y: t.clientY || t.pageY },
            r = { x: e.x - n.x, y: e.y - n.y }
        particlesList.forEach(l => { gsap.to(l.el, 1, {x: r.x * l.speed, y: r.y * l.speed}) })
    }
}
