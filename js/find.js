var btns = document.querySelectorAll('.button');
var load = document.querySelector('.logo-load');
var blockRight = document.querySelector('.block__right-side');
var btnSub = document.querySelector('.button-sub');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {

        load.classList.add('load-img');
        function afterRotate(){
            load.classList.add('hidden');
            blockRight.classList.remove('hidden');
            btnSub.classList.remove('hidden');
        };
        setTimeout(afterRotate, 3000);

    })
})