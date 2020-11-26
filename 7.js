//В массиве users посчитайте общий суммарный возраст всех пользователей.

let users = [
    {id: 1, name: "Вася", age: 20},
    {id: 2, name: "Петя", age: 19},
    {id: 3, name: "Маша", age: 18},
    {id: 4, name: "Дима", age: 17}
];


let sumAge = users.reduce((sum, user, age) => sum + user.age, 0);
console.log(sumAge);
