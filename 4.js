//В измененном массиве arr2 извлечь последние 4 элемента с конца и записать их в массив arr3. 
//Сам массив arr2 не должен измениться (извлеченные из него эелементы должны в нем остаться). 
//Массив arr3 осортировать по возрастанию.


let arr2 = [2, 5, 19, 2, 21, 4, 4, 1, 10, 25, 67, 87, 56];

let arr3 = arr2.slice(-4);
console.log(arr3);

arr3.sort(function(a, b) {return a - b;});
console.log(arr3);


