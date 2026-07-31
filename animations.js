const elementos = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

elementos.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.10}s`; // 0.15s de diferencia entre cada uno
    observer.observe(el);
});