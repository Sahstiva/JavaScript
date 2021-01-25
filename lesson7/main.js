function objItem(name, price, img, qty, taste) {
    this.name = name;
    this.price = +price;
    this.img = img;
    this.qty = +qty;
    this.taste = taste;
}

const bigPicture = document.querySelector('.content_bigpicture');
const shadowBox = document.querySelector('.shadowbox');
const cardBox = document.querySelector('.content_cardbox');
const rightBox = document.querySelector('.header_rightbox');
const Basket = document.querySelector('.basket');

var arrItems = [];

arrItems.push(new objItem("Эфиопия Гуджи Сонколле", 650, "img/efiopiyagudzhisonkolle-500x500.png", 0, "Ноты мандарина, абрикоса, красной смородины и карамели"));
arrItems.push(new objItem("Эфиопия Урага Мелкисса", 850, "img/efiopiyauragamelkisa-500x500.png", 0, "Ноты амаретто, дыни и молочного шоколада"));
arrItems.push(new objItem("Кения Каратина", 920, "img/keniyakaratinaaa-500x500.png", 0, "Ноты яблочной пастилы, красной смородины и черного чая"));

drawCardBox(arrItems);

function hide_address() {
    let adrBlock = document.querySelector('.basket_address');
    if (adrBlock.style.display != "none")
        adrBlock.style.display = "none";
    else
        adrBlock.style.display = "block";
}
function hide_comment() {
    let adrBlock = document.querySelector('.basket_comment');
    if (adrBlock.style.display != "none")
        adrBlock.style.display = "none";
    else
        adrBlock.style.display = "block";
}
function hide_content() {
    let adrBlock = document.querySelectorAll('.basket_content');
    adrBlock.forEach(function (block) {
        if (block.style.display != "none")
            block.style.display = "none";
        else
            block.style.display = "";
    });
}

function drawCardBox(arr) {
    let cartSum = 0, cartPrice = 0;
    while (cardBox.firstChild)
        cardBox.removeChild(cardBox.firstChild);

    Basket.style.display = "none";
    while (Basket.firstChild)
        Basket.removeChild(Basket.firstChild);
    let basEl = document.createElement("div");
    basEl.classList.add("basket_title");
    basEl.insertAdjacentHTML("afterbegin", "Корзина");
    Basket.appendChild(basEl);

    basEl = document.createElement('p');
    basEl.classList.add("basket_text");
    basEl.insertAdjacentHTML("afterbegin", "Состав корзины");
    Basket.appendChild(basEl);

    arr.forEach(function (el, i) {

        if (el.qty) {
            let basEl = document.createElement("div");
            basEl.classList.add("basket_content");

            let basImg = document.createElement("img");
            basImg.classList.add("basket_img");
            basImg.src = el.img;
            basImg.alt = el.name;
            basEl.appendChild(basImg);

            let basName = document.createElement("p");
            basName.classList.add("basket_name");
            basName.insertAdjacentHTML("afterbegin", el.name);
            basEl.appendChild(basName);

            let basPrice = document.createElement("p");
            basPrice.classList.add("basket_price");
            basPrice.insertAdjacentHTML("afterbegin", el.price);
            basEl.appendChild(basPrice);

            let basQty = document.createElement("input");
            basQty.classList.add("basket_qty");
            basQty.value = el.qty;
            basEl.appendChild(basQty);

            Basket.appendChild(basEl);
        }

        var divCard = document.createElement("div");
        divCard.id = i;
        divCard.classList.add("content_card");
        if (!i)
            divCard.classList.add("content_left");
        else if (i == 2)
            divCard.classList.add("content_right");
        var imgCard = document.createElement("img");
        imgCard.classList.add("content_cardimg");
        imgCard.src = el.img;
        var divPrice = document.createElement("div");
        divPrice.classList.add("content_cardprice");
        divPrice.insertAdjacentHTML("afterbegin", el.price);
        var divName = document.createElement("div");
        divName.classList.add("content_cardname");
        divName.insertAdjacentHTML("afterbegin", el.name);
        var divDesc = document.createElement("div");
        divDesc.classList.add("content_carddesc");
        divDesc.insertAdjacentHTML("afterbegin", el.taste);
        var divAdd = document.createElement("div");
        divAdd.classList.add("content_cardadd");
        var imgMinus = document.createElement("img");
        imgMinus.classList.add("content_cardminus");
        imgMinus.src = "img/icons8-minus-50.png";
        var addNum = document.createElement("span");
        addNum.classList.add("content_cardnum");
        addNum.insertAdjacentHTML("afterbegin", el.qty);
        cartSum += el.qty;
        cartPrice += el.qty * el.price;
        var imgPlus = document.createElement("img");
        imgPlus.classList.add("content_cardplus");
        imgPlus.src = "img/icons8-plus-50.png";

        divAdd.appendChild(imgMinus);
        divAdd.appendChild(addNum);
        divAdd.appendChild(imgPlus);

        divCard.appendChild(imgCard);
        divCard.appendChild(divPrice);
        divCard.appendChild(divName);
        divCard.appendChild(divDesc);
        divCard.appendChild(divAdd);

        cardBox.appendChild(divCard);
    });

    basEl = document.createElement("p");
    basEl.classList.add("basket_adrtext");
    basEl.insertAdjacentHTML("afterbegin", "Адрес доставки");
    Basket.appendChild(basEl);

    basEl = document.createElement("div");
    basEl.classList.add("basket_address");

    let basInput = document.createElement("input");
    basInput.type = "text";
    basInput.classList.add("basket_input");
    basInput.placeholder = "Введите адрес";
    basEl.appendChild(basInput)
    Basket.appendChild(basEl);

    basEl = document.createElement("p");
    basEl.classList.add("basket_comtext");
    basEl.insertAdjacentHTML("afterbegin", "Комментарии");
    Basket.appendChild(basEl);

    basEl = document.createElement("div");
    basEl.classList.add("basket_comment");

    basInput = document.createElement("textarea");
    basInput.classList.add("basket_textarea");
    basInput.placeholder = "Комментарии";
    basEl.appendChild(basInput);
    Basket.appendChild(basEl);

    basEl = document.createElement("div");
    basEl.classList.add("basket_total");
    basEl.insertAdjacentHTML("afterbegin", cartPrice + " руб.");
    Basket.appendChild(basEl);

    let cartNum = document.querySelector('.header_incartnum');
    while (cartNum.firstChild)
        cartNum.removeChild(cartNum.firstChild);
    cartNum.insertAdjacentHTML("afterbegin", cartSum);
    let cartBox = document.querySelector('.header_cartbox');
    while (cartBox.firstChild)
        cartBox.removeChild(cartBox.firstChild);
    let cartBoxText = document.createElement("p");
    cartBoxText.classList.add("header_cartboxtext");
    cartBoxText.insertAdjacentHTML("afterbegin", "На сумму");
    cartBox.appendChild(cartBoxText);
    let inCart = document.createElement("p");
    inCart.classList.add("header_incart");
    inCart.insertAdjacentHTML("afterbegin", cartPrice + " руб.");
    cartBox.appendChild(inCart);
}

rightBox.addEventListener('click', function (evt) {
    let Basket = document.querySelector('.basket');
    if (Basket.style.display == "none") {
        shadow(true);
        Basket.style.display = "";
        hide_comment();
        hide_address();
    }
    else {
        shadow(false);
        Basket.style.display = "none";
    }
});

cardBox.addEventListener('click', function (evt) {
    if (evt.target.className == "content_cardplus") {
        var id = +evt.target.parentElement.parentElement.id;
        arrItems[id].qty++;
        drawCardBox(arrItems);
    } else if (evt.target.className == "content_cardminus") {
        var id = +evt.target.parentElement.parentElement.id;
        if (arrItems[id].qty > 0)
            arrItems[id].qty--;
        drawCardBox(arrItems);
    }
    if (evt.target.className == "content_cardimg")
        if (!bigPicture.style.display || bigPicture.style.display == "none")
            showBig(evt.target.src);
});
bigPicture.addEventListener("click", function () {
    if (bigPicture.style.display == "block")
        showBig(false);
});
shadowBox.addEventListener("click", function () {
    let Basket = document.querySelector('.basket');
    if (bigPicture.style.display == "block")
        showBig(false);
    if (Basket.style.display != "none") {
        Basket.style.display = "none";
        shadow(false);
    }
});

Basket.addEventListener('click', function (evt) {
    if (evt.target.className == "basket_adrtext")
        hide_address();
    if (evt.target.className == "basket_text")
        hide_content();
    if (evt.target.className == "basket_comtext")
        hide_comment();
});

function showBig(src) {
    if (src) {
        bigPicture.src = src;
        bigPicture.style.position = "absolute";
        let winHeight = window.innerHeight / 2 - 250;
        let winWidth = window.innerWidth / 2 - 250;
        bigPicture.style.top = winHeight + "px";
        bigPicture.style.left = winWidth + "px";
        bigPicture.className = ".content_bigpicture";
        bigPicture.style.display = "block";
        shadow(true);
    } else {
        bigPicture.style.display = "none";
        shadow(false);
    }
}
function shadow(value) {
    if (!value) {
        shadowBox.style.display = "none";
    }
    else {
        shadowBox.style.display = "block";
    }
}