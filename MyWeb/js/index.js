/**
 * Created by lab on 2017/7/16.
 */


//������긲�Ǻ��뿪������Ƭ�Ķ���Ч��
function aHoverShow(){
    var name = document.getElementById('name');
    var picture = document.querySelector('.picture');
    addEvent(picture,'mouseover',function(){
        name.style.visibility = 'visible';
        name.classList.add('a_style');
        name.style.top = '160px';
    })
    addEvent(picture,'mouseout',function(){
        name.style.top = '300px';
    })
    addEvent(picture,'click',function(){
        window.open('information.html');
    })
}

//��Ʒչʾ
function showWorks(){
    var canvas = document.querySelector('.canvas');
    var context = canvas.getContext('2d');

    var width = canvas.width = 200;
    var height = canvas.height = 200;
    context.beginPath();
    context.shadowColor = 'black';
    context.shadowBlur = 42;
    context.shadowOffsetX = 3;
    context.shadowOffsetY = 4;
    //context.fillStyle = img;
    context.font = "bold 60px Arial";
    context.fillText('SHOW'.toString(),5,115);
    context.fill();
}
aHoverShow();
showWorks();
//���õ���������ʽ����¼��仯
//function navMouseStyle(){
    //var nav_items = document.getElementsByClassName('nav_item');
    //for(var i = 0;i < nav_items.length;i++){
    //    addEvent(nav_items[i],'mouseover',function(){
    //        this.style.color = 'white';
    //        if(this.className != 'nav_item index'){
    //            nav_items[0].style.color = 'black';
    //            this.className = 'nav_item';
    //        }
    //    })
    //    addEvent(nav_items[i],'mouseout',function(){
    //        this.style.color = 'black';
    //    })
    //}
//}