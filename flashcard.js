const cardsArray = [
	{
		name: 'Ace',
		img: 'img/Ace.png',
	},
	{
		name: 'King',
		img: 'img/king.png',
	},
	{
		name: 'Queen',
		img: 'img/queen.png',
	},
	{
		name: 'Joker',
		img: 'img/joker.png',
	},
	{
		name: 'Ten',
		img: 'img/ten.png',
	},
    {
		name: 'Nine',
		img: 'img/nine.png',
	},
	{
		name: 'Eight',
		img: 'img/eight.png',
	},
	{
		name: 'Seven',
		img: 'img/seven.png',
	},
	{
		name: 'Six',
		img: 'img/six.png',
	},
	{
		name: 'Five',
		img: 'img/five.png',
	},
    {
		name: 'Ace',
		img: 'img/Ace.png',
	},
	{
		name: 'King',
		img: 'img/king.png',
	},
	{
		name: 'Queen',
		img: 'img/queen.png',
	},
	{
		name: 'Joker',
		img: 'img/joker.png',
	},
	{
		name: 'Ten',
		img: 'img/ten.png',
	},
    {
		name: 'Nine',
		img: 'img/nine.png',
	},
	{
		name: 'Eight',
		img: 'img/eight.png',
	},
	{
		name: 'Seven',
		img: 'img/seven.png',
	},
	{
		name: 'Six',
		img: 'img/six.png',
	},
	{
		name: 'Five',
		img: 'img/five.png',
	},
]

const gameBoard = document.querySelector('.grid')
const playAgain = document.querySelector('button')

let cardSelected = []
let cardImg = []
let click = 0


function startGame() {

    cardsArray.sort(function () {
	return 0.5 - Math.random()
})
	for (let i = 0; i < cardsArray.length; i++) {
		let card = document.createElement('img')
		card.setAttribute('src', 'img/backOfCard.png')
		card.setAttribute('data-id', i)
		card.addEventListener('click', flipCard)
        gameBoard.appendChild(card)
	}
}

function flipCard(event) {
	let cardType = event.target.getAttribute('data-id')
	cardSelected.push(cardsArray[cardType].name)
	cardImg.push(cardType)
	event.target.setAttribute('src', cardsArray[cardType].img)
	click++
}
    startGame()

playAgain.addEventListener('click', restartGame)
function restartGame() {
    gameBoard.innerHTML = ''
    startGame()
}
