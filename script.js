const nums = document.querySelectorAll('.nums span');
const count = document.querySelector('.count');
const overlay = document.querySelector('.overlay');
const audio = document.querySelector('audio');
function run() {
    nums.forEach(function(el, i) {
        el.addEventListener('animationend', function(e){
            console.log(e.animationName);
            if (e.animationName === 'goIn' && i!==(nums.length - 1)) {
                el.classList.remove('in');
                el.classList.add('out');
            }
            else if (e.animationName === 'goOut' && el.nextElementSibling) {
                el.nextElementSibling.classList.add('in');
            }
            else {
                overlay.classList.toggle('hide');
                audio.play();
            }
        })
    })
}

audio.addEventListener('end', function() {
    audio.play();
})
run();