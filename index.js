const tassel = document.getElementsByClassName('tassel')[0];

const glow = document.getElementsByClassName('glow')[0].classList;

const firecrackers = new Audio('firecrackers.mp3');


tassel.addEventListener('click', function () { 
    if (glow.contains('glow') == true){
        glow.remove('glow');
    } else if (glow.contains('glow') == false){
        glow.add('glow');
        firecrackers.play();
    }
});
