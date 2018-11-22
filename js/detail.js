/*切换到支持ES6的状态下
alert(1)*/
let thumbs=document.querySelectorAll(".left-bottom-item");
let Midimg=document.querySelector("#left-top");
let Bigimg=document.querySelector("#bigger");
let container=document.querySelector("#container");
let Search=document.querySelector(".search-box");
let midimg=document.querySelector("#left-top>img");
let bigimg=document.querySelector("#big-img>img");
let activeObj=thumbs[0];
thumbs.forEach(function (ele) {
    ele.onmouseenter=function () {
        activeObj.classList.remove("active");
        ele.classList.add("active");
        activeObj=ele;
        let img=ele.firstElementChild;
        /*console.log(img);*/
        let src=img.src;
        src=src.replace("-s","-m");
        /*console.log(src);*/
        midimg.src=src;
        src=src.replace("-m","-l");
        bigimg.src=src;
    }
});
Midimg.onmouseenter=function () {
    Search.style.display="block";
    Bigimg.style.display="block";
};
Midimg.onmouseleave=function () {
    Search.style.display="none";
    Bigimg.style.display="none";
};
Midimg.onmousemove=function (e) {
    let cl=e.clientX-container.offsetLeft-1;
    let ct=e.clientY-container.offsetTop-1;
    let rl=cl-150;
    let rt=ct-150;
    if (rl<0){
        rl=0;
    }
    if(rl>=150){
        rl=150;
    }
    if(rt<0){
        rt=0;
    }
    if(rt>=150){
        rt=150;
    }
    /*console.log(rt);*/
    Search.style.top=rt+"px";
    Search.style.left=rl+"px";
    bigimg.style.marginLeft=-rl*1.5+"px";
    bigimg.style.marginTop=-rt*1.5+"px";
}