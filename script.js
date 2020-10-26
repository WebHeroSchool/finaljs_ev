const button = document.getElementById('mainmenu__button_btn');
const level = document.getElementById('mainmenu__level');
const mainmenu = document.getElementById('mainmenu');
const firstlevel = document.getElementById('firstlevel');
const secondlevel = document.getElementById('secondlevel');
const thirdlevel = document.getElementById('thirdlevel');
const card = document.querySelectorAll('.card__img');
const cardFront = document.querySelectorAll('.card__front');
const cardBack = document.querySelectorAll('.card__back');

button.addEventListener('click', event => {
		if (level[0].checked) {
			mainmenu.classList.toggle('mainmenu__display');
			firstlevel.classList.remove('firstlevel');
			playGame('.card__back_imgfirstlevel', 4, 2);
		}
		else if (level[1].checked) {
			mainmenu.classList.toggle('mainmenu__display');
			firstlevel.classList.remove('firstlevel-table');
			secondlevel.classList.remove('secondlevel');
			playGame('.card__back_imgsecondlevel', 7, 5);
		}
		else if (level[2].checked) {
			mainmenu.classList.toggle('mainmenu__display');
			firstlevel.classList.remove('firstlevel-table');
			secondlevel.classList.remove('secondlevel-table');
			thirdlevel.classList.remove('thirdlevel');
			playGame('.card__back_imgthirdlevel', 11, 9)
	}
	});

function playGame(nameClass, num, max) {
	const cardImages= [];
	const cardBackImages = document.querySelectorAll(nameClass);
	card.forEach((item, m) => {
		card[m].onmouseover = () => cardFront[m].classList.add('card_hover');
		card[m].onmouseout = () => cardFront[m].classList.remove('card_hover');
	});
let min = 0;
x = Math.floor(Math.random() * (max - min + 1)) + min;
for(let i = 0; i < num - 1; i++) {
	if(i === x) {
		cardImages.push('./img/card_BUG.png');
	} else cardImages.push('./img/card_gameover.png');
};
cardBackImages.forEach((elem, i) => {
	cardBackImages[i].src = cardImages[i];
});
}

card.forEach((item, n) => {
	card[n].addEventListener('click', event => {
		card[n].classList.add('card__flip');
	cardBack[n].classList.remove('card__back');
	cardFront[n].classList.add('card__back');
	element.className = 'newelement';
	document.body.appendChild(element);
	element.addEventListener('click', click);
	});
});
const element = document.createElement('div');
const input = document.getElementsByName('levels');
const click =() => {
	mainmenu.classList.remove('mainmenu__display');
	firstlevel.classList.add('firstlevel');
	firstlevel.classList.remove('firstlevel-table');
	secondlevel.classList.add('secondlevel');
	secondlevel.classList.remove('secondlevel-table');
	thirdlevel.classList.add('thirdlevel');
	thirdlevel.classList.remove('thirdlevel-table');
	document.body.removeChild(element);
	input.forEach((item, index) => {
		item.checked = false;
	});
	card.forEach((item, index) => {
		card[index].classList.remove('card__flip');
		cardBack[index].classList.add('card__back');
		cardFront[index].classList.remove('card__back');
		card[index].removeEventListener('click', click);
	});
}