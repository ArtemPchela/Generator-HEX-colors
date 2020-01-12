const hexColorNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D' ,'E' ,'F'];
const hexBtn = document.querySelector('.colorBtn');
const bodyBtn = document.querySelector('body');
const hexName = document.querySelector('.hexName');

hexBtn.addEventListener('click', getHex);

function getHex() {
    let hexColor = "#";
    /*you may change in cycle for i<3*/
    for(let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random()*hexColorNum.length);
        hexColor +=hexColorNum[random];
        bodyBtn.style.backgroundColor = hexColor;
        hexName.innerHTML = hexColor;
    }
}
