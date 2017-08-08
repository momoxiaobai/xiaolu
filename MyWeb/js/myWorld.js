/**
 * Created by Administrator on 2017/7/20.
 */
//window.onload = function(){
//    if(flag == "skill"){
//
//    }
//}
//折叠展开区域随滚轴滚动
function moveScroll(){
    var fold = document.querySelector('.fold');
    addEvent(window,'scroll',function(e){
//        alert(document.body.scrollTop)
        fold.style.top = document.body.scrollTop +'px';
    })
}
//切换文章类型
function changeType(){
    var articles = document.querySelector('.articles');
    var myBlog = document.querySelector('.myBlog');

    var skill = document.getElementById('skill');
    var lucky = document.getElementById('lucky');

    addEvent(skill,'click',function(){
        myBlog.style.display = 'block';
        articles.style.display = 'none';
        flag = 'skill';
    })
    addEvent(lucky,'click',function(){
        myBlog.style.display = 'none';
        articles.style.display = 'block';
        flag = 'lucky';
    })
}

moveScroll();
changeType();