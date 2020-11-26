//Напишите функцию words(n), которая в зависимости от переданного в нее целочисленного аргумента n, 
//будет выводить слово «товар» в нужной форме («12 товаров», но «22 товара»). 
//По умолчанию аргумент n должен иметь значение 0.

function words(n = 0) {
  let remainder1 = n % 10;
  let remainder2 = n % 100;
     
    if (remainder1 === 1 && remainder2 != 11) {
      alert(`${n} товар`);
}

    else if ((remainder1 === 2 && remainder2 != 12) || 
             (remainder1 === 3 && remainder2 != 13) || 
             (remainder1 === 4 && remainder2 != 14)) {
      alert(`${n} товара`);
}

    else {
      alert(`${n} товаров`);
}   
}
