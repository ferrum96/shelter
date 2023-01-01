// неповторяющаяся последовательность случайных чисел
let randomSequence = (min, max, howMuch) => {

    // массив в который складываются числа
    let numbers = [];

    // пока длина массива не равна требуемой длине последовательности
    while (numbers.length !== howMuch) {

        // получаем случайное число
        let number = Math.floor(Math.random() * (max - min + 1)) + min;

        // если число найдено в последовательности
        // то переходим на следующую итерацию
        // так как  в последовательности  нам не нужны повторяющиеся значения
        if (-1 !== numbers.indexOf(number)) {

        } else numbers.push(number); // если значение еще нет добавляем его в массив
    }

    return numbers;
}

export default randomSequence;