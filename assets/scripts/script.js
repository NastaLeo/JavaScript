//Напишите код как получить h1, ul, коллекцию элементов li, коллекцию четных элементов li, 
//коллекцию нечетных элементов li (для этого вспоминаем odd, even в css).
      
const h1 = document.querySelector('h1');
console.log(h1);

const ul = document.querySelector('.users-list');
console.log(ul);

const li = document.querySelectorAll('li');
console.log(li);

const liEven = ul.querySelectorAll(':nth-child(even)');
console.log(liEven);
console.log(liEven[0], liEven[1]);

const liOdd = ul.querySelectorAll(':nth-child(odd)');
console.log(liOdd);
console.log(liOdd[0], liOdd[1]);


//Добавьте для всех четных элементов li красный цвет текста. А для нечетных элементов синий цвет текста 
//(это можно сделать через styles). 
liEven.forEach(el => el.style.color = 'red');
liOdd.forEach(el => el.style.color = 'blue');

//Задание со звездочкой. Для всех нечетных переключение цвета с красного на синий каждый две секунды
//(вначале красный через 2 секунды синий, потом через 2 секунды опять красный и т.д.).
//А для нечентных элементов переключение с синего на красный цвет каждые две секунды
//(вначале синий 2 секунды через 2 секунды красный, потом через 2 секунды опять синий и т.д.).
//Для этого использовать setInterval. 	


setInterval(() => {liEven.forEach(el => el.style.color === 'red' ? el.style.color = 'blue' : el.style.color = 'red')
}, 2000);

setInterval(() => {liOdd.forEach(el => el.style.color === 'blue' ? el.style.color = 'red' : el.style.color = 'blue')
}, 2000);


// setInterval(() => {if (liOdd[0].style.color === 'blue') {
//     liOdd[0].style.color = 'red';
//     } else {liOdd[0].style.color = 'blue';
//     }
// }, 2000);

// setInterval(() => {if (liOdd[1].style.color === 'blue') {
//     liOdd[1].style.color = 'red';
//     } else {liOdd[1].style.color = 'blue';
//     }
// }, 2000);
