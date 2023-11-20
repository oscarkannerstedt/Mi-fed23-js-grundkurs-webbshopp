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
    price: 15,
    category: "Donuts",
    rating: 3,
    img: [
      {
        src: "assets/photos/Blueberry-Lemonade.jpg",
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
    price: 15,
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
    price: 15,
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
    price: 15,
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
    price: 15,
    category: "Donuts",
    rating: 4,
    img: [
      {
        src: "assets/photos/Strawberry-Confetti.png",
        alt: "Strawberry confetti donut.",
      },
    ],
    count: 0,
  },
];


/*---------------------------------------------*/
/*---------Printar ut alla produkter----------*/
/*---------------------------------------------*/

const donutsContainer = document.querySelector(".donutsWrapper");

function printProducts() {
  let donutsArray = [...products];
  donutsContainer.innerHTML = "";

  let rendered = 0;

  for (let i = 0; i < donutsArray.length; i++) {
    donutsContainer.innerHTML += `
    <article class="donuts${rendered + 1}" id="${donutsArray[i].id}">
    <div class="images">
        <img src="${donutsArray[i].img[0].src}" alt="${donutsArray[i].img[0].alt}" width="160" loading="lazy">
    </div>
    <h3 class="donutTitle">${donutsArray[i].name}</h3>
    <span class="donutPrice">Pris ${donutsArray[i].price} :-</span>
    <div id="productsCount" class="productsCount">
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

const addBtn = document.querySelectorAll('button[data-operator="add"]');
const subtractBtn = document.querySelectorAll('button[data-operator="subtract"]');
const addToCartBtn = document.querySelectorAll('button[data-operator="addToCart"]');


  for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener('click', increaseAmount);
    subtractBtn[i].addEventListener('click', decreaseAmount);
    addToCartBtn[i].addEventListener('click', addToCart);
  }

/*---------------------------------------------*/
/*------plus & minus för att välja antal------*/
/*---------------------------------------------*/

  function increaseAmount(evt) {
    const index = evt.currentTarget.id.replace('add', '');
    const startAmount = document.querySelector(`#amount${index}`);
    let amountValue = Number(startAmount.innerText);
    startAmount.innerHTML = amountValue + 1;
  }

  function decreaseAmount(evt) {
    const index = evt.currentTarget.id.replace('subtract', '');
    const startAmount = document.querySelector(`#amount${index}`);
    let amountValue = Number(startAmount.innerText);
    if(amountValue - 1 < 0) {
      return;
    } else {
      startAmount.innerHTML = amountValue - 1;
    }
  }

/*---------------------------------------------*/
/*-----------lägg till i varukorgen-----------*/
/*---------------------------------------------*/

function addToCart(evt) {
  let cartBtn = evt.target;
  const productItem = cartBtn.parentElement;
  const cartAmount = productItem.getElementsByClassName('productsCount')[0].getElementsByClassName('amountValue')[0];
  const amountToAdd = parseInt(cartAmount.innerHTML);

  if(amountToAdd <= 0) {
    return;
  }

  const donutsToAdd = products.find(donut => donut.id == productItem.id);
  donutsToAdd.count = amountToAdd;

  console.log(donutsToAdd);
  console.log(amountToAdd);
  printShoppingCart();
  }

/*---------------------------------------------*/
/*skriv ut varukorgen om det finns varor i den*/
/*---------------------------------------------*/

function printShoppingCart() {
  const shoppingCartItems = document.querySelector('#shoppingCartItems');
  shoppingCartItems.innerHTML = "";

  for(let i = 0; i < products.length; i++) {
    if(products[i].count == 0) {
      continue;
    }

    let price;
    if(products[i].count >= 10) {
      price = products[i].price * 0.9;
    } else {
      price = products[i].price;
    }

    shoppingCartItems.innerHTML += `
    <div class="shoppingCartItemsRow">
      <article class="shoppingCartProduct">
      <img src=${products[i].img[0].src} alt="${products[i].img[0].alt}" width="100" loading="lazy">
      <p>${products[i].name}</p>
      </article>

      <article class="shoppingCartItemsPrice">
        <span class="cartProductPrice">${price}</span>
      </article>

      <article class="shoppingCartItemsCount">
        <label class="visuallyHidden" for="count">antal</label>
        <input type="number" class="cartProductCount lock" id="${products[i].id}" name="antal" min="1" value="${products[i].count}">

        <button role="button" class="btnRemoveItem" id="${products[i].id}" >Rensa</button>
      </article>

    </div>
    `;
  }

  const removeProductBtn = document.getElementsByClassName('btnRemoveItem');
  for (let i = 0; i < removeProductBtn.length; i++) {
    let removeBtn = removeProductBtn[i];
    removeBtn.addEventListener('click', removeProduct);
  }

  const quantityInput = document.getElementsByClassName('cartProductCount');
  for (let i = 0; i < quantityInput.length; i++) {
    const input = quantityInput[i];
    input.addEventListener('change', quantityInputChanged);
  }

  const discountInput = document.getElementById('discount');
  discountInput.addEventListener('change', giveDiscount);

  updateTotalPrice();
  giveMondayDiscount();
  giveDiscount();
}

/*---------------------------------------------*/
/*-----Function for order & order button------*/
/*---------------------------------------------*/

document.querySelector('#goToForm').addEventListener('click', goToForm);

function goToForm() {
  let scroll = document.getElementById('scroll');
  scroll.scrollIntoView();
}

/*---------------------------------------------*/
/*---------Remove article from cart-----------*/
/*---------------------------------------------*/

function removeProduct(evt) {
  let removeBtnClicked = evt.target;
  for(let i = 0; i < products.length; i++) {
    if(removeBtnClicked.id == products[i].id) {
      products[i].count = 0;
    }
  }
  printShoppingCart();
}

/*---------------------------------------------*/
/*--Update total price when changed quantity--*/
/*---------------------------------------------*/

function quantityInputChanged(evt) {
  const input = evt.target;
  if(isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }

  for(let i = 0; i < products.length; i++) {
    if(input.id == products[i].id) {
      products[i].count = input.value;
    }
  }
  printShoppingCart();
}

/*---------------------------------------------*/
/*---Update total sum when article removed----*/
/*---------------------------------------------*/

function updateTotalPrice() {
  const checkoutCart = document.getElementsByClassName("shoppingCartItems")[0];
  const cartRows = checkoutCart.getElementsByClassName("shoppingCartItemsRow");
  let total = 0;
  let totalQuantity = 0;

  for(let i = 0; i < cartRows.length; i++) {
    const row = cartRows[i];
    const productPrice = row.getElementsByClassName("cartProductPrice")[0];
    const productQuantity = row.getElementsByClassName("cartProductCount")[0];

    const price = Number(productPrice.innerText);
    const quantity = Number(productQuantity.value);

    total = total + price * quantity;
    totalQuantity += quantity;
  }

  // Makes the count appears in header on top of the shopping cart symbol
    const headerCountItems = document.querySelector('#headerCountItems');
    headerCountItems.innerText = totalQuantity;
    if(headerCountItems.innerHTML.trim() !== '') {
      headerCountItems.classList.add('pink-background');
    }
  

  const paymentInvoice = document.querySelector('#paymentInvoice');
  const paymentCard = document.querySelector('#paymentCard');

  if(total > 800) {
    paymentInvoice.disabled = true;
    paymentCard.checked = true;
    switchPayment('paymentCard');
  } else {
    paymentInvoice.disabled = false;
  }

  let shippingPrice = 25 + total * 0.1;

  if (totalQuantity > 15) {
    shippingPrice = 0;
  }

  document.querySelector('#cartShippingPrice').innerHTML = toDisplayPrice(shippingPrice);
  document.querySelector('#cartTotalPrice').innerText = toDisplayPrice(total);
  document.querySelector('#cartPaymentPrice').innerHTML = toDisplayPrice(total + shippingPrice);

  console.log(total);
}

function toDisplayPrice(num) {
  return (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(2) + ':-';
}

/*---------------------------------------------*/
/*-----Monday discount 10% before 10.00-------*/
/*---------------------------------------------*/

function giveMondayDiscount() {}

/*---------------------------------------------*/
/*------------Discount code input-------------*/
/*---------------------------------------------*/
const discountInput = document.querySelector('#discount');
discountInput.addEventListener('change', giveDiscount);

function giveDiscount() {
  if(discountInput.value == 'TOMTEN') {
    let newPrice = document.querySelector('#cartTotalPrice').innerHTML.replace(':-', '');
    newPrice = Number(newPrice * 0);
    document.querySelector('#cartPaymentPrice').innerHTML = newPrice + ':-';
  } else {
    toDisplayPrice();
    updateTotalPrice();
    giveMondayDiscount();
  }
}









