//Есть функция function f(x) {}
//Если аргмент есть то функция возвращает 1, если аргмент undefined то возвращает 0. 
//Дополнительное задание: реализовать функцию function f(x) как стрелочную.


// function declaration
function f() {
    return (arguments.length >= 1) ? 1: 0
}

// стрелочная функция
let f = (x) => {
    if (x !== undefined) {
        return 1;
    } else {
        return 0;
}
}

