// image 2

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let firstImageSource = 'images/' + randomNumber1 + '.png';
document.querySelectorAll('img')[0].setAttribute('src', firstImageSource);

//image one
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let secondImageSource = 'images/' + randomNumber2 + '.png';
document.querySelectorAll('img')[1].setAttribute('src', secondImageSource);

if (randomNumber1 > randomNumber2) {
  // document.querySelectorAll('img')[0].setAttribute('src', 'images/flag.png');
  document.querySelectorAll('h4')[0].innerText = 'Player One Won';
} else if (randomNumber1 < randomNumber2) {
  // document.querySelectorAll('img')[1].setAttribute('src', 'images/flag.png');
  document.querySelectorAll('h4')[0].innerText = 'Player Two Won';
} else {
  document.querySelectorAll('h4')[0].innerText = 'Draw';
}
