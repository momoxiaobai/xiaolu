var page1Animation = function(){

}
page1Animation.prototype = {


    bg1move:function(){
        var content_wrap = document.getElementById('content_wrap');
        content_wrap.classList.add('bg');
        setTimeout(function(){
            content_wrap.style.left = '-100%';
        },4500)
        setTimeout(function(){

        },9500);
        setTimeout(function(){
            content_wrap.style.left = '-200%';

        },18500);
        var music1 = document.getElementById('music1');
        var music2 = document.getElementById('music2');
        var timer5;
        timer5 = setInterval(function(){
            if(parseInt(music1.currentTime) == 27){
                clearInterval(timer5);
                setTimeout(function(){
                    music1.src='music/circulation.wav';
//                    music1.pause();
                },100)
            }
        },30);

    }

}
//var page1 = new page1Animation();

//page1.bg1move();