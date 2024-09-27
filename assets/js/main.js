'use strict'
const phone = document.querySelector('.phone');
let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        phone.style.display = 'block';
    }
}, { threshold: 0.5 });
const b3 = document.getElementById('b3');
observer.observe(b3);

