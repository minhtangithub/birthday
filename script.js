const nums = document.querySelectorAll('.nums span');
const count = document.querySelector('.count');
const overlay = document.querySelector('.overlay');
const audio = document.querySelector('audio');
const btn = document.querySelector('button');
const p = document.querySelector('p');
function run() {
    nums.forEach(function(el, i) {
        el.addEventListener('animationend', function(e){
            if (e.animationName === 'goIn' && i!==(nums.length - 1)) {
                el.classList.remove('in');
                el.classList.add('out');
            }
            else if (e.animationName === 'goOut' && el.nextElementSibling) {
                el.nextElementSibling.classList.add('in');
            }
            else {
                overlay.classList.add('hide');
            }
        })
    })
}

audio.addEventListener('end', function() {
    audio.play();
})

btn.addEventListener('click', function() {
    audio.play();
    btn.classList.add('hide');
    p.classList.add('show');
})

run();