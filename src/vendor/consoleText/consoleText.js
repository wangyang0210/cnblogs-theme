/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * @param words [] 循环文字数组
 * @param id string 文字domId
 * @param conId string 符合domId
 * @param colors [] 颜色
 * @param isCycle boolean 是否循环
 * @param callback fun 每个文字设置后回调
 */
export default function main(words, id, containerId, isCycle) {
    let textIndex = 0;
    let visible = true;
    let containerElement = document.getElementById(containerId);
    let targetElement = document.getElementById(id);
    containerElement.innerHTML = '_';

    const deleteText = () => {
        targetElement.innerHTML = targetElement.innerHTML.slice(0, -1)
        if (targetElement.innerHTML.length > 0) {
            setTimeout(deleteText, 200)
        } else {
            textIndex = 0
            setTimeout(typeWriter, 200)
        }
    }
    const typeWriter = () => {
        targetElement.innerHTML += words[textIndex++]
        if (textIndex < words.length) {
            setTimeout(typeWriter, 200)
        } else if (isCycle) {
            setTimeout(() => { deleteText() }, 1000)
        }
    }

    window.setInterval(() => {
        if (visible) {
            containerElement.style.visibility = 'hidden';
            visible = false;
        } else {
            containerElement.style.visibility = 'visible';
            visible = true;
        }
    }, 400);
    setTimeout(typeWriter, 200);
}
