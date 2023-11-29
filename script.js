let products = [
  {
    id: 1,
    name: 'S`Mores',
    price: 20,
    category: 'Deluxe',
    rating: 5,
    img: [
      {
        src: 'assets/photos/s-mores.jpg',
        alt: 'S`Mores donut.',
      },
    ],
    count: 0,
  },
  {
    id: 2,
    name: 'Bacon in the Sun',
    price: 10,
    category: 'Speciell',
    rating: 4,
    img: [
      {
        src: 'assets/photos/bacon-in-the-sun.jpg',
        alt: 'Bacon in the sun donut.',
      },
    ],
    count: 0,
  },
  {
    id: 3,
    name: 'Blueberry Lemonade',
    price: 15,
    category: 'Speciell',
    rating: 3,
    img: [
      {
        src: 'assets/photos/Blueberry-Lemonade.jpg',
        alt: 'Blueberry lemonade donut.',
      },
    ],
    count: 0,
  },
  {
    id: 4,
    name: 'Beach Ball',
    price: 10,
    category: 'Standard',
    rating: 3,
    img: [
      {
        src: 'assets/photos/beach-ball.jpg',
        alt: 'Beach ball donut.',
      },
    ],
    count: 0,
  },
  {
    id: 5,
    name: 'Blueberry Pancake',
    price: 15,
    category: 'Deluxe',
    rating: 4,
    img: [
      {
        src: 'assets/photos/blueberry-pancake.jpg',
        alt: 'Blueberry pancake donut.',
      },
    ],
    count: 0,
  },
  {
    id: 6,
    name: 'Cinnamon Bun',
    price: 20,
    category: 'Deluxe',
    rating: 5,
    img: [
      {
        src: 'assets/photos/cinnamon-bun.jpg',
        alt: 'Cinnamon bun donut.',
      },
    ],
    count: 0,
  },
  {
    id: 7,
    name: 'Chocolate Explosion',
    price: 15,
    category: 'Speciell',
    rating: 4,
    img: [
      {
        src: 'assets/photos/Chocolate-Explosion.jpg',
        alt: 'Chocolate explosion donut.',
      },
    ],
    count: 0,
  },
  {
    id: 8,
    name: 'Chocolate Caramel Crunch',
    price: 10,
    category: 'Standard',
    rating: 3,
    img: [
      {
        src: 'assets/photos/chocolate-caramel-crunch.jpg',
        alt: 'Chocolate caramel crunch donut.',
      },
    ],
    count: 0,
  },
  {
    id: 9,
    name: 'Cookies & Cream',
    price: 10,
    category: 'Standard',
    rating: 4,
    img: [
      {
        src: 'assets/photos/cookies&cream.png',
        alt: 'Cookies & cream donut.',
      },
    ],
    count: 0,
  },
  {
    id: 10,
    name: 'French Toast',
    price: 15,
    category: 'Speciell',
    rating: 4,
    img: [
      {
        src: 'assets/photos/french-toast.jpg',
        alt: 'French toast donut.',
      },
    ],
    count: 0,
  },
  {
    id: 11,
    name: 'Strawberry Confetti',
    price: 15,
    category: 'Deluxe',
    rating: 5,
    img: [
      {
        src: 'assets/photos/Strawberry-Confetti.jpg',
        alt: 'Strawberry confetti donut.',
      },
    ],
    count: 0,
  },
  {
    id: 12,
    name: 'Coconut Island Blis',
    price: 10,
    category: 'Standard',
    rating: 3,
    img: [
      {
        src: 'assets/photos/coconut-island-bliss.jpg',
        alt: 'Coconut island bliss donut.',
      },
    ],
    count: 0,
  },
  {
    id: 13,
    name: 'Midnight Madness',
    price: 20,
    category: 'Deluxe',
    rating: 5,
    img: [
      {
        src: 'assets/photos/Midnight-Madness.jpg',
        alt: 'Midnight madness donut.',
      },
    ],
    count: 0,
  },
  {
    id: 14,
    name: 'The Flip Flop',
    price: 10,
    category: 'Standard',
    rating: 3,
    img: [
      {
        src: 'assets/photos/flip-flop.jpg',
        alt: 'Flip flop donut.',
      },
    ],
    count: 0,
  },
  {
    id: 15,
    name: 'Sunrise',
    price: 15,
    category: 'Speciell',
    rating: 4,
    img: [
      {
        src: 'assets/photos/sunrise.jpg',
        alt: 'Sunrise donut.',
      },
    ],
    count: 0,
  },
  {
    id: 16,
    name: 'Peanut Butter & Jelly',
    price: 20,
    category: 'Deluxe',
    rating: 5,
    img: [
      {
        src: 'assets/photos/peanut-butter-jelly.jpg',
        alt: 'Peanut butter jelly donut.',
      },
    ],
    count: 0,
  },
  {
    id: 17,
    name: 'Peanut Butter Paradise',
    price: 20,
    category: 'Deluxe',
    rating: 5,
    img: [
      {
        src: 'assets/photos/peanut-butter-paradise.jpg',
        alt: 'Peanut butter paradise donut.',
      },
    ],
    count: 0,
  },
  {
    id: 18,
    name: 'Strawberry Shortcake',
    price: 15,
    category: 'Speciell',
    rating: 4,
    img: [
      {
        src: 'assets/photos/Strawberry-Shortcake.jpg',
        alt: 'Strawberry shortcake donut.',
      },
    ],
    count: 0,
  },
];

/*---------------------------------------------*/
/*---------------Dates & Times----------------*/
/*---------------------------------------------*/

const now = new Date();

const weekendPrices =
  (now.getDay() === 5 && now.getHours() > 15) ||
  now.getDay() === 6 ||
  now.getDay() === 0 ||
  (now.getDay() === 1 && now.getHours() < 3);
const mondayDiscount = now.getDay() === 1 && now.getHours() < 10;

/*-----------------------------------------------------*/
/*Weekend prices 15% more friday 15.00 to monday 03.00*/
/*-----------------------------------------------------*/

if (weekendPrices) {
  products = products.map((donut) => {
    donut.price = Math.round(donut.price * 1.15);
    return donut;
  });
}

// updateTotalPrice();
giveMondayDiscount();

/*---------------------------------------------*/
/*----------Prints products to HTML-----------*/
/*---------------------------------------------*/

const donutsContainer = document.querySelector('.donutsWrapper');

function printProducts() {
  let donutsArray = [...products];

  donutsArray = filterCategories(donutsArray);
  sortDonuts(donutsArray);

  donutsContainer.innerHTML = '';

  let rendered = 0;

  for (let i = 0; i < donutsArray.length; i++) {
    let stars = '';
    for (let j = 0; j < 5; j++) {
      if (j - donutsArray[i].rating < -0.5) {
        stars += '&#xf005';
      } else if (j - donutsArray[i].rating == -0.5) {
        stars += '&#xf123';
      } else {
        stars += '&#xf006;';
      }
    }

    donutsContainer.innerHTML += `
    <article class="donuts${rendered + 1}" id="${donutsArray[i].id}">
    <div class="images">
        <img src="${donutsArray[i].img[0].src}" alt="${
      donutsArray[i].img[0].alt
    }" width="160" height="160" loading="lazy">
    </div>
    <h3 class="donutTitle">${donutsArray[i].name}</h3>
    <span class="donutRating fa">${stars}</span>
    <span class="donutPrice">Pris ${donutsArray[i].price}:-</span>
    <div id="productsCount" class="productsCount">
        <button id="subtract${
          rendered + 1
        }" class="subtractBtn" data-operator="subtract">-</button>
        <span class="countText">Antal:</span>
        <span id="amount${rendered + 1}" class="amountValue">0</span>
        <button id="add${
          rendered + 1
        }" class="addBtn" data-operator="add">+</button><br>
    </div>
    <button id="addToCart${
      rendered + 1
    }" class="addToCartBtn" data-operator="addToCart">Lägg till</button>
    </article>
    `;
    rendered++;
  }
  applyListeners();
}
printProducts();

/*---------------------------------------------*/
/*----------------Sort Donuts-----------------*/
/*---------------------------------------------*/

const sortOptions = document.querySelector('#sortOptions');
sortOptions.addEventListener('change', printProducts);

function sortDonuts(donutsArray) {
  const sortName = document.querySelector('#sortName');
  const sortRating = document.querySelector('#sortRating');
  const sortPriceLow = document.querySelector('#sortPriceLow');
  const sortPriceHigh = document.querySelector('#sortPriceHigh');

  if (sortName.selected) {
    donutsArray.sort((donut1, donut2) =>
      donut1.name.localeCompare(donut2.name)
    );
  }

  if (sortRating.selected) {
    donutsArray.sort((donut1, donut2) => donut2.rating - donut1.rating);
  }

  if (sortPriceLow.selected) {
    donutsArray.sort((donut1, donut2) => donut1.price - donut2.price);
  }

  if (sortPriceHigh.selected) {
    donutsArray.sort((donut1, donut2) => donut2.price - donut1.price);
  }
}

/*---------------------------------------------*/
/*---------Filter donuts by category----------*/
/*---------------------------------------------*/

const sortCategory = document.querySelector('#sortCategories');
sortCategory.addEventListener('change', printProducts);

function filterCategories(donutsArray) {
  const categoryStandard = document.querySelector('#categoryStandard');
  const categorySpecial = document.querySelector('#categorySpecial');
  const categoryDeluxe = document.querySelector('#categoryDeluxe');

  if (categoryStandard.selected) {
    donutsArray = donutsArray.filter((donut) => donut.category === 'Standard');
  }

  if (categorySpecial.selected) {
    donutsArray = donutsArray.filter((donut) => donut.category === 'Speciell');
  }

  if (categoryDeluxe.selected) {
    donutsArray = donutsArray.filter((donut) => donut.category === 'Deluxe');
  }
  return donutsArray;
}

/*---------------------------------------------*/
/*------------add & subtract amount-----------*/
/*---------------------------------------------*/

function applyListeners() {
  const addBtn = document.querySelectorAll('button[data-operator="add"]');
  const subtractBtn = document.querySelectorAll(
    'button[data-operator="subtract"]'
  );
  const addToCartBtn = document.querySelectorAll(
    'button[data-operator="addToCart"]'
  );

  for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener('click', increaseAmount);
    subtractBtn[i].addEventListener('click', decreaseAmount);
    addToCartBtn[i].addEventListener('click', addToCart);
  }
}

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
  if (amountValue - 1 < 0) {
    return;
  } else {
    startAmount.innerHTML = amountValue - 1;
  }
}

/*---------------------------------------------*/
/*------------add article to cart-------------*/
/*---------------------------------------------*/

function addToCart(evt) {
  let cartBtn = evt.target;
  const productItem = cartBtn.parentElement;
  const cartAmount = productItem
    .getElementsByClassName('productsCount')[0]
    .getElementsByClassName('amountValue')[0];
  const amountToAdd = parseInt(cartAmount.innerHTML);

  if (amountToAdd <= 0) {
    return;
  }

  const donutsToAdd = products.find((donut) => donut.id == productItem.id);
  donutsToAdd.count = amountToAdd;

  console.log(donutsToAdd);
  console.log(amountToAdd);
  printShoppingCart();
}

/*---------------------------------------------*/
/*-------------Print shoppingCart-------------*/
/*---------------------------------------------*/

function printShoppingCart() {
  const shoppingCartItems = document.querySelector('#shoppingCartItems');
  shoppingCartItems.innerHTML = '';

  for (let i = 0; i < products.length; i++) {
    if (products[i].count == 0) {
      continue;
    }

    let price;
    if (products[i].count >= 10) {
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
  visualCartUpdate();
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
  for (let i = 0; i < products.length; i++) {
    if (removeBtnClicked.id == products[i].id) {
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
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }

  for (let i = 0; i < products.length; i++) {
    if (input.id == products[i].id) {
      products[i].count = input.value;
    }
  }
  printShoppingCart();
}

/*---------------------------------------------*/
/*---Update total sum when article removed----*/
/*---------------------------------------------*/

function updateTotalPrice() {
  const checkoutCart = document.getElementsByClassName('shoppingCartItems')[0];
  const cartRows = checkoutCart.getElementsByClassName('shoppingCartItemsRow');
  let total = 0;
  let totalQuantity = 0;

  for (let i = 0; i < cartRows.length; i++) {
    const row = cartRows[i];
    const productPrice = row.getElementsByClassName('cartProductPrice')[0];
    const productQuantity = row.getElementsByClassName('cartProductCount')[0];

    const price = Number(productPrice.innerText);
    const quantity = Number(productQuantity.value);

    total = total + price * quantity;
    totalQuantity += quantity;
  }

  // Number of items in shopping cart showed in header
  const headerCountItems = document.querySelector('#headerCountItems');
  headerCountItems.innerText = totalQuantity;
  if (headerCountItems.innerHTML.trim() !== '') {
    headerCountItems.classList.add('pink-background');
  }

  // Total price over 800, Only card payment avaible
  const paymentInvoice = document.querySelector('#paymentInvoice');
  const paymentCard = document.querySelector('#paymentCard');

  if (total > 800) {
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

  document.querySelector('#cartShippingPrice').innerHTML =
    toDisplayPrice(shippingPrice);
  document.querySelector('#cartTotalPrice').innerText = toDisplayPrice(total);
  document.querySelector('#cartPaymentPrice').innerHTML = toDisplayPrice(
    total + shippingPrice
  );
}

function toDisplayPrice(num) {
  return (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(2) + ':-';
}

/*---------------------------------------------*/
/*-----Monday discount 10% before 10.00-------*/
/*---------------------------------------------*/

function giveMondayDiscount() {
  if (mondayDiscount) {
    const msgToUser =
      'Det är måndag morgon, så du får 10 % rabatt på din beställning';
    document.querySelector('#msgToUser').innerText = msgToUser;

    let mondayPrice = document
      .querySelector('#cartTotalPrice')
      .innerHTML.replace(':-', '');

    mondayPrice = Number(mondayPrice * 0.9);
    document.querySelector('#cartTotalPrice').innerHTML = mondayPrice + ':-';
  }
}

/*---------------------------------------------*/
/*------------Discount code input-------------*/
/*---------------------------------------------*/
const discountInput = document.querySelector('#discount');
discountInput.addEventListener('change', giveDiscount);

function giveDiscount() {
  if (discountInput.value == 'TOMTEN') {
    let newPrice = document
      .querySelector('#cartTotalPrice')
      .innerHTML.replace(':-', '');
    newPrice = Number(newPrice * 0);
    document.querySelector('#cartPaymentPrice').innerHTML = newPrice + ':-';
  } else {
    toDisplayPrice();
    updateTotalPrice();
    giveMondayDiscount();
  }
}

/*---------------------------------------------*/
/*-------Toggle between card & invoice--------*/
/*---------------------------------------------*/

const paymentCardInput = document.querySelector('#paymentCard');
const paymentCardBox = document.querySelector('.hiddenPaymentCard');
const paymentInvoiceInput = document.querySelector('#paymentInvoice');
const paymentInvoiceBox = document.querySelector('.hiddenPaymentInvoice');

paymentCardInput.addEventListener('change', switchPaymentEventHandler);
paymentInvoiceInput.addEventListener('change', switchPaymentEventHandler);

function switchPaymentEventHandler(e) {
  switchPayment(e.target.id);
}

function switchPayment(paymentType) {
  if (paymentType == 'paymentCard') {
    paymentInvoiceBox.classList.remove('showPaymentInvoice');
    paymentInvoiceBox.classList.add('hiddenPaymentInvoice');

    paymentCardBox.classList.remove('hiddenPaymentCard');
    paymentCardBox.classList.add('showPaymentCard');
  }

  if (paymentType == 'paymentInvoice') {
    paymentCardBox.classList.remove('showPaymentCard');
    paymentCardBox.classList.add('hiddenPaymentCard');

    paymentInvoiceBox.classList.remove('hiddenPaymentInvoice');
    paymentInvoiceBox.classList.add('showPaymentInvoice');
  }
}

/*---------------------------------------------*/
/*-Validate form, order button appears green--*/
/*---------------------------------------------*/

const orderButton = document.querySelector('#orderButton');
orderButton.disabled = true;

const validatedTexts = document.querySelectorAll('.checkoutValidatedText');
const validatedCheckboxes = document.querySelectorAll(
  '.checkoutValidatedCheckbox'
);
const paymentCardRadio = document.querySelector('#paymentCard');
const paymentInvoiceRadio = document.querySelector('#paymentInvoice');
const socialSecurityNumber = document.querySelector('#socialSecurityNumber');

for (let text of validatedTexts) {
  text.addEventListener('input', validate);
}

for (let box of validatedCheckboxes) {
  box.addEventListener('change', validate);
}

paymentCardRadio.addEventListener('change', validate);
paymentInvoiceRadio.addEventListener('change', validate);

function validate() {
  let shouldEnable = true;

  for (let text of validatedTexts) {
    if (
      text.value == '' &&
      window.getComputedStyle(text.parentElement.parentElement, null)
        .display !== 'none'
    ) {
      shouldEnable = false;
    }
  }

  for (let box of validatedCheckboxes) {
    if (!box.checked) {
      shouldEnable = false;
    }
  }

  if (!paymentCardRadio.checked && !paymentInvoiceRadio.checked) {
    shouldEnable = false;
  }

  orderButton.disabled = !shouldEnable;
}

const checkoutForm = document.querySelector('.checkoutForm');
checkoutForm.addEventListener('submit', order);

/*---------------------------------------------*/
/*-Validate form, When clicking order button--*/
/*---------------------------------------------*/

function order(evt) {
  evt.preventDefault();

  const zipCode = document.querySelector('#zipCode');
  const zipCodeSpan = document.querySelector('#zipCodeSpan');
  const phoneNumber = document.querySelector('#phoneNumber');
  const phoneNumberSpan = document.querySelector('#phoneNumberSpan');
  const socialSecurityNumber = document.querySelector('#socialSecurityNumber');
  const socialSecurityNumberSpan = document.querySelector(
    '#socialSecurityNumberSpan'
  );

  const regexZC = /^\d{3}[ ]?\d{2}$/;
  const regexPN = /^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$/;
  const regexSSN = /^(19|20)?[0-9]{6}[- ]?[0-9]{4}$/;

  const orderMessage = document.querySelector('#orderMessage');
  orderMessage.innerHTML = '';

  zipCodeSpan.innerHTML = 'Postnummer';
  zipCodeSpan.classList.remove('errorMessage');
  phoneNumberSpan.innerHTML = 'Telefonnummer';
  phoneNumberSpan.classList.remove('errorMessage');
  socialSecurityNumberSpan.innerHTML = 'Personnummer';
  socialSecurityNumberSpan.classList.remove('errorMessage');

  let hasErrors = false;
  let errors = [];

  if (!regexZC.test(zipCode.value)) {
    zipCodeSpan.innerHTML = 'Postnummer *';
    zipCodeSpan.classList.add('errorMessage');

    hasErrors = true;
    errors.push('Fyll i ett giltligt postnummer!');
  }

  if (!regexPN.test(phoneNumber.value)) {
    phoneNumberSpan.innerHTML = 'Telefonnummer *';
    phoneNumberSpan.classList.add('errorMessage');

    hasErrors = true;
    errors.push('Fyll i ett giltligt telefonnummer!');
  }

  if (
    window.getComputedStyle(
      socialSecurityNumber.parentElement.parentElement,
      null
    ).display !== 'none' &&
    !regexSSN.test(socialSecurityNumber.value)
  ) {
    socialSecurityNumberSpan.innerHTML = 'Personnummer *';
    socialSecurityNumberSpan.classList.add('errorMessage');

    hasErrors = true;
    errors.push('Fyll i ett giltligt personnummer!');
  }

  if (hasErrors) {
    for (let i = 0; i < errors.length; i++) {
      if (i > 0) {
        orderMessage.innerHTML += '<br>';
      }
      orderMessage.innerHTML += errors[i];
    }
  }

  if (!hasErrors) {
    const firstName = document.querySelector('#firstName');
    alert(
      `Tack för din beställning ${
        firstName.value
      }! Leverans sker om ${getDeliveryTime()}`
    );

    const formInputs = document.querySelectorAll('.lock');

    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].disabled = true;
    }
  }
}

/*---------------------------------------------*/
/*---------------Delivery time----------------*/
/*---------------------------------------------*/

function getDeliveryTime() {
  // Saturday or sunday delivery
  if (now.getDay() === 7 || now.getDay() === 0) {
    return '90 min.';
  }
  // Monday to friday delivery
  return '30 min.';
}

/*---------------------------------------------*/
/*--------Clear form after 15 minutes---------*/
/*---------------------------------------------*/

function resetForm() {
  document.querySelector('.checkoutForm').reset();
  alert(
    'Nu tog det lite lång tid... Om du vill beställa får du fylla i formuläret igen.'
  );
}

setTimeout(resetForm, 1000 * 60 * 15);

/*---------------------------------------------*/
/*------------Delete order button-------------*/
/*---------------------------------------------*/

const clearOrderBtn = document.querySelector('#clearOrder');
clearOrderBtn.addEventListener('click', clearOrder);

function clearOrder() {
  document.querySelector('.checkoutForm').reset();
  for (let i = 0; i < products.length; i++) {
    products[i].count = 0;
  }
  printShoppingCart();
  printProducts();
}

/*---------------------------------------------*/
/*---Red frame when total price is changed----*/
/*---------------------------------------------*/

const redFrame = document.querySelector('#cartTotalPrice');

function visualCartUpdate() {
  redFrame.classList.add('redFrame');
  setTimeout(clearRedFrame, 300);
}

function clearRedFrame() {
  redFrame.classList.remove('redFrame');
}
