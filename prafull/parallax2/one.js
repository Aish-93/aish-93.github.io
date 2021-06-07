let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let rocks = document.getElementById('rocks');
let bird2 = document.getElementById('bird2');
let forest = document.getElementById('forest');
let btn = document.getElementById('btn');
let water = document.getElementById('water');
let header = document.getElementById('header');


window.addEventListener('scroll', function(){

    let value = window.scrollY;

    
    text.style.top = 45 + value* -0.1 + '%';
     
    // bird1.style.left = 40 + value * -0.2 + 'px';

    bird1.style.top = 10 + value * -0.2 + 'px';

    bird2.style.top = 50 +value*-0.5 + 'px';

    bird2.style.left = value *-5 + 'px';

    btn.style.marginTop = value* -0.12 + 'px';

    rocks.style.top = value*-0.12 + 'px';

    forest.style.top = value*0.25 + 'px';
    header.style.top = value*0.5 + 'px';
})

