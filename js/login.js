//查找元素
var logliEle = document.getElementsByClassName('logli');
var wxlogEle = logliEle[1];
var zhlogEle = logliEle[0];
//查找要修改的元素
var wxTDEle = document.getElementById('wx_TwoDimensional');
var passwordEle = document.getElementById('password');
//绑定事件处理函数
wxlogEle.onclick = function(){
    this.classList.add('seleColor');
    zhlogEle.classList.remove('seleColor');
    //修改元素
    wxTDEle.style.display = "inline";
    passwordEle.style.display = "none";
}
//绑定事件处理函数
zhlogEle.onclick = function(){
    this.classList.add('seleColor');
    wxlogEle.classList.remove('seleColor');
    //修改元素
    wxTDEle.style.display = "none";
    passwordEle.style.display = "inline";
    
}