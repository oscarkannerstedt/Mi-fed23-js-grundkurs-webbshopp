const cart = document.querySelector("#shoppingCart");

const products = [
  {
    id: 1,
    name: "Bacon in the Sun",
    price: 10,
    category: "Donuts",
    rating: 5,
    img: [
      {
        src: "assets/photos/bacon-in-the-sun.png",
        alt: "Bacon in the sun donut.",
      },
    ],
    count: 0,
  },
  {
    id: 2,
    name: "Blueberry Lemonade",
    price: 10,
    category: "Donuts",
    rating: 3,
    img: [
      {
        src: "assets/photos/Blueberry-lemonade.jpg",
        alt: "Blueberry lemonade donut.",
      },
    ],
    count: 0,
  },
  {
    id: 3,
    name: "Beach Ball",
    price: 10,
    category: "Donuts",
    rating: 3,
    img: [
      {
        src: "assets/photos/beach-ball.png",
        alt: "Beach ball donut.",
      },
    ],
    count: 0,
  },
  {
    id: 4,
    name: "Blueberry Pancake",
    price: 10,
    category: "Donuts",
    rating: 5,
    img: [
      {
        src: "assets/photos/blueberry-pancake.png",
        alt: "Blueberry pancake donut.",
      },
    ],
    count: 0,
  },
  {
    id: 5,
    name: "Cinnamon Bun",
    price: 10,
    category: "Donuts",
    rating: 4,
    img: [
      {
        src: "assets/photos/cinnamon-bun.png",
        alt: "Cinnamon bun donut.",
      },
    ],
    count: 0,
  },
  {
    id: 6,
    name: "Chocolate Explosion",
    price: 10,
    category: "Donuts",
    rating: 4,
    img: [
      {
        src: "assets/photos/Chocolate-Explosion.png",
        alt: "Chocolate explosion donut.",
      },
    ],
    count: 0,
  },
  {
    id: 7,
    name: "Chocolate Caramel Crunch",
    price: 10,
    category: "Donuts",
    rating: 4,
    img: [
      {
        src: "assets/photos/chocolate-caramel-crunch.png",
        alt: "Chocolate caramel crunch donut.",
      },
    ],
    count: 0,
  },
  {
    id: 8,
    name: "Cookies & Cream",
    price: 10,
    category: "Donuts",
    rating: 4,
    img: [
      {
        src: "assets/photos/cookies&cream.png",
        alt: "Cookies & cream donut.",
      },
    ],
    count: 0,
  },
  {
    id: 9,
    name: "French Toast",
    price: 10,
    category: "Donuts",
    rating: 4,
    img: [
      {
        src: "assets/photos/french-toast.png",
        alt: "French toast donut.",
      },
    ],
    count: 0,
  },
  {
    id: 10,
    name: "Strawberry Confetti",
    price: 10,
    category: "Donuts",
    rating: 4,
    img: [
      {
        src: "assets/photos/strawberry-confetti.png",
        alt: "Strawberry confetti donut.",
      },
    ],
    count: 0,
  },
];

// skall printa ut kundvagnen om det finns varor tillagda
function printCart() {}

// skall loopa igenom listan med produkter och printa ut dom med lägg till knappar
const donutsContainer = document.querySelector(".donutsWrapper");
function printProducts() {
  let donutsArray = [...products];
  donutsContainer.innerHTML = "";

  let rendered = 0;

  for (let i = 0; i < donutsArray.length; i++) {
    donutsContainer.innerHTML += `
    <article class="donuts${rendered + 1}" id="${donutsArray[i].id}">
    <div class="images">
        <img src="${donutsArray[i].img[0].src}" alt="${donutsArray[i].img[0].alt}" width="160">
    </div>
    <h3 class="donutTitle">${donutsArray[i].name}</h3>
    <span class="donutPrice">Pris ${donutsArray[i].price}:-</span>
    <div class="productsCount">
        <button id="subtract${rendered + 1}" class="subtractBtn" data-operator="subtract">-</button>
        <span class="countText">Antal:</span>
        <span id="amount${rendered + 1}" class="amountValue">0</span>
        <button id="add${rendered + 1}" class="addBtn" data-operator="add">+</button><br>
    </div>
    <button id="addToCart${rendered + 1}" class="addToCartBtn" data-operator="addToCart">Lägg till</button>
    </article>
    `;
    rendered++;
  }
}

printProducts();

// lägg till vara i kundvagnen
function addToCart() {}
