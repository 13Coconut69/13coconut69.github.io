window.onload = setTimeout(()=>{
    document.getElementsByClassName('logo')[0].classList.add('loaded');
    document.getElementsByClassName('header')[0].classList.add('loaded');
}, 500);

setTimeout(()=>{document.getElementsByClassName('content')[0].style.display = 'block'}, 1200);

setTimeout(()=>{
    const items = document.getElementsByClassName('content')[0].children;
    Array.from(items).forEach(async (element, index) => {
        await new Promise(r => setTimeout(r, 300+index*300));
        element.classList.remove('hidden');
    });
}, 1100)