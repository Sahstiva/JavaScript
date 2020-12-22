// урок 3
function drawXXX() {
    document.getElementById('draw').innerHTML = "";
    for (let i = 1; i <= 20; i++) {
        for (let j = 1; j <= i; j++)
            document.getElementById('draw').innerHTML += "x";
        document.getElementById('draw').innerHTML += "<br>";
    }
}
function countBasketPrice(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += +arr[i];
    return sum;
}
function addToBasket() {
    arrBasket.push((Math.random() * 100).toFixed(2));
    document.getElementById('Basket').innerHTML = "Корзина: " + arrBasket;
    document.getElementById('BasketSum').innerHTML = "Сумма: " + countBasketPrice(arrBasket);
}
function print_prime(max) {
    let i = 0, prime_nums = [];
    while (i++ <= max - 1)
        if (isPrime(i))
            prime_nums.push(i);
    return prime_nums;
}
function isPrime(n) {
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
    return true;
}
// урок 2
function make_calc(a, b) {
    if (!parseInt(a) || !parseInt(b))
        return "Введите, пожалуйста, числовые значения а и b!"
    else if (a >= 0 && b >= 0)
        return "Разность a и b: " + (a - b);
    else if (a < 0 && b < 0)
        return "Произведение a и b: " + (a * b);
    else
        return "Сумма a и b: " + (parseInt(a) + parseInt(b));
}
function show_random() {
    var a = parseInt(Math.random() * 15);
    document.getElementById('PutTextHere').innerHTML = "Числа от " + a + " до 15:<br>";
    switch (a) {
        case 1:
            document.getElementById('PutTextHere').innerHTML += "1, ";
        case 2:
            document.getElementById('PutTextHere').innerHTML += "2, ";
        case 3:
            document.getElementById('PutTextHere').innerHTML += "3, ";
        case 4:
            document.getElementById('PutTextHere').innerHTML += "4, ";
        case 5:
            document.getElementById('PutTextHere').innerHTML += "5, ";
        case 6:
            document.getElementById('PutTextHere').innerHTML += "6, ";
        case 7:
            document.getElementById('PutTextHere').innerHTML += "7, ";
        case 8:
            document.getElementById('PutTextHere').innerHTML += "8, ";
        case 9:
            document.getElementById('PutTextHere').innerHTML += "9, ";
        case 10:
            document.getElementById('PutTextHere').innerHTML += "10, ";
        case 11:
            document.getElementById('PutTextHere').innerHTML += "11, ";
        case 12:
            document.getElementById('PutTextHere').innerHTML += "12, ";
        case 13:
            document.getElementById('PutTextHere').innerHTML += "13, ";
        case 14:
            document.getElementById('PutTextHere').innerHTML += "14, ";
        case 15:
            document.getElementById('PutTextHere').innerHTML += "15. ";

    }
}
function plus(a, b) {
    return parseInt(a) + parseInt(b);
}
function minus(a, b) {
    return parseInt(a) - parseInt(b);
}
function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}
function devide(a, b) {
    return parseInt(a) / parseInt(b);
}
function mathOperation(a, b, oper) {
    if (!parseInt(a) || !parseInt(b))
        return "Введите, пожалуйста, числовые значения а и b!";
    switch (oper) {
        case "+":
            return "Сумма " + a + " и " + b + " = " + plus(a, b);
        case "-":
            return "Разность " + a + " и " + b + " = " + minus(a, b);
        case "*":
            return "Произведение " + a + " и " + b + " = " + multiply(a, b);
        case "/":
            return "Частное от " + a + " и " + b + " = " + devide(a, b);
        default:
            return "Операция " + oper + " не распознана!"
    }
}
function power(val, pow) {
    if (pow == 0)
        return 1;
    if (!parseInt(val) || !parseInt(pow) || pow < 0)
        return "Введите, пожалуйста, числовые значения а и степени! Степень должна быть положительная!";
    if (pow == 1)
        return val;
    else
        return val * power(val, pow - 1);
}
// урок 1
function fahrenheit(celsius) {
    if (parseInt(celsius))
        return 9 / 5 * parseInt(celsius) + 32;
    else
        return "Введите, пожалуйста, цифровое значение!";
}
