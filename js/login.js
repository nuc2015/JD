{
    function cls(){
        //捕获触发事件的对象，并设置为以下语句的默认对象
        with(event.srcElement)
            //如果当前值为默认值，则清空
            if(value==defaultValue) value="";
    }
    function res(){
        //捕获触发事件的对象，并设置为以下语句的默认对象
        with(event.srcElement)
            //如果当前值为空，则重置为默认值
            if(value=="") value=defaultValue;
    }

}

{
    function  check(login_check) {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var check_code = document.getElementById("check_code").value;

        if(username != "root"){
            alert("用户名不正确！");
            return false;
        }else if(password != "root"){
            alert("密码不正确！");
            return false;
        }else if(check_code.toLowerCase() != "hxr5"){
            alert("验证码不正确！");
            return false;
        }
        return true;
    }
}