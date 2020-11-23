do{
//if(id("tv_task_bottom_1").exists()){    
sleep(1000)
//}
//else{
    划屏()
//sleep(5000)
//}
}while(true)

function 划屏() {
    x1 = random(500,600);
    x2 = random(500,600);
    y1 = random(1400,1500);
    y2 = random(200,300);
    z = random(500,1600);
    time = random(3200,6000);
    //swipe(x1,y1,x2,y2,z)
     ud=random(1,10)
     toast(ud)
     if(ud>4){
     swipe(x1,y1,x2,y2,z);}else{
     swipe(x1,y2,x2,y1,z);}       
     sleep(time);       
     
}