//Task1
//Даны две переменные:
let a = 2;
let b = 3;
//   Осуществить замену переменных местами так чтобы "a" стало равно 3, "b" стало равно 2. Ввестии третью переменную для реализации замены.
let c = a;
console.log(c);
a = b;
console.log(a);
b = c;
console.log(b)




//Task2
// Дан массив чисел:
let arr = [1, 2, 4, 10, 5, 19, 4, -14, 2, 11];


//2.1Напишите функцию, реализующую свой собственный алгоритм поиска и возвращения индекса минимального элемента массива, опираясь 
//на то что рассмотрели на лекции.
function findIndexOfMinElement(arr){

    let minElement = arr.length ? arr[0] : 0;
    let min_index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i] ;
            min_index = i;
        }
    } 
  
    return min_index;
   
}


let min_index = findIndexOfMinElement(arr);
console.log(min_index);


  
//2.2Напишите функцию, реализующую свой собственный алгоритм поиска и возвращения индекса максимального элемента массива, опираясь 
//на то, что рассмотрели на лекции.

function findIndexOfMaxElement(arr){
    let maxElement = arr.length ? arr[0] : 0;
    let max_index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i] ;
            max_index = i;
        }
    } 
  
    return max_index;
    
}

let max_index = findIndexOfMaxElement(arr);
console.log(max_index);
  
//2.3Результат, возвращаемый каждой функцией записать в переменные min_index и max_index. С помощью этих переменных поменять 
//в исходном массиве максимальный и минимальный элементы местами.

function changeElements(min_index, max_index){

    let min = arr[min_index];
    let max = arr[max_index];
   
    let intermediateValue = min;
    arr[min_index] = max;
    arr[max_index] = intermediateValue;
   
    console.log(arr);
}
 

changeElements(min_index, max_index)