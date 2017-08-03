/**
 * Created by Administrator on 2017/3/9.
 */
function canvasDraw() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

}
function addEvent(element,event,listener){
    if(element.addEventListener){
        element.addEventListener(event,listener,false);
    }else if(element.attachEvent){
        element.attachEvent('on'+event,listener);
    }else{
        element['on' + event] = listener;
    }
}
function show_hide(){
    var bigDiv = document.querySelector('.bigDiv');
    var container = document.querySelector('.container');
    var context = document.querySelector('.context');
    addEvent(container,'mouseover',function(){
            bigDiv.style.visibility = 'visible';
            bigDiv.style.top = '10px';
            bigDiv.style.opacity = '1';
            context.style.webkitFilter = 'blur(3px)';
            context.style.mozFilter = 'blur(3px)';
            context.style.msFilter = 'blur(3px)';
            context.style.filter = 'blur(3px)';
    })
    addEvent(container,'mouseout',function(){
        bigDiv.style.visibility = 'hidden';
        bigDiv.style.top = '15px';
        bigDiv.style.opacity = '0';
        context.style.webkitFilter = 'blur(0px)';
        context.style.mozFilter = 'blur(0px)';
        context.style.msFilter = 'blur(0px)';
        context.style.filter = 'blur(0px)';
    })



}
window.onload = function(){
    show_hide();
}