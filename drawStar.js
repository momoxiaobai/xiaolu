/**
 * Created by Administrator on 2016/12/16.
 */
var drawStar = function(){
    this.x = 0;
    this.y = 0;
    this.time = 0;
    this.num = 0;
    this.xSpd = 0;
    this.ySpd = 0;
    this.init();
}
drawStar.prototype.init = function(){
    this.setXY();
    this.setStars();
}
drawStar.prototype.setXY = function(){
    this.xSpd = Math.random() * 0.6 - 0.3;
    this.ySpd = Math.random() * 0.6 - 0.3;
    this.x = Math.random() * 600 + 100;
    this.y = Math.random() * 300 + 150;
    this.time = Math.random() * 300 + 50;
    this.num = Math.floor(Math.random() * 7);
}
drawStar.prototype.update = function(){

    this.x += this.xSpd;
    this.y += this.ySpd;
    if(this.x < 100 || this.x > 700 || this.y < 150 || this.y > 450){
        this.init();
        return;
    }
   this.num += 1;
    if(this.num == 7){
        this.num = 0;
    }
}
drawStar.prototype.setStars = function(){
    var star = document.getElementsByClassName('image')[1];
    var _this = this;
        _this.num++;
        _this.num = _this.num % 7;
        ctx.drawImage(star,_this.num * 7,0,7,7,_this.x,_this.y,7,7);
}
