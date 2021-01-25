const cardBox = document.querySelector('.content_cardbox');
const bigPicture = document.querySelector('.content_bigpicture');
cardBox.addEventListener('click', function (evt) {
    if (evt.target.className == 'content_cardminus') {
        let children = evt.target.parentElement.childNodes;
        num = parseInt(children[3].innerHTML);
        if (num > 0)
            num--;
        children[3].innerHTML = num.toString();
        console.log(num);
    }
    else if (evt.target.className == "content_cardplus") {
        let children = evt.target.parentElement.childNodes;
        num = parseInt(children[3].innerHTML);
        num++;
        children[3].innerHTML = num.toString();
        console.log(num);
    } else if (evt.target.className == "content_cardimg") {
        // let children = evt.target.parentElement.childNodes;
        // console.log(children);
        if (!bigPicture.style.display || bigPicture.style.display == "none") {
            bigPicture.src = evt.target.src;
            bigPicture.style.position = "absolute";
            let winHeight = window.innerHeight / 2 - 250;
            let winWidth = window.innerWidth / 2 - 250;
            console.log(winHeight, winWidth);
            bigPicture.style.top = winHeight + "px";
            bigPicture.style.left = winWidth + "px";
            bigPicture.className = ".content_bigpicture";
            let shadowBox = document.querySelector('.shadowbox');
            shadowBox.style.display = "block";
            bigPicture.style.display = "block";
        }
    }
    update_cart();
});
bigPicture.addEventListener("click", function () {
    if (bigPicture.style.display == "block") {
        // let child = bigPicture.firstChild;
        // bigPicture.removeChild(child);
        bigPicture.style.display = "none";
        let shadowBox = document.querySelector('.shadowbox');
        shadowBox.style.display = "none";

    }
});
function update_cart() {
    let cartNum = document.querySelector('.header_incartnum');
    let cardNums = document.querySelectorAll('.content_cardnum');
    let inCart = document.querySelector('.header_incart');
    let allNums = 0, cartSum = 0;
    for (let Num of cardNums) {
        let curNum = parseInt(Num.innerHTML);
        let curPrice = parseInt(Num.parentElement.parentElement.childNodes[3].innerHTML);
        allNums += curNum;
        cartSum += curPrice * curNum;
        //        console.log(allNums, cartSum);
    }
    inCart.innerHTML = cartSum + " руб."
    cartNum.innerHTML = allNums.toString();
}
