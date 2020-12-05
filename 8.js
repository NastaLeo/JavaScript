//Task 1
//Дан объект let user = { name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk" }.
//Запишите поле name в переменную userName, поле year в переменную userAge, поле car в переменную userCar, 
//остальные поля записать в объект userOtherInfo;

let user = { 
    name: "Ivan", 
    years: 19, 
    car: "Subaru", 
    telePhone: "iPhone", 
    city: "Minsk" 
};

let {name: userName, years: userAge, car: userCar, ...userOtherInfo} = user;
console.log(userName);
console.log(userAge);g
console.log(userCar);
console.log(userOtherInfo);

//Task 2
//Дан массив let arr = [1, "str", 24, {name: "Ivan"}, 89, undeifined, "10"]. 
//Используя оператор расширение и соответсвие порядка следования элементов запишите первые два элемента массива в 
//переменные firstElement, secondElement, число 89 (четвертый элемент массива) в переменную fifthElement. 
//Остальные элементы после 89 запишите в массив otherElements;

let arr = [1, "str", 24, {name: "Ivan"}, 89, undefined, "10"];

let [firstElement, secondElement,,, fifthElement, ...otherElements] = arr;
console.log(firstElement);
console.log(secondElement);
console.log(fifthElement);
console.log(otherElements);


//Task 3
//Используя объект Date представьте текущую дату на момент выполения задания в формате DD.MM.YYYYY 
//(например 5.12.2020). Расширить задание таким образом чтобы если день месяца есть число меньше 10 перед ней 
//ставился "0" (например 05.12.2020);
let today = new Date();
console.log(today);


let date = (today.getDate()).toString();
console.log(date);
let month = (today.getMonth()+1).toString();
console.log(month);
let year = (today.getFullYear()).toString();
console.log(year);
let hours = (today.getHours()).toString();
console.log(hours);
let minutes = (today.getMinutes()).toString();

console.log(minutes);

function format1() {
        if (date < 10) {
            date = '0' + date;
        }
        if (month < 10) {
            month = '0' + month;
        }
    return date.toString() + '.' + month.toString()  + '.' + year.toString()
};
console.log(format1(today));

function format2() {
        if (date < 10) {
            date = '0' + date;
        }
        if (month < 10) {
            month = '0' + month;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
    return date.toString() + '.' + month.toString()  + '.' + year.toString() + ' ' + hours.toString() + ':' + minutes.toString()
};
console.log(format2(today));


//Task 4
//Дан объект let user = {
//  			name: "Ivan",
//  			age: 19
//		     };
//Создайте копию объекта использую сериализацию и десериализацию (JSON.stringify(), JSON.parse());
let user = {
            name: "Ivan",
            age: 19
};

let userJson = JSON.stringify(user); //сериализация
console.log(userJson);
let userNotJson = JSON.parse(userJson); //десериализация
console.log(userNotJson);