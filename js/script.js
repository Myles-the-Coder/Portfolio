const pageHeader = document.querySelector('.page-header');
const logo = document.querySelector('.navbar-brand');
const homeSection = document.getElementById('home');
const closeHamburgerBtn = document.querySelector('#nav-icon');

AOS.init();

let i = 0;
let txt = 'Hello, World!'; /* The text */
let speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
	if (i < txt.length) {
		document.getElementById('profile-h1').innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

typeWriter();

let options = {
	root: null,
	threshold: 0,
	rootMargin: '-5px',
};

let sectionObserver = new IntersectionObserver(function (entries, observer) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			pageHeader.classList.add('intersected');
			logo.src = './img/MJ-Logo-Design-01.svg';
		} else {
			pageHeader.classList.remove('intersected');
			logo.src = './img/MJ-Logo-Design-01-White-BG.png';
		}
	});
}, options);

sectionObserver.observe(homeSection);

const navbarNav = document.querySelector('#navbar-nav')
const navbarNavItems = document.querySelectorAll('.nav-item')

closeHamburgerBtn.addEventListener('click', () =>
	closeHamburgerBtn.classList.toggle('open')
);

const navbarSupportedContent = document.querySelector('#navbarSupportedContent')

document.body.addEventListener('click', () => {
  if (navbarSupportedContent.classList.contains('show')) {
    let collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    let collapseList = collapseElementList.map(collapseEl => new bootstrap.Collapse(collapseEl));
    closeHamburgerBtn.classList.remove('open')
  } else {
    return
  }
});

const form = document.getElementById('contact-form');

async function handleSubmit(e) {
	e.preventDefault();
	let status = document.getElementById('my-form-status');
	let data = new FormData(event.target);
	fetch(e.target.action, {
		method: form.method,
		body: data,
		headers: {
			Accept: 'application/json',
		},
	})
		.then(res => {
			status.innerText = 'Thanks for your submission!';
      status.classList.add('success')
			form.reset();
		})
		.catch(err => {
			status.innerText = 'There was a problem submitting your form';
      status.classList.add('error')
    });
}
form.addEventListener('submit', handleSubmit);
