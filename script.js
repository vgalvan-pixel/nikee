document.addEventListener('DOMContentLoaded',function(){
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    menuToggle.addEventListener('click',function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    const hidden = mainNav.getAttribute('aria-hidden') === 'true';
    mainNav.setAttribute('aria-hidden', String(!hidden));
    });
    
    
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();
    });

   