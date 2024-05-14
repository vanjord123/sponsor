// 首页的JS样式
const h = document.querySelectorAll('.box h1')

for(let i = 0; i < h.length; i++) {
  h[i].addEventListener('click', () => {
    // 排他思想
      // 移除所有
    document.querySelector('.box li .active').classList.remove('active')
      // 添加类
    h[i].classList.add('active')

    // 下面页面转换
      // 隐藏所有
    document.querySelector('.bottom .active').classList.remove('active')
      // 显示对应的item
    document.querySelector(`.bottom .item:nth-child(${i + 1})`).classList.add('active')
  })
}