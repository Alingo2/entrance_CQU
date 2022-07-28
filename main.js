var shijian=3100000000+30;
    var time=null;
    flag = true
    function start(){
         time=setInterval("count()",1000);//返回值time只是为了需要暂停的时候clearInterval(time)清除时间间隔
    }
    
    function count(){
        if(shijian<0){
            alert("time out");
            pause();//一般情况下这个if条件是用来提交数据用的,这里只是测试一下。
        }else{
            $("#time nobr").html(' '+shijian%31+' ');//这里用到将毫秒转换到时分格式
            shijian--;
            console.info(time);
            if(shijian%31==0){
                if(flag){
                    $("#qr_code").attr('src',"img/code2.png");
                    flag = false;
                }
                else{
                    $("#qr_code").attr('src',"img/code1.png");
                    flag = true;
                }

            }
        }
    }
    function pause(){
        clearInterval(time);
    }
start()