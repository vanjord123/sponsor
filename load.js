// 这是加载页的JS

// 获取按钮
const btn = document.querySelector('.btn')
const h = document.querySelector('h1')

// 5秒后按钮出现,并且文字消失
setTimeout(function () {
  alert('鼠标停留在文字上可以唤起对应的特效')
  h.style.display = 'none'
  btn.style.display = 'block'
},5000)

// 按钮点击事件，跳转至首页
btn.addEventListener('click', function() {
    location.href = './zhuye.html'
})
