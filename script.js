const menuButton=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',open);menuButton.textContent=open?'×':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰'}));
document.querySelector('#enquiry').addEventListener('submit',e=>{e.preventDefault();const result=e.currentTarget.querySelector('.form-result');result.textContent='Thank you for your enquiry. I will get back to you as soon as possible.';e.currentTarget.reset()});
document.querySelector('#appointment').addEventListener('submit',e=>{e.preventDefault();const result=e.currentTarget.querySelector('.form-result');result.textContent='Thank you. Your appointment request has been received and is not confirmed until I contact you.';e.currentTarget.reset()});
document.querySelector('#year').textContent=new Date().getFullYear();
