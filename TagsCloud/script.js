/**
 * Created by Administrator on 2017/4/11.
 */

var myTags = [];//标签内容
var num;//标签个数
window.onload = function(){
    var container = document.getElementById('container');

    getControlMsg();
    getNumber();
    createLabel(myTags,num);
    var label_item = document.querySelectorAll('.label_item');
    var radius = 180;//标签云球体半径
    setLabelToBall(label_item,radius);
    move(label_item);
};
//绑定函数
function addEvent(ele,event,listener){
    if(ele.addEventListener){
        ele.addEventListener(event,listener,false);
    }else if(ele.attachEvent){
        ele.attachEvent('on'+event,listener);
    }else{
        ele['on'+event] = listener;
    }
}
//获取控制台关于标签云数量内容转速等信息
function getControlMsg(){
    var content = document.getElementById('content');
    var tags = [];
    var num;
    addEvent(content,'focus',function(){
        this.innerHTML = '';
    });
    addEvent(content,'blur',function(){
        var content3D = this.value;
        var tags = [];
        content3D.trim();
        if(content3D === ''){
            this.innerHTML = '请输入要显示的标签云内容，不输入则按照默认内容进行显示；输入的内容请以空格分隔';
        }else{
            myTags = content3D.split(" ");
            createLabel(myTags,num);
            var label_item = document.querySelectorAll('.label_item');
            var radius = 180;//标签云球体半径
            setLabelToBall(label_item,radius);
            move(label_item);

        }

    });
    //return tags;
}
//获得标签云数量
function getNumber(){
    var number = document.getElementById('number');
//    var num;
    var tagNum;
    var tags = [];
    addEvent(number,'blur',function(){
        num = parseInt(number.value);
        if(num < 20 || num > 500){
            alert('请输入20-500的整数');
        }else {
            tagNum = num;
           // alert(tagNum)
            createLabel(myTags,num);
            var label_item = document.querySelectorAll('.label_item');
            var radius = 180;//标签云球体半径
            setLabelToBall(label_item,radius);
            move(label_item);

        }

    });
    //return tagNum;
}
//获得标签云的转速
function getSpeed(){
    var speed = document.getElementById('speed');
    var speedNum;
    var tagSpeed;
    addEvent(speed,'blur',function(){
        speedNum = parseFloat(speed.value);
        if(speedNum < 0 ){
            alert("请输入0-1之间的数");
        }else{
            tagSpeed = speedNum;
        }

    });
    return tagSpeed;
}

//创建球体
function createLabel(tags,num){
    var labels;
   if(tags.length !== 0){
        labels = tags;
    }else{
        labels = ['html','css','javascript','angularJS','nodeJS','jQuery','vue','rect','c++','c','java','php','python','ruby','c#'];
    }
   // var labels = tags || ['html','css','javascript','angularJS','nodeJS','jQuery','vue','rect','c++','c','java','php','python','ruby','c#'];
//console.log(labels)
    var n = num || 120;
    //console.log(labels+' '+n)
    var container = document.getElementById('container');
    var html = '';
    var index;
    for(var i = 0;i < n;i++){
        index = Math.floor(Math.random()*(labels.length));
        html += "<div class='label_item'>"+labels[index]+"</div>";
    }
    container.innerHTML = html;
}
//设计标签云球体
function setLabelToBall(elements,radiu){
    var label_item = elements;
    var len = label_item.length;
    var opa = 1;
    var degree, a, b, x, y,z;
    for(var k = 0;k < len;k++){
       degree = (2*(k+1)-1)/len - 1;
       a = Math.acos(degree);
       b = a*Math.sqrt(len*Math.PI);
       x = radiu * Math.sin(a) * Math.cos(b);
       y = radiu * Math.sin(a) * Math.sin(b);
       z = radiu * Math.cos(a);
       label_item[k].dataset.x = x;
       label_item[k].dataset.y = y;
       label_item[k].dataset.z = z;
        if(a > Math.PI/2 ){
            label_item[k].style.transform = "translateZ("+z+"px) translateX("+x+"px) translateY("+y+"px)" +
                "";
            label_item[k].style.fontSize = '4px';
            opa = 0.5;

        }else{
            label_item[k].style.transform = "translateZ("+z+"px) translateX("+x+"px) translateY("+y+"px)" +
                "";
            opa = 1;
            label_item[k].style.color = '#0A0AEE';
            label_item[k].style.fontSize = '14px';


        }
        label_item[k].style.opacity = opa.toString();
    }
}
function move(elements){
    var degreeX = Math.PI/100 * 0.3 * (getSpeed() || 1);
    var degreeY = Math.PI/100 * 0.3 * (getSpeed() || 1);
    var container = document.getElementById('container');
    var x,y;
    var timer;
    x = y = 1;
    addEvent(container,'mousemove',function(e){
//        console.log(e.clientX-this.offsetLeft + ' '+ e.clientY)
        x = (e.clientX-this.offsetLeft - 210)/300;
        y = (e.clientY - 210)/300;
        degreeX = Math.PI/100 * x * (getSpeed() || 1);
        degreeY = Math.PI/100 * y * (getSpeed() || 1);
    })
    addEvent(container,'mouseout',function(){
        var speed = (getSpeed() || 1);
        setTimeout(function(){
            degreeX = 0;
            degreeY = 0;
        },4000)
    })
    setInterval(function(){
        rotateX(elements,degreeX);
        rotateY(elements,degreeY);
    },16.7);
}
//x轴旋转
function rotateX(elements,degreeX){
    var label_item = elements;
    var degree = degreeX;
//    console.log(getSpeed())
    var cos = Math.cos(degree);
    var sin = Math.sin(degree);
    var x, y,z;
    for(var i = 0;i < label_item.length;i++){
        x = label_item[i].dataset.x;
        y = label_item[i].dataset.y;
        z = label_item[i].dataset.z;
        var y1 = y*cos - z*sin;
        var z1 = z*cos + y*sin;
        label_item[i].dataset.y = y1;
        label_item[i].dataset.z = z1;
        if(label_item[i].dataset.z < 0){
            label_item[i].style.opacity  = '0.5';
            label_item[i].style.fontSize = '4px';
        }else{
            label_item[i].style.fontSize = '14px';
    }
        if(z > 0){
            label_item[i].style.opacity = "1";
        }else{
            label_item[i].style.opacity = "0.5";
        }
        label_item[i].style.transform = "translateZ("+z1+"px) translateX("+x+"px) translateY("+y1+"px) rotateX(0deg)";

    }
}

//y轴旋转
function rotateY(elements,degreeY){
    var label_item = elements;
    var degree = degreeY;
    var cos = Math.cos(degree);
    var sin = Math.sin(degree);
    var x, y,z;
    for(var i = 0;i < label_item.length;i++){
        x = label_item[i].dataset.x;
        y = label_item[i].dataset.y;
        z = label_item[i].dataset.z;
        var x1 = x*cos - z*sin;
        var z1 = z*cos + x*sin;
        label_item[i].dataset.x = x1;
        label_item[i].dataset.z = z1;
        if(label_item[i].dataset.z < 0){
            label_item[i].style.opacity  = '0.5';
            label_item[i].style.fontSize = '4px';
        }else{
            label_item[i].style.fontSize = '14px';
        }
        if(z > 0){
            label_item[i].style.opacity = "1";
        }else{
            label_item[i].style.opacity = "0.5";
        }
        label_item[i].style.transform = "translateZ("+z1+"px) translateX("+x1+"px) translateY("+y+"px) rotateX(0deg)";

    }

}
