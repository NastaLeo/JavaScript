//На основании массива usersAfterYear, полученного на основании предыдущего задания создать 
//новый массив usersAfterYearUniqueAge, в котором нет пользователей с одинаковым возрастом. 
//Если у вас есть два пользователя ({id: 2, name: "Петя", age: 19} и {id: 4, name: "Света", age: 19}, 
//то вы должны оставить только Петю или Свету одного а не их двоих). 
//(Это задание похоже на первое задания про массив arr и arrUnique)

let usersAfterYear = [
    {id: 1, name: "Вася", age: 20},
    {id: 2, name: "Петя", age: 19},
    {id: 3, name: "Маша", age: 18},
    {id: 4, name: "Света", age: 19},
    {id: 5, name: "Наташа", age: 18},
    {id: 7, name: "Коля", age: 31},
    {id: 9, name: "Антон", age: 20},
    {id: 10, name: "Иван", age: 21},
    {id: 12, name: "Денис", age: 21},
 ];

 // не работает usersAfterYearUniqueAge = usersAfterYear.reduce((unique, user) => {usersAfterYear.includes(user.age) ? unique : [...unique, user]}, 0);

 // выводятся все значения в массив
let usersAfterYearUniqueAge = [];
    for (let user of usersAfterYear) {
        if (!usersAfterYearUniqueAge.includes(user.age)) {
        usersAfterYearUniqueAge.push(user.id, user.name, user.age);
        }
    }
console.log(usersAfterYearUniqueAge);

 