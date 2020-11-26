//Создать массив объектов для юзеров [
//    {name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, 
//    {name: ‘Sidor’, age: 25}, {name: ‘Pavel’, age: 24}, 
//    {name: ‘Sasha’, age: 29}
//]
//Написать скрипт, который будет на выходе отдавать два массива. 
//Первый с совершеннолетними пользователями, второй с несовершеннолетними. Использовать метод filter. 
//Полученные на выходе два массива отсортировать (каждый) по старшинству членов (от старшего к младшему).
//Расширить предыдущее задание так чтобы из исходного массива удалялись все несовершенолетние пользователи.


let users = [
    {name: 'Ivan', age: 18}, 
    {name: 'Petr', age: 12}, 
    {name: 'Sidor', age: 25}, 
    {name: 'Pavel', age: 24}, 
    {name: 'Sasha', age: 29}
];

let teenUsers = users.filter(item => item.age < 18);
let adultUsers = users.filter(item => item.age >= 18);

teenUsers.sort((a, b) => a.age > b.age ? 1 : -1);
adultUsers.sort((a, b) => a.age > b.age ? 1 : -1);

for (let i = 0; i < users.length; i++) {
    if (users[i].age < 18) { 
        users.splice(i, 1);
        i--;
    }
}
console.log(users);
