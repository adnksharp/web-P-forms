const sample = document.querySelector('.sWork');
let c = true;

sample.addEventListener('click', function () {
    let theme1 = document.querySelector('.theme-1'), theme2 = document.querySelector('.theme-2');
    c = !c;
    if (c) {
        theme1.removeAttribute('hidden');
        theme2.setAttribute('hidden', 'hidden');
    }
    else {
        theme2.removeAttribute('hidden');
        theme1.setAttribute('hidden', 'hidden');
    }
});