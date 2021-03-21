//Task1
//Дан массив чисел: 

//Отсортировать данный массив методом сортировки выбором (желательно использовать рекурсию). Следющим шагом будет в отсортированном 
//массиве используя наиболее эффективный алгоритм в этом случае найти индекс числа 5. После чего узнав индекс пятерки поменять ее местами 
//с последним элементом. По сути надо написать две функции: функцию сортировки, функцию поиска. Замену местами можно сделать без функций.
let arr = [1, 2, -20, 4, 5, 7, 8, 10, 6, 3];

function sortArr(arr) {
    let min;
    let exchange;


    for (let i = 0; i < arr.length; i++) {

        min = arr[i];
      
        for(let j = i+1; j < arr.length; j++){

            if (min > arr[j]) {
                exchange = arr[i];
                arr[i] = arr[j];
                arr[j] = exchange;
                console.log(arr)
            }

        } 

    } return(arr)

}

let arr1 = sortArr(arr);
console.log(arr1);



function findIndexOfElement(arr1, el) {

    let start = 0;
    let end = arr1.length - 1;
    let middle;
    let indexEl = -1;

    while(start <= end) {

        middle = Math.ceil((start + end) / 2);

        if(el === arr1[middle]) {

            indexEl = middle;
            return indexEl;

        } else if(el < arr1[middle]) {
            
            end = middle - 1;
        
        } else if(el > arr1[middle]) {

            start = middle + 1;

        }

    }

    return indexEl;

}


let indexOfFive = findIndexOfElement(arr1, 5);
console.log(indexOfFive)

let exchange = indexOfFive;
arr1[indexOfFive] = arr1[arr1.length -1];
arr1[arr1.length -1] = exchange

console.log(arr1);


  
//Task2
//Дан массив автомобилей: 
let cars = [
	{name: "BMW", model: "528", age: 1983},
	{name: "Subaru", model: "Forester", age: 2002},
	{name: "Mercedes-Benz", model: "W124", age: 1993},
	{name: "Audi", model: "100 C3", age: 1990},
	{name: "BMW", model: "316i", age: 1986},
	{name: "Toyota", model: "Camry", age: 2005},
	{name: "BMW", model: "540", age: 2003},
	{name: "Peugeot", model: "607", age: 2004},
	{name: "Mitsubisi", model: "Lancer", age: 2001},
	{name: "Subaru", model: "Forester", age: 2002},
	{name: "Audi", model: "100 C3", age: 1990},
	{name: "Subaru", model: "Forester", age: 2002},
	{name: "BMW", model: "540", age: 2003},
	{name: "Audi", model: "100 C3", age: 1990}
]

function sliceDublicates(cars) {

    let newArr = [];
    
    for(let i = 0; i < cars.length; i++){

        if(newArr.findIndex(el => el.name === cars[i].name && el.model === cars[i].model && el.age === cars[i].age) != -1) {
            return newArr;
        }

        else {
            newArr.push(cars[i]);
        }
  
    } return newArr;
   
}

let arrWithoutDublicates = sliceDublicates(cars);
console.log(arrWithoutDublicates);



//Task3
//Полученный в предыдущем задании массив без дубликатов попробуйте отсортировать по убыванию, используя алгоритм быстрой сортировки.


function sortNewArr(arr){

    if(arr.length <= 1) {
        return arr
    }

    let start = 0;
    let end = arr.length;
    let middleIndex = Math.ceil((start + end)/2);
    let middle = arr[middleIndex];
    
    let firstArr = [];
    let secondArr = [];
    
    for(let i = 0; i < arr.length; i++) {

        if(i === middleIndex) {

            continue;

        } 
        
        if(arr[i].age > middle.age) {

            firstArr.push(arr[i]);

        } else if (arr[i].age <= middle.age) {

            secondArr.push(arr[i]);

        }

    } return [...sortNewArr(firstArr), middle, ...sortNewArr(secondArr)];

}


sortNewArr(arrWithoutDublicates);
