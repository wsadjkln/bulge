do{
      //游戏()
if(className("android.widget.TextView").text("开宝箱").exists()){
    跳开宝箱()
    限时任务()
    去广告()    
    开宝箱()
    去广告()
    id("qq").findOne().click()
    sleep(1000)
    游戏()
    log("所有游戏完成")     
    }else{
        划屏()
         }   
    }while(true)
    
     
    function 跳开宝箱() {
        log("开宝箱")
        id("b2v").findOne(30*1000).click()
        sleep(2000); 
    }
    function 限时任务() {
    className("android.view.View").text("限时任务赚金币").findOne(60*1000).click();
    log("限时任务")
    sleep(3000)
    }
    function 划屏() {
        x1 = random(500,600);
        x2 = random(500,600);
        y1 = random(1400,1500);
        y2 = random(200,300);
        z = random(500,1600);
        time = random(1000,4000);
        ud=random(1,10)
        toast(ud)
        if(ud>4){
        swipe(x1,y1,x2,y2,z);}else{
        swipe(x1,y2,x2,y1,z);}       
        sleep(time);        
    }
    function 游戏() {
        k = random(1,10)
        if(k>5){
            金币农场()
            成语大富翁()
        }else{
            当皇上金币版()
            天天CS金币版()
        }
        
        
    }
    function 开宝箱() {
    className("android.view.View").text("开宝箱得金币").findOne(60*1000).parent().click();  
    toast("开宝箱")    
    log("点击开宝箱");    
    sleep(2000)
    className("android.view.View").text("看广告视频再赚").findOne(60*1000).click();
    log("二重") 
    sleep(3000)   
    className("android.view.View").text("已领取").findOne(60*1000);
    sleep(3000)
    }
    function 金币农场(){
        home()
        text("金币农场").findOne().click()
        sleep(12000)
        click(550,1100)
        sleep(3000)
        去广告()
        log("完成第一个")
           sleep(1000)
           click(700,1550)
           sleep(1000)
           log("进入第二个广告")      
        去广告()
        log("完成第二个")
        sleep(2000)
        className("android.widget.ImageView").bounds(930,90,1056,186).findOne().click()
        sleep(1000)
        log("准备开启抖音")
    //text("抖音极速版").findOne().click()
    sleep(1000)
    }
    function 成语大富翁(){
       // home()
        text("成语大富翁").findOne().click()
        sleep(12000)
        click(550,1100)
        sleep(3000)
        去广告()
        sleep(1000)
        click(700,1600)
        sleep(2000)
        log("双倍")
        去广告() 
        sleep(2000)   
        log("关闭广告")
        className("android.widget.ImageView").bounds(930,90,1056,186).findOne().click()
        log("关闭成语大富翁")       
        sleep(1000)
        log("准备开启抖音")     
     text("抖音极速版").findOne().click()
     sleep(1000)
     }
    function 当皇上金币版(){
        home()
        text("当皇上金币版").findOne().click()
        sleep(12000)
        click(500,1400)
        sleep(3000)
        去广告()
            log("关闭广告")
            sleep(2000)
            click(500,1300)
            log("确定")
            sleep(1000)
            click(700,1550)
            log("领双倍")
            sleep(2000)
            去广告()
            sleep(2000)
            click(500,1300)
            log("确定")
            className("android.widget.ImageView").bounds(930,90,1056,186).findOne().click()
            log("关闭当皇上金币版")       
        sleep(1000)
        log("准备开启抖音")     
     //text("抖音极速版").findOne().click()
     //sleep(1000)
     }
    function 天天CS金币版(){
       // home()
        text("天天CS金币版").findOne().click()
        sleep(12000)
        click(500,1150)
        sleep(3000)
        去广告()
        log("关闭广告")
        sleep(2000)
        click(500,1100)
        sleep(2000)
        log("5倍奖励")
        去广告()
        sleep(2000)
        click(500,1100)
        log("确定")
        sleep(1000)
        click(500,1300)
        sleep(2000)
        log("签到")
        去广告()
        sleep(2000)
        className("android.widget.ImageView").bounds(930,90,1056,186).findOne().click()
        log("关闭当皇上金币版")       
        sleep(1000)
        log("准备开启抖音")     
     text("抖音极速版").findOne().click() 
     sleep(1000)
    }
    function 去广告(){
        for(var j = 0;j<60;j++){
            if(className("android.view.ViewGroup").bounds(24,1632,1056,1872).exists()){
               log("播放广告"+j)
               sleep(3000)
                }else{
                break
                }
            }
     }