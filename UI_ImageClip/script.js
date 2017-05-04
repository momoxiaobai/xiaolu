/**
 * Created by Administrator on 2017/4/18.
 */
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var selectFile = document.getElementById('file_img');
var width = canvas.width = 700;
var height = canvas.height = 600;
var img;
window.onload = function(){
    getFile();
    selectClipPosition();
//    selectClipDrag();
//    dragDivBind();
}
//绑定函数
function addEvent(element,event,listener){
    if(element.addEventListener){
        element.addEventListener(event,listener,false);
    }else if(element.attachEvent){
        element.attachEvent('on' + event,listener);
    }else{
        element['on'+event] = listener;
    }
}
//解除绑定
function removeEvent(element,event,listener){
    if(element.removeEventListener){
        element.removeEventListener(event,listener,false);
    }else if(element.detachEvent){
        element.detachEvent('on' + event,listener);
    }
}

//获取上传的文件/图片
function getFile(){
    var files,len;
    var reader = new FileReader();
    var img_type;
    addEvent(selectFile,'change',function(){
        files = this.files;
        len = files.length;
        if(len > 0){
            img_type = files[0].type;
            if(/image/.test(img_type)){
                reader.readAsDataURL(files[0]);
                img = new Image();
                reader.onload = function(){
                    img.src = reader.result;
                    context.drawImage(img,0,0,width,height);
                    selectClipPosition();
                    selectClipDrag();
                }
            }else{
                console.log('选择的不是图片');
            }
        }else{

            alert('未选择文件');
        }
    })

}


//用户输入选择剪裁区域
function selectClipPosition(){
    var x = document.getElementById('x');
    var y = document.getElementById('y');
    var setWidth = document.getElementById('setWidth');
    var setHeight = document.getElementById('setHeight');
    var x_axis = x.value;
    var y_axis = y.value;
    var clip_width = setWidth.value;
    var clip_height = setHeight.value;
    var sureArea = document.getElementById('sureArea');


    addEvent(x,'change',function(){
        x_axis = x.value;

        clipArea(x_axis,y_axis,clip_width,clip_height);
        previewImg(x_axis,y_axis,clip_width,clip_height);
    });
    addEvent(y,'change',function(){
        y_axis = y.value;
        clipArea(x_axis,y_axis,clip_width,clip_height);
        previewImg(x_axis,y_axis,clip_width,clip_height);
    });
    addEvent(setWidth,'change',function(){
        clip_width = setWidth.value;
        if(parseFloat(clip_width) + parseFloat(x_axis) > width){
            console.log('超过范围，取最大区域的宽度');
        }
        clipArea(x_axis,y_axis,clip_width,clip_height);
        previewImg(x_axis,y_axis,clip_width,clip_height);
    });
    addEvent(setHeight,'change',function(){
        clip_height = setHeight.value;
        clipArea(x_axis,y_axis,clip_width,clip_height);
        previewImg(x_axis,y_axis,clip_width,clip_height);
    });

}

//确定剪裁区域
function clipArea(x_axis,y_axis,clip_width,clip_height){

    context.clearRect(0,0,width,height);
    context.restore();
    context.drawImage(img,0,0,width,height);
    context.save();
    context.beginPath();
    context.fillStyle = 'rgba(0,0,0,0.3)';
    context.fillRect(0,0,width,height);
    context.fill();
    context.beginPath();
    context.rect(x_axis,y_axis,clip_width,clip_height);
    context.lineWidth = 6;
//    context.line
    context.lineCap = 'square';
    context.strokeStyle = 'lightblue';
    context.stroke();
    context.clip();
    context.closePath();

    context.drawImage(img,0,0,width,height);


}
//选择框的div拖拽变换
function dragDivChange(x_axis,y_axis,clip_width,clip_height){
    var selectArea = document.getElementById('selectArea');
    var x_down,y_down;
    var x_move,y_move;
    selectArea.style.display = 'block';
    selectArea.style.width = parseFloat(clip_width) + 'px';
    selectArea.style.height = parseFloat(clip_height) + 'px';
    selectArea.style.top = parseFloat(y_axis) + 'px';
    selectArea.style.left = parseFloat(x_axis) + 'px';
//    var selectArea = document.getElementById('selectArea');
//    var x_down,y_down;
//    var x_move,y_move;
//    var divDown = false;
//    addEvent(selectArea,'mousedown',function(e){
//        x_down = e.offsetX;
//        y_down = e.offsetY;
//        divDown = true;
//        console.log(x_down);
//    })
//    addEvent(selectArea,'mousemove',function(e){
//        if(divDown){
//            x_move = e.offsetX;
//            y_move = e.offsetY;
//            this.style.top = this.offsetTop + y_move + 'px';
//            this.style.left = this.offsetLeft + x_move + 'px';
//
//            var distanceX = parseFloat(x_move)-parseFloat(x_down);
//            var distanceY = parseFloat(y_move)-parseFloat(y_down);
////            console.log(this.style.top);
//            console.log(x_move + ' ' +x_down );
////            clipArea(parseFloat(x)+(parseFloat(x_move)-parseFloat(x_down)),parseFloat(y)+(parseFloat(y_move)-parseFloat(y_down)),areaWidth,areaHeight);
//        }
//
////        console.log(x_down);
////        console.log(y_down);
//    });
//    addEvent(selectArea,'mouseup',function(){
//        divDown = false;
//    })
}

//选择框div的鼠标事件绑定
function dragDivBind(){
    var selectArea = document.getElementById('selectArea');
    var x_down,y_down;
    var x_move,y_move;
    addEvent(selectArea,'mousedown',function(e){
        x_down = e.offsetLeft;
        y_down = e.offsetY;
        console.log(x_down);
        console.log(y_down);
    })
    addEvent(selectArea,'mousemove',function(e){
        x_move = e.offsetX;
        y_move = e.offsetY;
        clipArea()
        console.log(x_down);
        console.log(y_down);
    })

}
//用户拖拽完成自由剪裁
function selectClipDrag(){
    var x, y,areaWidth,areaHeight;
    var down = false;
    addEvent(canvas,'mousedown',function(e){
        down = true;
        x = e.offsetX;
        y = e.offsetY;
        clipArea(x, y,1,1);
        previewImg(x,y,1,1);
        //dragDivChange(x,y,1,1);

    })
    addEvent(canvas,'mousemove',function(e){
        if(down){
            areaWidth = e.offsetX - x;
            areaHeight = e.offsetY - y;
            clipArea(x, y,areaWidth,areaHeight);
            previewImg(x,y,areaWidth,areaHeight);
//            dragDivChange(x,y,areaWidth,areaHeight);
        }
    })
    addEvent(canvas,'mouseup',function(e){
        addEvent(canvas,'mousemove',function(){});
        down = false;
        areaWidth = e.offsetX - x;
        areaHeight = e.offsetY - y;
        clipArea(x, y,areaWidth,areaHeight);
        previewImg(x,y,areaWidth,areaHeight);
//        dragDivChange(x,y,areaWidth,areaHeight);
    })



}
//预览图片
function previewImg(x,y,width,height){
    var pre_canvas = document.getElementById('preview');
    var pre_context = pre_canvas.getContext('2d');
    pre_canvas.width = width;
    pre_canvas.height = height;
    console.log(pre_canvas.width);

    pre_context.drawImage(canvas,x,y,width,height,0,0,width,height);
}
//进行后台传输
function uploadImg(){

}
