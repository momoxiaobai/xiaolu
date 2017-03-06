/**
 * Created by Administrator on 2017/3/6.
 */
window.onload = function(){
//    ContextMenu(e);
    var myDiv = document.getElementsByClassName('myDiv')[0];
    addEvent(myDiv,'contextmenu',ContextMenu);
    addEvent(myDiv,'click',function(e){
        e.stopPropagation();
        var myMenu = document.getElementsByClassName('menu')[0];
        myMenu.style.visibility = 'hidden';
    });
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
function ContextMenu(e){
    e.preventDefault();
    var myMenu = document.getElementsByClassName('menu')[0];
    addEvent(myMenu,'contextmenu',function(e){
        e.stopPropagation();
        e.preventDefault();
    })
    addEvent(myMenu,'click',function(e){
        e.stopPropagation();
        e.preventDefault();
    })
    var myDiv = myMenu.parentNode;
    var myDiv_width = myDiv.offsetWidth;
    var myDiv_height = myDiv.offsetHeight;

    var pageX = e.offsetX;
    var pageY = e.offsetY;

    var menu_width = myMenu.offsetWidth;
    var menu_height = myMenu.offsetHeight;
    myMenu.style.visibility = 'visible';
    if(myDiv_width-pageX > menu_width){
        myMenu.style.left = pageX + 'px';
    }else{
        myMenu.style.left = (pageX - menu_width) + 'px';
    }

    if(myDiv_height-pageY > menu_height){
        myMenu.style.top = pageY + 'px';
    }else{
        myMenu.style.top = (pageY - menu_height) + 'px';
    }
    e.stopPropagation();
}
