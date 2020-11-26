//Написать функцию  sum(a, b), которая возвращает сумму переданных ей аргументов. 
//Реализовать с помощью function declaration и с помощью стрелочной функции. 
//Использовать цикл "for in" если это возможно.
      
//fuction declaration
function sum(a, b) {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        if ((typeof arguments[i] === 'number') && !isNaN(arguments[i])) {
            sum += arguments[i];
    }
    }
    return sum;
}

//стрелочная функция
let sum = (a, b) => {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        if ((typeof arguments[i] === 'number') && !isNaN(arguments[i])) {
            sum += arguments[i];
    }
    }
    return sum;
}

//for in нельзя использовать 
