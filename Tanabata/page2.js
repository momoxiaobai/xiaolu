/**
 * Created by Administrator on 2016/12/22.
 */
var page2Animation = function(){

}

page2Animation.prototype = {
    birdFly:function(){
        var bird = document.getElementById('bird');
        var birdCtx = bird.getContext('2d');
        var birdImg = document.getElementById('imgBird');
        var width = bird.width;
        var height = bird.height;
        var timer;
        var num = 0;
        bird.style.left = '-40%';
        timer = setInterval(function(){
            birdCtx.clearRect(0,0,width,height);
            birdCtx.drawImage(birdImg,num * 91,0,91,71,0,0,width,height);
           num < 2?  num++ : num = 0;
        },400);
        setTimeout(function(){
            clearInterval(timer);
            bird.style.display = 'none';
        },9000);
    },
    openDoor:function(flag){
        var doorImg = document.querySelectorAll('.img');
        var b_background = document.querySelector('.b_background');
        if(flag){
            doorImg[0].style.left = '-100%';
            doorImg[1].style.left = '100%';
            b_background.style.backgroundImage = "url('images/QixiB-dark.png')";
        }else{
            doorImg[0].style.left = '0';
            doorImg[1].style.left = '0';
            b_background.style.backgroundImage = "url('images/QixiB-bright.png')";
        }

    }

}
var bird = new page2Animation();
//bird.birdFly();
