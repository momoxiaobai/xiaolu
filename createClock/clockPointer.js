/**
 * Created by Administrator on 2017/5/16.
 */
function clockPointerMove(degreeSecond,degreeMin,degreeHour){
    cxt.translate(400,300);
    //秒针绘制
    cxt.beginPath();
    cxt.rotate(degreeSecond);
    cxt.moveTo(-3,60);
    cxt.lineTo(0,68);
    cxt.lineTo(3,60);
    cxt.lineTo(1,-210);
    cxt.lineTo(0,-215);
    cxt.lineTo(-1,-210);
    cxt.closePath();
    cxt.fillStyle = '#979797';
    cxt.fill();

    //分针绘制
    cxt.beginPath();
    cxt.setTransform(1,0,0,1,400,300,0,0,1);
//    cxt.csstransitions();
    cxt.rotate(degreeMin);
    cxt.moveTo(-5,40);
    cxt.lineTo(0,48);
    cxt.lineTo(5,40);
    cxt.lineTo(3,-180);
    cxt.lineTo(0,-185);
    cxt.lineTo(-3,-180);
    cxt.closePath();
    cxt.fillStyle = '#979797';
    cxt.fill();

    //时针绘制
    cxt.beginPath();
    cxt.setTransform(1,0,0,1,400,300,0,0,1);
    cxt.rotate(degreeHour);
    cxt.moveTo(-7,20);
    cxt.lineTo(0,28);
    cxt.lineTo(7,20);
    cxt.lineTo(5,-150);
    cxt.lineTo(0,-155);
    cxt.lineTo(-5,-150);
    cxt.closePath();
    cxt.fillStyle = '#979797';
    cxt.fill();

    //表针中间的白色点绘制
    cxt.beginPath();
    cxt.arc(0,0,6,0,2*Math.PI);
    cxt.fillStyle = '#ffffff';
    cxt.fill();
}

//根据当地时间初始化时钟
function pointerMove(){
   var disDegreeOfSecond = Math.PI/30;//一秒秒针走得度数
    var disDegreeOfMin = Math.PI/1800;//一秒分针走的度数
    var disDegreeOfHour = Math.PI/21600;//一秒时针走的度数
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var millSeconds = date.getMilliseconds();
    var degreeS,degreeM,degreeH;
    hour = date.getHours();//获得小时数
    minutes = date.getMinutes();//获得分钟数
    seconds = date.getSeconds();//获得秒数
    degreeS = seconds * disDegreeOfSecond;//现在秒针应在的位置（度数）
    degreeM = (seconds + minutes*60) * disDegreeOfMin;//现在分针的位置
    if(hour > 12){
        hour -= 12;
    }
    degreeH = (seconds + minutes * 60 + hour * 3600) * disDegreeOfHour;//初始化时针应在的位置
    clockPointerMove(degreeS,degreeM,degreeH); //初始化时钟
    function draw(){
        var drawStart = Date.now(),
            diff = drawStart - startTime;
        startTime = drawStart;
        //console.log(diff);
        degreeS += disDegreeOfSecond * diff/1000;
        degreeM += disDegreeOfMin * diff/1000;
        degreeH += disDegreeOfHour * diff/1000;
        cxt.clearRect(0,0,canvas.width,canvas.height);
        clockStyle();
        clockPointerMove(degreeS,degreeM,degreeH);
        requestAnimationFrame(draw);
    }
    var requestAnimationFrame = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame,
        startTime = window.mozAnimationStartTime || Date.now();
    requestAnimationFrame(draw);
}
