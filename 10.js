//Task1
//Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого 
//есть все элементы входных массивов.
//	  Например:
//		var arrays =  [[1, 2, 3], [4, 5], [6]];    → [1, 2, 3, 4, 5, 6]	

let array = [[1, 2, 3], [4, 5], [6]];
let newArr = array.reduce((arr, el) => {
    arr = arr.concat(el);
    return arr;
}, [])



//Task2
//Создайте функцию-конструктор, которая позволяет создавать объект пользователя с полями first_name, 
//second_name, age, city. С помощью данной функции создайте два объекта пользователей (два пользователя), имя, 
//фамилию, возраст, город проживания задайте сами. 

function User(first_name, second_name, age, city) {
    this.first_name = first_name;
    this.second_name = second_name;
    this.age = age;
    this.city = city;
}

let firstUser = new User('Anastasiya', 'Lesun', 31, 'Minsk');
console.log(firstUser);

let secondUser = new User('Alexander', 'Lesun', 20, 'Minsk');
console.log(secondUser);

//Task3
//Создайте функцию, которая позовляет вывести полную информацию о каждом из двух пользователей созданных 
//в предыдущем задании. Функция должна выполнять вывод информации и не принимать аргументов. 
//По сути нужно одну функцию привязать два объекта. 
		
function twoUsers(){
    return {firstUser, secondUser};
}


