// change navbar styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


// show/hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach( faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    // change icon
    const icon = faq.querySelector('.faq__icon i');
    if(icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus';
    } else {
      icon.className = 'uil uil-plus';
    }
  })
})

// Show/ Hide nav menu

const open = document.querySelector('#open-menu-btn');
const close = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav__menu');

open.addEventListener('click', () => {
  menu.style.display = 'flex';
  close.style.display= 'inline-block';
  open.style.display = 'none';
} )

close.addEventListener('click', ()=> {
  menu.style.display = 'none';
  open.style.display ='inline-block';
  close.style.display = 'none';
})

