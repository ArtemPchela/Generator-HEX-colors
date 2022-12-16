/**
 * for colrs generation
 * */

const hexColorNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hexBtn = document.querySelector('.colorBtn');
const bodyBtn = document.querySelector('body');
const hexName = document.querySelector('.hexName');

/**
 * @copy actions
 * **/
const btnCopy = document.getElementById('btnCopy')
const copyText = document.getElementById('copyText')

/**
 * @type modal
 */
const modal = document.querySelector('#modal');
const typeOfColor = document.getElementById('typeOfColor');


hexBtn.addEventListener('click', getHex);

function getHex() {
  let hexColor = "#";
  /*you may change in cycle for i<3*/
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexColorNum.length);
    hexColor += hexColorNum[random];
    bodyBtn.style.backgroundColor = hexColor;
    hexName.innerHTML = hexColor;
    typeOfColor.innerText = hexColor
  }
}

getHex()

btnCopy.addEventListener('click', function copyDivToClipboard() {
  var r = document.createRange();
  r.selectNode(document.getElementById("selected"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  modal.style.display = 'block';
})


modal.addEventListener('click', function () {
  modal.style.display = 'none';
});

// Close If Outside Click
window.addEventListener("click", outsideClick)
function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}
