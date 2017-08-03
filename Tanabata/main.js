
/**
 * Created by Administrator on 2016/12/26.
 */
window.onload = function(){
    setBG();
    boyWalk();
}
function setBG(){
    var content = document.getElementById('content');
    var content_wrap = document.getElementById('content_wrap');
    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;
    content_wrap.style.width = clientWidth * 3 + 'px';
    content.style.width = clientWidth * 1  + 'px';
    content_wrap.style.height = clientHeight + 'px';
    content.style.height = clientHeight + 'px';
}

function boyWalk(){
    var page1 = new page1Animation();
    var page2 = new page2Animation();
    var page3 = new page3Animation();
    page1.bg1move();
    var boy = document.getElementById('boyImg');
    var boy_flower = document.getElementById("boyFlower");
    var boy_rotate = document.getElementById("boyRotate");
    var boyCanvas = document.getElementById('boyCan');
    var boyContext = boyCanvas.getContext('2d');

//    var music1 = document.getElementById('music1');
    var width = boyCanvas.width;
    var height = boyCanvas.height;
    var num = 0,num1 = 0,num2 = 0;
    var timer,timer1,timer2;
    boyCanvas.classList.add('boy_walk1');
    boyCanvas.style.left = '25%';
    boy.onload = function(){
        boyContext.drawImage(boy,num * 150,0,150,291,0,0,width,height);
        num++;
    }
    timer = setInterval(function(){
        boyContext.clearRect(0,0,width,height);
        boyContext.drawImage(boy,num * 151,0,150,291,0,0,width,height);
        num < 3?  num++ : num = 0;
    },400)
    setTimeout(function(){
        boyCanvas.style.left = '17.7%';
    },4500);
    setTimeout(function(){
        boyCanvas.classList.add('boy_small');
        page2.birdFly();
        page2.openDoor(true);
    },10600);
    setTimeout(function(){
        boyCanvas.classList.remove('boy_small');
        boyCanvas.classList.add('boy_big');
        clearInterval(timer);
        boy_flower.onload = function(){
            boyContext.drawImage(boy_flower,num1 * 151,0,151,291,0,0,width,height);
            num1++;
        }
        timer1 = setInterval(function(){
            boyContext.clearRect(0,0,width,height);
            boyContext.drawImage(boy_flower,num1 * 151,0,151,291,0,0,width,height);
            num1 < 3?  num1++ : num1 = 0;
        },400)
    },14500);
    setTimeout(function(){
        page2.openDoor(false);
        boyCanvas.style.left = '3%';
    },19800);
    setTimeout(function(){
        boyCanvas.style.left = '14%';
        boyCanvas.style.top = '25%';
    },25800);
    setTimeout(function(){
        clearInterval(timer1);
        clearInterval(timer);
        num2 = 0;
        boy_rotate.onload = function(){
            boyContext.drawImage(boy_rotate,num2 * 151,0,151,291,0,0,width,height);
            num2++;
        }
        timer2 = setInterval(function(){
            boyContext.clearRect(0,0,width,height);
            boyContext.drawImage(boy_rotate,num2 * 151,0,151,291,0,0,width,height);
            num2 < 5?  num2++ : num2 = 0;
        },400);
        setTimeout(function(){
            page3.flag = true;
            page3.girlStand();
        },1200)
        setTimeout(function(){
            clearInterval(timer2);
            page3.roseFly();
        },2400);
    },33800);


}