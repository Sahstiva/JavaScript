function fahrenheit(celsius) {
    if (parseInt(celsius))
        return 9 / 5 * parseInt(celsius) + 32;
    else
        return "Введите, пожалуйста, цифровое значение!";
}