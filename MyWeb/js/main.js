/**
 * Created by lab on 2017/7/18.
 */
window.onload = function(){
    aHoverShow();
    showWorks();
   // coverShow();
}

function addEvent(element,event,listener){
    if(element.addEventListener){
        element.addEventListener(event,listener,false);
    }else if(element.attachEvent){
        element.attachEvent('on'+event,listener);
    }else{
        element['on'+event] = listener;
    }
}

function setContainerWH(){
    var contextWidth = document.body.clientWidth || document.documentElement.clientWidth;
//    var contextHeight = window.outerHeight;

    var container = document.querySelector('.container');

    container.style.width = contextWidth + "px";
    container.style.minWidth = contextWidth + "px";
//    container.style.height = contextHeight + 'px';
}
setContainerWH();