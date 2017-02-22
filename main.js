/**
 * Created by Administrator on 2016/12/15.
 */
var cas = document.getElementById('canvas');
var ctx = cas.getContext('2d');
var stars = [];
var starFlag = false;
var timer;
window.onload = function(){
    init();
}
function init(){
    DrawImage();
    cas.onmousemove = function(e){
        mousemove(e);
    }
}
function DrawImage(){
    var girl = document.getElementsByClassName('image')[0];
    ctx.fillStyle = '#393550';
    ctx.fillRect(0,0,cas.width,cas.height);
    ctx.drawImage(girl,100,150,600,300);
}
function createStars(){
    starFlag = true;
    for(var i = 0;i < 50;i++){
        stars[i] = new drawStar();
    }
}
function gameLoop() {
   timer = setInterval(function(){
        DrawImage();
        for(var i = 0;i < 50;i++){
            stars[i].update();
            stars[i].setStars();
        }
    },66);

}

function mousemove(e){
   var flag = false;
    if(e.pageX >= 100 && e.pageX <= 700 && e.pageY >= 150 && e.pageY <= 450){
        flag = true;
    }else{
//      setTimeout(
          clearInterval(timer)
//      ,300);
        DrawImage();
        flag = false;
        starFlag = false;
    }
    if(flag == true && !starFlag){
        createStars();
        gameLoop();
    }
}
var
    fileInput = document.getElementById('test-image-file'),
    info = document.getElementById('test-file-info'),
    preview = document.getElementById('test-image-preview');
// 监听change事件:
fileInput.addEventListener('change', function () {
    // 清除背景图片:
    preview.style.backgroundImage = '';
    // 检查文件是否选择:
    if (!fileInput.value) {
        info.innerHTML = '没有选择文件';
        return;
    }
    // 获取File引用:
    var file = fileInput.files[0];
    // 获取File信息:
    info.innerHTML = '文件: ' + file.name + '<br>' +
        '大小: ' + file.size + '<br>' +
        '修改: ' + file.lastModifiedDate;
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
        alert('不是有效的图片文件!');
        return;
    }
    // 读取文件:
    var reader = new FileReader();reader.readAsDataURL(file);
    reader.onload = function(e) {
        var
            data = e.target.result; // 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...'
        preview.style.backgroundImage = 'url(' + data + ')';
        alert(data)
    };
    // 以DataURL的形式读取文件:

});
