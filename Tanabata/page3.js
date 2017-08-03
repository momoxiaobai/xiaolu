/**
 * Created by Administrator on 2016/12/23.
 */
var page3Animation = function(){
    this.flag = false;
}
page3Animation.prototype = {
    girlStand:function(){
        var casGirl = document.getElementById('my_girl');
        var ctxGirl = casGirl.getContext('2d');
        var a_girl = document.getElementById('a_girl');
        var sun = document.getElementById('sun');
        var width = casGirl.width;
        var height = casGirl.height;
        var timer,num = 2;
        if(!this.flag){
            a_girl.onload = function(){
                ctxGirl.drawImage(a_girl,1 * 151,0,151,291,0,0,width,height);
                num++;
            }
        }
        if(this.flag){
            timer = setInterval(function(){
                ctxGirl.clearRect(0,0,width,height);
                ctxGirl.drawImage(a_girl,num * 151,0,151,291,0,0,width,height);
                num < 5?  num++ : num = 0;
            },400);
            setTimeout(function(){
                clearInterval(timer);
            },1200);
        }

    },
    roseFly:function(){
        var roses = document.getElementById('roses');
        var roses_width = roses.offsetWidth;
        var roses_height = roses.offsetHeight;
        var position;
        var num,timer;
        timer = setInterval(function(){
            num = Math.floor(Math.random() * 6 + 1);
            position = Math.random() * roses_width;
            var roseHtml = document.createElement('div');
            var imgHtml = "<img src=images/snowflake/snowflake" + num + '.png>';
            roseHtml.innerHTML = imgHtml;
            roseHtml.className = 'rose';
            roseHtml.style.left = position + 'px';
            roses.appendChild(roseHtml);
        },200);
        setTimeout(function(){
            clearInterval(timer);
        },20000)
    }
}
var page3 = new page3Animation();
page3.girlStand();
