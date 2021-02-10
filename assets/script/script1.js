// Task2 
// Создайте куки с вашем именем и вашим возрастом. При открытии страницы появляется два prompt с просьбой 
// ввести вначале Имя и потом возраст. После чего выведите на экран содержимое этих двух кук. 
// Вывести можно как в прошлом задании только создайте два div.

document.cookie = 'name=Nastya;age=31';

let myName = prompt('Введите свое имя', '');
let myAge = +prompt('Введите свой возраст', '');

document.cookie = `name=` + encodeURIComponent(myName);
document.cookie = `age=` + encodeURIComponent(myAge);

let div1 = document.createElement('div');
document.body.append(div1);
div1.innerHTML = document.cookie.split('; ')[0];

let div2 = document.createElement('div');
document.body.append(div2);
div2.innerHTML = document.cookie.split('; ')[1];
