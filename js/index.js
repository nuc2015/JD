{
    window.onload = init;
    var dingshiqi;
    function init() {
        dingshiqi = window.setInterval("qiehuan()",2000);
        document.getElementById("li1").style.border = "3px solid #17181f";
    }
    var i = 1;
    function qiehuan(){
        var imgs = document.getElementById("imgs");
        i++;
        if(i>3){
            i = 1;
        }
        qingchu();
        var liobj = document.getElementById("li"+i);
        imgs.src="image/index/"+i+".jpg";
        liobj.style.border = "3px solid #17181f";
    }
    function stop(){
        window.clearInterval(dingshiqi);
    }
    function start(){
        dingshiqi = window.setInterval("qiehuan()",2000);
    }
    function xuanze(li,me){
        i = li;
        qingchu();
        stop();
        var imgs = document.getElementById("imgs");
        imgs.src="image/index/"+i+".jpg";
        me.style.border = "3px solid #17181f";
    }
    //li颜色清除
    function qingchu(){
        for(var j = 1;j<=3;j++){
            var obj = document.getElementById("li"+j);
            obj.style.border = "3px solid #ffffff";
        }
    }
}