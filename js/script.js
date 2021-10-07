const pageHeader = document.querySelector('.page-header')
const logo = document.querySelector('.navbar-brand')
const homeSection = document.getElementById('home')
const closeHamburgerBtn = document.querySelector('#nav-icon')

AOS.init()

let i = 0
let txt = 'Hello, World!'; /* The text */
let speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("profile-h1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()

let options = {
  root: null,
  threshold: 0,
  rootMargin: '-10px'
}

let sectionObserver = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      pageHeader.classList.add('intersected')
      logo.src = './img/MJ-Logo-Design-01.svg'
    } else {
      pageHeader.classList.remove('intersected')
      logo.src = './img/MJ-Logo-Design-01-White-BG.png'
    }
  })
}, options)

sectionObserver.observe(homeSection)

closeHamburgerBtn.addEventListener('click', () =>  closeHamburgerBtn.classList.toggle('open'))
document.body.addEventListener('click', () => {
  let collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
  let collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})
})