 do{
    var 时间 = id("xb").findOne()
    log(时间.text())
    if(时间.text() == "宝箱"){
    var 总时间 = 0
    }else{
    var 分割 = 时间.text().split("")
    log(分割[0]+分割[1]+"|"+分割[3]+分割[4])
    var 总时间 = ((parseInt(分割[0]+分割[1]))*60+parseInt(分割[3]+分割[4]))/12        
    }
    log(总时间)
    if(总时间 == 0){
        //小米抖音极速版()
        小米火山极速版()
       // 小米快手极速版()               
    }else{
        id("x5").findOne().click()
        for(var i =0;总时间>i;总时间--){
        log(总时间)
        toast(总时间)
        小红包()
        立即抽奖()       
        swipe(random(500,600),random(1400,1800),random(400,700),random(100,200),random(500,1600))
        sleep(random(4800,5200));  
        }
        home()
        text("火山极速版").findOne().click()    
    }
    
 }while(true)

 function 小米抖音极速版() {
    home()
    text("抖音极速版").findOne().click()
   // className("android.widget.TextView").text("开宝箱").findOne()
    sleep(1000)
    id("b2s").findOne().click()
    sleep(1000)
    className("android.view.View").text("限时任务赚金币").findOne().click()
    sleep(2000)
    去广告()
    className("android.view.View").text("开宝箱得金币").findOne().parent().click()         
    log("点击开宝箱");    
    sleep(2000)
    className("android.view.View").text("看广告视频再赚").findOne().click()
    log("二重") 
    sleep(2000)
    去广告()   
    if(className("android.view.View").text("已领取").exists()){
    log("限时任务已领取")
    }else{
    className("android.view.View").text("限时任务赚金币").findOne().click()
    }
    sleep(1000)
    id("qu").findOne().click()
    sleep(1000)
}


function 小米火山极速版() {
    home()
    text("火山极速版").findOne().click()
    sleep(1000)
    id("xb").text("宝箱").findOne()
    sleep(1000)
    id("x_").findOne().click()
    log("点击红包")
    sleep(1000)
    className("android.view.View").text("开宝箱得金币").findOne().click()
    log("开宝箱得金币")
    sleep(1000)
    click(500,1200)
    sleep(1000)
    log("看视频翻倍")
    sleep(3000)    
    className("android.view.View").text("看视频赚海量金币").findOne().click()
    sleep(3000)
    log("找到看视频赚海量金币")
    id("x5").findOne().click()
    log("完成看视频赚海量金币")
   // home()
   // sleep(1000)
    // text("抖音极速版").findOne().click()   
        
}

function 小米快手极速版() {  
    home()
    text("快手极速版").findOne().click()
    sleep(8000)
    red_packet()
    sleep(12000)
    click(900,1450)
    sleep(2000)
    click(550,1200)
    log("快手广告")
    sleep(1000)
    className("android.widget.Button").text("去赚钱").findOne()
    click(60,140)
    sleep(1000)
    home()
    sleep(1000)
    text("火山极速版").findOne().click()
}


 function 立即抽奖() {
    if(className("android.view.View").text("200金币").exists()){
        log("找到立即抽奖")
        swipe(random(500,600),random(100,150),random(400,700),random(200,300),random(500,1600))
        className("android.view.View").text("200金币").findOne()
    for(var i = 3;i>0;i--){
    if(className("android.view.View").text("剩余0次").exists()){
        log("领取完毕")
        break}
        else{
        click(500,1200)
        log("立即抽奖"+i)
        sleep(4000)}
        }   
        }
    划屏()
    }

function 划屏() {
    swipe(random(500,600),random(1100,1400),random(400,700),random(100,400),random(500,1600))
    log("划屏")
    sleep(random(2000,5000))      
}
function 小红包(){
if(className("android.widget.TextView").text("查看详情").exists()){
        log("查看详情")
        if(id("a3h").exists()){
            if(className("android.widget.TextView").text("领取").findOne()){
                var  领取 = className("android.widget.TextView").text("领取").findOne()
                var 领取x =领取.bounds().centerX()
                var 领取y =领取.bounds().centerY()
                click(领取x,领取y)
                log("领取"+领取x,领取y)
                }
        }else{
        划屏()}       
    }
}
function 广告领钱() {
    className("android.widget.TextView").text("查看领取50金币").exists()
    log("广告预备")
    划屏()
    sleep(2000)
    // 划屏()
    if(className("android.widget.TextView").text("查看领取50金币").exists()){
    var  广告领钱 = className("android.widget.TextView").text("查看领取50金币").findOne()
    var 广告领钱x =广告领钱.bounds().centerX()
    var 广告领钱y =广告领钱.bounds().centerY()
    click(广告领钱x,广告领钱y)
    log("广告领钱"+广告领钱x,广告领钱y)
    sleep(6000)
    id("hx").findOne().click()
    sleep(1000)
    划屏()
    sleep(3000)
    划屏()
    }
}

    function 去广告(){
        for(var j = 0;j<20;j++){
            if(className("android.view.ViewGroup").bounds(22,1656,1059,1876).exists()){
               log("播放广告"+j)
               sleep(3000)
                }else{
                break
                }
            }
     }

     function red_packet() {
        if(id("red_packet").exists()){
        var red_packet =id("red_packet").findOne()
        var red_packetx =red_packet.bounds().centerX()
        var red_packety =red_packet.bounds().centerY()
        click(red_packetx,red_packety)
        log("点击红包"+red_packetx,red_packety)
        }
        else{
            if(id("gold_egg_packet").exists()){
            var gold_egg_packet =id("gold_egg_packet").findOne()
            var gold_egg_packetx =gold_egg_packet.bounds().centerX()
            var gold_egg_packety =gold_egg_packet.bounds().centerY()
            click(gold_egg_packetx,gold_egg_packety)
            log("点击红包"+gold_egg_packetx,gold_egg_packety)   
            }        
            }
        log("快手已经进入领宝箱页面")
        }