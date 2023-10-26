let cardsArray = [
  {
    name: "Luffy",
    img: "./images/luffy.jpg",
  },
  {
    name: "Zoro",
    img: "./images/zoro.jpg",
  },
  {
    name: "Usopp",
    img: "./images/usopp.png",
  },
  {
    name: "Nami",
    img: "./images/nami.png",
  },
  {
    name: "Robin",
    img: "./images/robin.jpg",
  },
  {
    name: "Chopper",
    img: "./images/chopper.jpg",
  },
  {
    name: "Sanji",
    img: "./images/sanjii.jpg",
  },
  {
    name: "Franky",
    img: "./images/franky.jpg",
  },
  {
    name: "Brook",
    img: "./images/brook.jpg",
  },
  {
    name: "Jinbei",
    img: "./images/jinbei.jpg",
  },
];

const parentDiv = document.querySelector("#card-container");

const gameCard = cardsArray.concat(cardsArray);
console.log(gameCard);

let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

let clickCount = 0;

let firstCard = "";
let secondCard = "";

//Styling the matched cards
const matchedCard = () => {
  let card_selected = document.querySelectorAll(".card_selected");

  card_selected.forEach((curElement) => {
    curElement.classList.add("cardMatch");
  });
};

const resetGame = () => {
  firstCard = "";
  secondCard = "";
  clickCount = 0;

  let card_selected = document.querySelectorAll(".card_selected");

  card_selected.forEach((curElement) => {
    curElement.classList.remove("card_selected");
  });
};

// button shuffle
// document.querySelector(".shuffle").addEventListener("click", () => {
//   shuffledChild = true;
// });

parentDiv.addEventListener("click", (e) => {
  let curCard = e.target;

  if (curCard.id === "card-container") {
    return false;
  }

  clickCount++;

  if (clickCount < 3) {
    if (clickCount === 1) {
      firstCard = curCard.parentNode.dataset.name;
      curCard.parentNode.classList.add("card_selected");
    } else {
      secondCard = curCard.parentNode.dataset.name;
      curCard.parentNode.classList.add("card_selected");
    }

    if (firstCard !== "" && secondCard !== "") {
      if (firstCard === secondCard) {
        setTimeout(() => {
          matchedCard();
          resetGame();
        }, 1000);
      } else {
        setTimeout(() => {
          resetGame();
        }, 1000);
      }
    }
  }
});

for (let i = 0; i < shuffledChild.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = shuffledChild[i].name;
  // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;
  // childDiv.style.backgroundSize = "cover";
  // childDiv.style.backgroundRepeat = "no-repeat";

  const frontDiv = document.createElement("div");
  frontDiv.classList.add("front-card");
  const backDiv = document.createElement("div");
  backDiv.classList.add("back-card");
  backDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;
  backDiv.style.backgroundSize = "cover";
  backDiv.style.backgroundRepeat = "no-repeat";

  childDiv.appendChild(frontDiv);
  childDiv.appendChild(backDiv);

  parentDiv.appendChild(childDiv);
}
