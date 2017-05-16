/**
 * Created by Administrator on 2017/5/11.
 */
var canvas = document.getElementById('canvas');
var cxt = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
function clockStyle(){
    canvas.width = 800;
    canvas.height = 600;
    var cxt = canvas.getContext('2d');
    //时钟的外环
    cxt.beginPath();
    cxt.arc(400,300,300,0,2*Math.PI);
    cxt.strokeStyle = "#979797";
    cxt.fillStyle = "#979797";
    cxt.fill();
    cxt.beginPath();
    cxt.arc(400,300,270,0,2*Math.PI);
    cxt.fillStyle = '#FFFFFF';
    cxt.fill();

    //时钟的时刻刻度线
    var degree = 0;
    var degreeNum = 0;
    var dis_degree = 6;
    var big_radius,small_radius;
    var bigX,bigY,smallX,smallY,numX,numY;
    big_radius = 265;
    small_radius = 230;
    var string = 6;
    for(var i = 0;i < 60;i++){
        if(degree%30 == 0){
            cxt.beginPath();
            bigX = 400+big_radius*Math.sin(degree*Math.PI/180); //时钟刻度外面大的半径的坐标
            bigY = 300+big_radius*Math.cos(degree*Math.PI/180);
            smallX = 400+small_radius*Math.sin(degree*Math.PI/180);//时钟刻度外面小的半径的坐标
            smallY = 300+small_radius*Math.cos(degree*Math.PI/180);
            numX = 400+(small_radius-28)*Math.sin(degreeNum*Math.PI/180);//时钟刻度数字坐标
            numY = 300+(small_radius-28)*Math.cos(degreeNum*Math.PI/180);
            cxt.font = 'bold 55px Arial';//设置时钟数字样式
            cxt.textAlign = 'center';
            cxt.textBaseline = 'middle';
            cxt.fillStyle = '#979797';
            cxt.moveTo(bigX,bigY); //设置刻度图像
            cxt.lineTo(smallX,smallY);
            cxt.lineWidth = 10;
            cxt.fillText(string.toString(),numX,numY);//设置数字图形
            cxt.fill();
            cxt.strokeStyle = "#979797";
            cxt.stroke();
            string = string + 1;
            if(string == 13){
                string = string - 12;
            }
        }else{
            cxt.beginPath();
            cxt.moveTo(400+big_radius*Math.sin(degree*Math.PI/180),300+big_radius*Math.cos(degree*Math.PI/180));
            cxt.lineTo(400+small_radius*Math.sin(degree*Math.PI/180),300+small_radius*Math.cos(degree*Math.PI/180));
            cxt.lineWidth = 3;//细刻度
            cxt.strokeStyle = "#979797";
            cxt.stroke();
        }
        degree -= dis_degree;
       degreeNum -= (dis_degree);
    }
//设置时钟指针
}
