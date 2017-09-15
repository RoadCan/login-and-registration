
var open = document.querySelector('.login-box'),
    close = document.querySelectorAll('.enter-cut'),
    boxPanel = document.querySelector('.box');
open.onclick = function () {
    boxPanel.style.display = 'block'
}
close[0].onclick = function () {
    boxPanel.style.display = 'none'
}
close[1].onclick = function () {
    boxPanel.style.display = 'none'
}


function $(selector){
    return document.querySelector(selector)
}
function $$(selector){
    return document.querySelectorAll(selector)
}


$$('.abb .login').forEach(function(node){
  node.onclick = function(){
    $('.box').classList.remove('kuan')
    $('.box').classList.add('open')
  }
})
$$('.abb .signin').forEach(function(node){
  node.onclick = function(){
    $('.box').classList.remove('open')
    $('.box').classList.add('kuan')
  }
})



$('.enter form').addEventListener('submit', function(e){
  e.preventDefault()
  if(!/^\w{3,8}$/.test($('.enter input[name=username]').value)){
    $('.enter .warn').innerText = '用户名需输入3-8个字符，包括字母数字下划线'
    return false
  }
  if(!/^\w{6,10}$/.test($('.enter input[name="password"]').value)){
    $('.enter .warn').innerText = '密码需输入6-10个字符，包括字母数字下划线'
    return false
  }
  this.submit()
})

$('.enroll form').addEventListener('submit', function(e){
  e.preventDefault()
  if(!/^\w{3,8}$/.test($('.enroll input[name=username]').value)){
    $('.enroll .warn').innerText = '用户名需输入3-8个字符，包括字母数字下划线'
    return false
  }
  if(!/^\w{6,10}$/.test($('.enroll input[name="password"]').value)){
    $('.enroll .warn').innerText = '密码需输入6-10个字符，包括字母数字下划线'
    return false
  }
  if($('.enroll input[name="password"]').value !== $('.enroll input[name="password2"]').value){
    $('.enroll .warn').innerText = '密码不一致,请重新输入'
    return false
  }
  this.submit()
})
