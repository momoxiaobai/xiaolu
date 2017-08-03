/**
 * Created by Administrator on 2016/12/21.
 */
var
    canvas = document.getElementById('stock-canvas'),
    width = canvas.width,
    height = canvas.height,
    ctx = canvas.getContext('2d');
console.log(JSON.stringify(data[0])); // {"date":"20150602","open":4844.7,"close":4910.53,"high":4911.57,"low":4797.55,"vol":62374809900,"change":1.69}
ctx.clearRect(0, 0, width, height);
ctx.fillText('Test Canvas', 10, 10);

var
    OFFSET = 3700,
    pHeight = 0.5,
    lWidth = 1,
    pWidth = 8,
    x = 5;

var drawLine = function(high, low, open, close){
    //判断涨跌
    ctx.strokeStyle = close >= open ? "red" : "green";

    ctx.beginPath();
    ctx.lineWidth = lWidth;
    ctx.moveTo(x, (OFFSET - low) * pHeight);
    ctx.lineTo(x, (OFFSET - high) * pHeight);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = pWidth;
    ctx.moveTo(x, (OFFSET - open) * pHeight);
    ctx.lineTo(x, (OFFSET - close) * pHeight);
    ctx.stroke();

    //位置移动至下一天
    x += 10;
}

//for (var t of data) {
//    drawLine(t.high, t.low, t.open, t.close);
//}