const cardsArray = [{
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
        card.setAttribute('img-id', i)
        card.addEventListener('click', flipCard)
        gameBoard.appendChild(card)
    }
}

function flipCard(event) {
    let cardType = event.target.getAttribute('img-id')
    cardSelected.push(cardsArray[cardType].name)
    cardImg.push(cardType)
    event.target.setAttribute('src', cardsArray[cardType].img)
    click++
    if (click > 0 && click % 2 === 0) {
        setTimeout(checkIfMatch, 500);
    }
}

function checkIfMatch() {
    let images = document.querySelectorAll('img')
    const firstCard = cardImg[0]
    const secondCard = cardImg[1]
    if (cardSelected[0] === cardSelected[1]) {
        images[firstCard].setAttribute('src', '')
        images[secondCard].setAttribute('src', '')
         alert ("That's a match")
    } else {
        images[firstCard].setAttribute('src', 'img/backOfCard.png');
        images[secondCard].setAttribute('src', 'img/backOfCard.png');
    }
    cardSelected = []
    cardImg = []
}

startGame()

playAgain.addEventListener('click', restartGame)

function restartGame() {
    gameBoard.innerHTML = ''
    startGame()
}
