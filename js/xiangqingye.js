//查找 class="detail-r-d0" 元素
var parent = document.getElementById('detail-r-d0');
console.log(parent);

//查找parent下的所有的detail-r-d0-d1
var secendChild = parent.getElementsByClassName('detail-r-d0-d1');
console.log(secendChild[0]);

//查找secendChild下的所有的div
var divs = secendChild[0].getElementsByTagName('div');
console.log(divs);

//查找parent下的所有li
var lis = parent.querySelectorAll("li");
console.log(lis);

// 查找 lis 下的所有 span 元素
var spans = parent.getElementsByTagName('span');
console.log(spans[0]);
console.log(spans[0].style.backgroundPosition)


//用 for 循环遍历 spans
for( var i = 0; i < divs.length; i++ ){
    lis[i].index = i;
    lis[i].onmousemove = function(){
        for( var j = 0; j < divs.length; j++ ){
            divs[j].className = "";
            lis[j].className = "";
        }
        this.className = "displayInline";
        divs[this.index].className = "displayInline";
        if( this.index == 0 ){
            spans[this.index].classList.add("det-r-d2-d1-p11");
            spans[1].classList.remove("det-r-d2-d1-p22");
            spans[2].classList.remove("det-r-d2-d1-p33");
            spans[3].classList.remove("det-r-d2-d1-p44");
            spans[4].classList.remove("det-r-d2-d1-p55");
            spans[5].classList.remove("det-r-d2-d1-p66");
        }else if( this.index == 1 ){
            spans[this.index].classList.add("det-r-d2-d1-p22");
            spans[0].classList.remove("det-r-d2-d1-p11");
            spans[2].classList.remove("det-r-d2-d1-p33");
            spans[3].classList.remove("det-r-d2-d1-p44");
            spans[4].classList.remove("det-r-d2-d1-p55");
            spans[5].classList.remove("det-r-d2-d1-p66");
        }else if( this.index == 2 ){
            spans[this.index].classList.add("det-r-d2-d1-p33");
            spans[1].classList.remove("det-r-d2-d1-p22");
            spans[0].classList.remove("det-r-d2-d1-p11");
            spans[3].classList.remove("det-r-d2-d1-p44");
            spans[4].classList.remove("det-r-d2-d1-p55");
            spans[5].classList.remove("det-r-d2-d1-p66");
        }else if( this.index == 3 ){
            spans[this.index].classList.add("det-r-d2-d1-p44");
            spans[1].classList.remove("det-r-d2-d1-p22");
            spans[0].classList.remove("det-r-d2-d1-p11");
            spans[2].classList.remove("det-r-d2-d1-p33");
            spans[4].classList.remove("det-r-d2-d1-p55");
            spans[5].classList.remove("det-r-d2-d1-p66");
        }else if( this.index == 4 ){
            spans[this.index].classList.add("det-r-d2-d1-p55");
            spans[5].classList.remove("det-r-d2-d1-p66");
            spans[1].classList.remove("det-r-d2-d1-p22");
            spans[0].classList.remove("det-r-d2-d1-p11");
            spans[2].classList.remove("det-r-d2-d1-p33");
            spans[3].classList.remove("det-r-d2-d1-p44");
        }else{
            spans[this.index].classList.add("det-r-d2-d1-p66");
            spans[1].classList.remove("det-r-d2-d1-p22");
            spans[0].classList.remove("det-r-d2-d1-p11");
            spans[2].classList.remove("det-r-d2-d1-p33");
            spans[3].classList.remove("det-r-d2-d1-p44");
            spans[4].classList.remove("det-r-d2-d1-p55");
        }
    }
}


// 查找可能触发事件的元素

// 查找父元素
var productL = document.getElementsByClassName('product-l');
console.log(productL[0]);

// 查找父元素下的第二个子元素
var probot = productL[0].getElementsByClassName('pro-l-bot');
console.log(probot[0]);

// 查找第二个子元素下的 div
var items = probot[0].querySelectorAll('div');
console.log(items);

// 获取 pro-l-top 即父元素下的第一个子元素
var protop = productL[0].getElementsByClassName('pro-l-top');
console.log(protop[0]);





// 绑定事件处理函数 鼠标移入事件 第二子元素下的 div 添加外边框 .pro-item-border
for(var x = 0; x < items.length; x++){
    items[x].index = x;
    items[x].onmousemove = function(){
        // 查找div下的所有img
        var itemsImg = items[this.index].querySelector('img');
        // 查找要修改的元素
        // 获取 protop 下的图片
        var protopImg = protop[0].querySelector("img");
        for(var a = 0;a < items.length; a++ ){
            items[a].style.borderColor = '';
        }
        items[this.index].style.borderColor = "#ff734c";
        protopImg.src = itemsImg.src;
    }
}

var scrollTop = 0 ;
window.onscroll=function(){
    scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    console.log(scrollTop);
    var toTop=document.getElementById("toTop");
    var toTop2=document.getElementById('toTop2');
    //希望当滚动距离>=500时，让toTop显示
    if(scrollTop >= 910 && scrollTop <= 12740){
        toTop.style.display="block";
    }else{//否则如果滚动距离<500时，让toTop隐藏
        toTop.style.display="none";
    }
    if(scrollTop >= 12856 && scrollTop <= 13650){
        toTop2.style.display="block";
    }else{
        toTop2.style.display="none";
    }
}
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
console.log(a2);
a2.onclick = function(e){
    e.preventDefault();
    // 总距离
    var dist = scrollTop;
    // 总步数
    var steps = 50;
    // 总时间
    var dura = 500;
    // 可算出
    // 每步走多长
    var step = 200;
    // 每步间隔时间
    var interval = dura/steps;
    var timer = setInterval(() => {
        window.scrollBy(0,step);
        if(scrollTop >= 12756){
            clearInterval(timer);
        }
    }, interval);
}
a3.onclick = function(e){
    e.preventDefault();
    // 总距离
    var dist = scrollTop;
    // 总步数
    var steps = 50;
    // 总时间
    var dura = 500;
    // 可算出
    // 每步走多长
    var step = 200;
    // 每步间隔时间
    var interval = dura/steps;
    var timer = setInterval(() => {
        window.scrollBy(0,step);
        if(scrollTop >= 13657){
            clearInterval(timer);
        }
    }, interval);
}
a1.onclick = function(e){
    e.preventDefault();
    // 总距离
    var dist = scrollTop;
    // 总步数
    var steps = 50;
    // 总时间
    var dura = 500;
    // 可算出
    // 每步走多长
    var step = 100;
    // 每步间隔时间
    var interval = dura/steps;
    var timer = setInterval(() => {
        window.scrollBy(0,-step);
        steps--;
        if(scrollTop <= 900){
            clearInterval(timer);
        }
    }, interval);
}