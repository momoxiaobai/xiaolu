/**
 * Created by lab on 2017/7/18.
 */
//    展示小作品的大div
var myWorkShow = document.querySelector('.myWorkShow');
//小作品的div
var workShow = document.querySelectorAll('.workShow');
var flag = 0;
//鼠标覆盖后遮盖层出现
function coverShow(){
    var work = document.getElementsByClassName('work');
    var cover = document.getElementsByClassName('cover');
    for(var i = 0;i < work.length;i++){
        work[i].dataset.num = i;
        addEvent(work[i],'mouseover',function(){
            cover[this.dataset.num].style.visibility = 'visible';
            cover[this.dataset.num].style.top = '0px';
        })
        addEvent(work[i],'mouseout',function(){
            cover[this.dataset.num].style.top = '-300px';
            cover[this.dataset.num].style.visibility = 'hidden';
        })
        addEvent(work[i],'click',function(){
            myWorkShow.style.visibility = 'visible';
            workShow[this.dataset.num].style.visibility = 'visible';
            document.body.scrollTop = 200;
            flag = this.dataset.num;
        })
    }
}

//覆盖层消失
function coverHidden(){

    addEvent(myWorkShow,'click',function(e){
        this.style.visibility = 'hidden';
        workShow[flag].style.visibility = 'hidden';
    })
    for(var i = 0;i < workShow.length;i++){
        addEvent(workShow[i],'click',function(e){
            e.stopPropagation();
        })
    }
}


coverShow();
coverHidden();