// 快手去邀好友
threads.start(function () {
    while (true) {
    sleep(2000)
    if(className("android.view.View").text("立即分享").exists()){
    id("left_btn").findOne().click()
    log("快手去邀好友")}
} 
})
//火山去邀请好友
threads.start(function () {
    while (true) {
    sleep(2000)
    id("a6j").exists()
    id("a6j").findOne().click()
    log("火山去邀请好友")
} 
})
threads.start(function () {
    while (true) {
    sleep(2000)
    id("rj").exists()
    id("rj").findOne().click()
    log("火山青少年模式")
} 
})

do{
    var 时间 = id("xb").findOne()
    log(时间.text())
    if(时间.text() == "宝箱"){
    var 总时间 = 0
    }else{
    var 分割 = 时间.text().split("")
    log(分割[0]+分割[1]+"|"+分割[3]+分割[4])
    var 总时间 = ((parseInt(分割[0]+分割[1]))*60+parseInt(分割[3]+分割[4]))/6.1        
    }
    log(总时间)    
    if(总时间 == 0){
        //小米抖音极速版()
        // 小米快手极速版()
        小米火山极速版()       
    }else{
        // 刷抖音()
        // 刷火山()
         刷快手()
        //刷淘宝()   
        //log("准备刷屏快手")
        for(var i =0;总时间>i;总时间--){
        log(总时间)
        toast(总时间)
        ud=random(1,10)
        if(ud>4){
        swipe(random(500,600),random(1200,1500),random(400,700),random(100,200),random(500,1600))}else{
        swipe(random(500,600),random(150,250),random(400,700),random(1200,1500),random(500,1600))}       
        sleep(random(8000,20000));  
        }
        home()
        text("火山极速版").findOne().click()
        log("返回火山极速版")      
    }   

}while(true)


function 小米抖音极速版() {
    home()
    text("抖音极速版").findOne().click()
   // className("android.widget.TextView").text("开宝箱").findOne()
    sleep(1000)
    id("b14").findOne().click()
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
    className("android.view.View").text("已领取").findOne() 
    sleep(1000)
    id("pj").findOne().click()
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
    red_packet()
    sleep(1000)
    className("android.view.View").text("开宝箱得金币").findOne().click()
    sleep(1000)
    className("android.view.View").text("看精彩视频赚更多").findOne().click()
    sleep(1000)
    className("android.widget.Button").text("去赚钱").findOne().click()
    sleep(1000)
}


function red_packet() {
    var red_packet =id("red_packet").findOne()
    var red_packetx =red_packet.bounds().centerX()
    var red_packety =red_packet.bounds().centerY()
    click(red_packetx,red_packety)
    log("点击红包"+red_packetx,red_packety)
    }

function 上下划屏() {
    ud=random(1,10)
    if(ud>4){
    swipe(random(500,600),random(1400,1800),random(400,700),random(100,200),random(500,1600))}else{
    swipe(random(500,600),random(150,250),random(400,700),random(1400,1800),random(500,1600))}       
    sleep(random(1000,4000));        
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

function 刷抖音() {
    home()
    sleep(1000)
    text("抖音极速版").findOne().click()   
}

function 刷火山() {
    id("x5").findOne().click()
}

function 刷快手() {
    home()
    sleep(1000)
    text("快手极速版").findOne().click()
    sleep(2000)
    if(id("title_tv").exists()){
        sleep(1000)
        click(60,140)
        log("宝箱页面返回刷视频")
        }
        else{            
        log("快手刷视频页面")
        }   
}

function 刷淘宝() {
    home()
    text("淘宝直播").findOne().click()
    var  淘宝直播 = text("视频").findOne()
    var 淘宝直播x =淘宝直播.bounds().centerX()
    var 淘宝直播y =淘宝直播.bounds().centerY()
    click(淘宝直播x,淘宝直播y)
    log("砸金蛋"+淘宝直播x,淘宝直播y)
}
