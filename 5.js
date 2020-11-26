//Отсортировать массив arr2 по убыванию. Посчитать сумму его эелементов. 
//(Попробуйте использовать метод reduce в статье про методы есть его описание).



let arr2 = [2, 5, 19, 2, 21, 4, 4, 1, 10, 25, 67, 87, 56];

arr2.sort(function(a, b) {return b - a;});
console.log(arr2);
let sum = arr2.reduce((sum, item) => sum + item, 0);
console.log(sum);
