let selectElem = document.querySelector('#theme-select');
let pageBody = document.querySelector('body');
let pageHeading = document.querySelector('h1');
let pageSubtitle = document.querySelector('h4');
let pageImage = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'l') {
        pageBody.style.backgroundColor = 'white';
        pageBody.style.color = 'black';
        pageHeading.style.color = 'black';
        pageSubtitle.style.color = '#3469A9;';
        pageImage.src = 'byui-logo-blue.webp';
    } else if (current === 'd') {
        pageBody.style.backgroundColor = '#333333';
        pageBody.style.color = 'white';
        pageHeading.style.color = 'white';
        pageSubtitle.style.color = '#3469A9;';
        pageImage.src = 'image.png';
    } else {
        // default
        document.body.style.backgroundImage = "none";
    }
}