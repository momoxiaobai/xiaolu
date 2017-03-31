/**
 * Created by Administrator on 2017/3/30.
 */
window.onload = function(){
    createBayMax();
}

function createBayMax(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var width = canvas.width = 405;
    var height = canvas.height = 600;

    context.lineWidth = 2.5;
    context.fillStyle = "#AF2024";//放到fillRect()后面时候画布整个胃黑色，fillStyle不管用了
    context.strokeStyle = '#000000';
    context.fillRect(0,0,width,height);
//    context.fill();

    //大白的头
    context.beginPath();
    context.translate(260,120);
    context.rotate(2.7);
    context.scale(1,0.6);
//    context.strokeStyle = '#000000';
    context.fillStyle = '#F1F6F9';
    context.arc(100,80,45,0,2*Math.PI);
    context.fill();
    context.stroke();
    //大白的眼睛
    context.beginPath();
    context.setTransform(1,0,0,1,0,0);
//    context.strokeStyle = '#000000';
    context.fillStyle = '#000000';
    context.arc(130,128,5,1.9*Math.PI,-0.1*Math.PI);
    context.arc(169,107,5,1.9*Math.PI,-0.1*Math.PI);
    context.fill();
    context.stroke();

    //大白的左肩膀
    context.beginPath();
    context.moveTo(120,210);
    context.quadraticCurveTo(105,167,125,150);
//    context.moveTo(120,210);
//    context.quadraticCurveTo(111,178,115,165);
    context.moveTo(102,200);
    context.quadraticCurveTo(100,180,115,165);
    context.moveTo(102,200);
    context.quadraticCurveTo(110,200,120,210);
//    context.closePath();

    context.strokeStyle = '#000000';
    context.fillStyle = '#F1F6F9';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(120,220);
    context.lineTo(116,165);
    context.lineTo(102,200);
    context.fillStyle = '#F1F6F9';
    context.strokeStyle = '#F1F6F9';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(102,200);
    context.quadraticCurveTo(105,200,120,220);
    context.moveTo(120,220);
    context.quadraticCurveTo(105,167,125,150);
    context.strokeStyle = '#000000';
    context.stroke();

    context.beginPath();
    context.moveTo(103,200);
    context.quadraticCurveTo(90,180,80,170);
    context.lineTo(86,159);
    context.quadraticCurveTo(83,145,73,159);
    context.lineTo(73,168);
    context.bezierCurveTo(59,182,76,190,82,179);
//    context.strokeStyle = '#000000';
//    context.fillStyle = '#F1F6F9';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(72,163);
    context.quadraticCurveTo(63,155,45,186);
    context.moveTo(45,186);
    context.bezierCurveTo(40,200,73,286,88,271);
    context.moveTo(88,271);
    context.bezierCurveTo(70,279,139,270,120,220);
    context.moveTo(120,220);
    context.quadraticCurveTo(105,167,125,150);
    context.strokeStyle = '#000000';
    context.fillStyle = '#F1F6F9';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(122,221);
    context.lineTo(88,272);
    context.lineTo(44,187);
    context.lineTo(71,162);
    context.moveTo(102,200);
    context.quadraticCurveTo(105,200,120,220);
    context.moveTo(103,200);
    context.quadraticCurveTo(90,180,80,170);

    context.moveTo(73,168);
    context.bezierCurveTo(59,182,76,190,82,179);
    context.lineTo(80,170);
    context.fillStyle = '#F1F6F9';
    context.moveTo(73,168);
    context.lineTo(72,163);
    context.fill();

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(73,168);
//    context.moveTo(72,168);
    context.bezierCurveTo(59,182,76,190,82,179);
    context.moveTo(73,168);
    context.lineTo(72,163);
    context.moveTo(102,200);
    context.quadraticCurveTo(105,200,120,220);
    context.moveTo(103,200);
    context.quadraticCurveTo(90,180,80,170);
    context.moveTo(45,185);
    context.lineTo(46,189);
//    context.bezierCurveTo(44,200,63,240,96.8,258.2);
    context.moveTo(120,220);
    context.lineTo(121,223);
    context.strokeStyle = '#000000';
    context.stroke();


    //大白的左手指
    context.beginPath();
    context.moveTo(73,163);
    context.bezierCurveTo(80,135,50,135,64,162);
    context.quadraticCurveTo(69,159,73,163);
    context.moveTo(62,162);
    context.bezierCurveTo(60,145,33,145,53,169.9);
    context.moveTo(53,171);
    context.bezierCurveTo(47,155,20,155,45,182.9);
    context.fillStyle = '#F1F6F9';
    context.strokeStyle = '#000000';
    context.fill();
    context.stroke();


//大白的肚子
    context.beginPath();
    context.moveTo(120,217);
    context.bezierCurveTo(140,259,75,269,105,371);//身子左半侧

    context.bezierCurveTo(150,455,250,455,300,374);//身子左半侧到右半侧

    context.bezierCurveTo(340,265,250,260,250,180);//身子右半侧


    context.quadraticCurveTo(240,140,188,119);//身子右半侧到头


    context.quadraticCurveTo(160,155,124,150);//下巴围住
    context.fillStyle = '#F1F6F9';
    context.strokeStyle = '#000000';
    context.fill();
    context.stroke();

//大白的左腿

    context.beginPath();
    context.moveTo(130,405);//左腿左侧开始坐标
    context.quadraticCurveTo(115,430,150,490);//左腿左半侧
    context.quadraticCurveTo(175,515,200,490);//左腿下面
    context.lineTo(200,434);//左腿右侧
    context.quadraticCurveTo(165,430,130,405);//左侧右侧包围

    context.fillStyle = '#F1F6F9';
    context.strokeStyle = '#000000';
    context.fill();
    context.stroke();

//大白的右腿

    context.beginPath();
    context.moveTo(200,434);//右腿中间
    context.lineTo(200,490);

    context.quadraticCurveTo(225,515,250,490);//右腿下面
    context.quadraticCurveTo(288,430,274,405);//右腿右半侧
    context.quadraticCurveTo(250,430,200,434);//右腿右侧和中间围住
    context.fillStyle = '#F1F6F9';
    context.strokeStyle = '#000000';
    context.fill();
    context.stroke();
//大白的右胳膊

    context.beginPath();
    context.moveTo(210,130);
    context.quadraticCurveTo(390,180,345,360);
    context.bezierCurveTo(330,390,310,370,330,355);
    context.quadraticCurveTo(330,350,325,350);
    context.bezierCurveTo(321,369,300,365,310,346);

    context.bezierCurveTo(317,255,247,245,250,180);//身子右半侧
    context.quadraticCurveTo(240,140,188,119);//身子右半侧到头
    context.fillStyle = '#F1F6F9';
    context.strokeStyle = '#000000';
    context.fill();
    context.stroke();

    //大白的徽章
    context.beginPath();
//    context.moveTo(210,170);
    context.arc(210,170,10,0,2*Math.PI);
    context.moveTo(200,170);
    context.lineTo(205,170);
    context.lineTo(207.5,165);
    context.lineTo(212.5,165);
    context.lineTo(215,170);
    context.lineTo(220,170);

    context.fillStyle = '#F1F6F9';
    context.strokeStyle = '#000000';
    context.fill();
    context.stroke();
}
