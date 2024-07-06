let body = document.querySelector('body')
let hero = document.getElementById('hero-name')
let mainimg = document.getElementById('main-img')
let avengers = document.querySelectorAll('.character')
mainimg.className = 'none'
avengers.forEach((avenger) => {
    avenger.addEventListener('click', (e) => {
        url = e.target.src
        name = e.target.alt
        // name.classList.add('img')
        mainimg.classList.add('img')
        setTimeout(() => {
            mainimg.classList.remove('img')
            // name.classList.remove('img')
        }, 500)
        // setTimeout(() => {
        //     name.classList.remove('img')
        // }, 500)
        mainimg.src = url
        hero.innerHTML = name
        
        switch (name) {
            case 'Super Man':
                body.style.background = ' linear-gradient(184deg, rgba(0,0,0,1) 0%, rgba(190,8,8,1) 52%, rgba(46,45,45,1) 100%, rgba(218,31,18,1) 100%)';
                break;
                case 'Iron Man':
                body.style.background = 'linear-gradient(184deg, rgba(0,0,0,1) 0%, rgba(227,0,0,1) 52%, rgba(46,45,45,1) 100%, rgba(218,31,18,1) 100%)';
                break;
                case 'Hulk':
                body.style.background = 'linear-gradient(184deg, rgba(0,0,0,1) 0%, rgba(41,161,27,1) 52%, rgba(46,45,45,1) 100%, rgba(218,31,18,1) 100%)';
                break;
                case 'Captain America':
                body.style.background = 'linear-gradient(184deg, rgba(0,0,0,1) 0%, rgba(27,95,161,1) 52%, rgba(46,45,45,1) 100%, rgba(218,31,18,1) 100%)';
                break;
                case 'XMen':
                body.style.background = 'linear-gradient(184deg, rgba(0,0,0,1) 0%, rgba(233,211,0,1) 52%, rgba(46,45,45,1) 100%, rgba(218,31,18,1) 100%)';
                break;
                case 'Black Panther':
                body.style.background = 'linear-gradient(184deg, rgba(14,14,14,1) 0%, rgba(0,0,0,1) 52%, rgba(23,23,22,1) 100%)';
                break;
                case 'Spider Men':
                body.style.background = 'linear-gradient(184deg, rgba(0,0,0,1) 0%, rgba(207,29,18,1) 52%, rgba(46,45,45,1) 100%, rgba(218,31,18,1) 100%)';
                break;
                case 'Thor':
                body.style.background = 'linear-gradient(184deg, rgba(0,0,0,1) 0%, rgba(207,29,18,1) 52%, rgba(46,45,45,1) 100%, rgba(218,31,18,1) 100%)';
                break;
                case 'Thanos':
                body.style.background = 'linear-gradient(184deg, rgba(0,0,0,1) 0%, rgba(146,0,118,1) 52%, rgba(46,45,45,1) 100%, rgba(218,31,18,1) 100%)';
                break;
                case 'Bat Men':
                body.style.background = 'linear-gradient(184deg, rgba(38,38,39,1) 0%, rgba(0,0,0,1) 52%, rgba(36,36,37,1) 100%, rgba(218,31,18,1) 100%)';
                break;
                case 'Venom':
                body.style.background = 'linear-gradient(184deg, rgba(0,0,0,1) 0%, rgba(6,27,89,1) 52%, rgba(46,45,45,1) 100%, rgba(218,31,18,1) 100%)';
                break;
                case 'Dr Strange':
                body.style.background = 'linear-gradient(184deg, rgba(0,0,0,1) 0%, rgba(207,29,18,1) 52%, rgba(46,45,45,1) 100%, rgba(218,31,18,1) 100%)';
                break;
                case 'Black Widow':
                body.style.background = 'linear-gradient(184deg, rgba(60,55,55,1) 0%, rgba(0,0,0,1) 52%, rgba(67,67,64,1) 100%)';
                break;
                case 'Lakri Wala':
                body.style.background = 'linear-gradient(184deg, rgba(14,14,14,1) 0%, rgba(140,58,58,1) 52%, rgba(23,23,22,1) 100%)';
                break;
                case 'Batista':
                body.style.background = 'linear-gradient(184deg, rgba(0,0,0,1) 0%, rgba(183,132,65,1) 52%, rgba(0,0,0,1) 100%)';
                break;
                case 'Chiku':
                body.style.background = 'linear-gradient(184deg, rgba(0,0,0,1) 0%, rgba(207,29,18,1) 52%, rgba(46,45,45,1) 100%, rgba(218,31,18,1) 100%';
                break;
        
            default:
                break;
        }
    });
})
let black = document.querySelector('.black')
