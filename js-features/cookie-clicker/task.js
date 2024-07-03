const cookie = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');

let clicker__counter = 0;
let isCookieSmall = false;

cookie.addEventListener('click', () => {
    clicker__counter++;
    counterElement.textContent = clicker__counter;

    if (isCookieSmall) {
        cookie.style.width = '200px';
        cookie.style.height = '125px';
    } else {
        cookie.style.width = '150px';
        cookie.style.height = '100px';
    }

    isCookieSmall = !isCookieSmall;
});