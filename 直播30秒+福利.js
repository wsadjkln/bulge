do{
    if(className("android.widget.Button").text("福利").exists()){
    className("android.widget.Button").text("福利").findOne().click()
    log("点击福利")
        sleep(2000)    
    }
    if(id("award_count_down_text").exists()){
    sleep(3000)
    log("30秒")
    }else{ 
    sleep(2000)
    划屏()
}
}while(true)

function 划屏() {
    sleep(1000)
    swipe(random(500,600),random(1400,1800),random(400,700),random(100,300),random(800,1600))
    log("划屏")
    sleep(random(5000,6000))      
}