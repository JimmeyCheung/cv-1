let divContent = document.querySelector("#divContent");
let demo = document.querySelector("#demo");
let cssContent = document.querySelector("#style");
let html = `/* 你好，我是JimmeyCheung
 * 接下来我来演示一下我的前端功底
 * 首先我要准备一下div
 */
#demo{
    position:absolute;
    top:0;
    left:0;
    right:0;
    margin:auto;
    width:200px;
    height:200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#demo{
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border-radius:50%;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#demo:before{
    content:'';
    display:block;
    position:absolute;
    top:0;
    left:0;
    right:0;
    width:100px;
    height:100px;
    margin:auto;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#demo:after{
    content:'';
    display:block;
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    width:100px;
    height:100px;
    margin:auto;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let index = 0;
let len = html.length;
loadContent();

function loadContent() {
    if(index === len) return;
    let singleHtml = html[index];
    divContent.innerHTML += singleHtml;
    cssContent.innerHTML += singleHtml;
    console.log(singleHtml);
    window.scrollTo(0,9999);
    divContent.scrollTo(0, 99999);
    index++;
    setTimeout(() => {
        loadContent();
    }, 50);
}