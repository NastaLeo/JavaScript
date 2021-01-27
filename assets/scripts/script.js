//Task1
//Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... }, которая принимает на вход числовой показатель загрязнения комнаты 
//(от 0 до 10). В зависимости от этого числа опеределяется сколько времени надо потратить на уборку, это время равно значению 
//dirtyLevel * 1000 в мс. Данная функция возвращает успешно выполненный промис спустя указанное время dirtyLevel * 1000.
//Для обработки успешной уборки в then используйте console.log(`Уборка проведена успешно за ${result} секунд`); где result это аргумент
//resolve.


function cleanRoom(dirtyLevel) { 
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (dirtyLevel >= 0 && dirtyLevel <= 10) {
                resolve(dirtyLevel);
            } 
        }, dirtyLevel * 1000)
    })
}

cleanRoom(5)
    .then(result => 
        console.log(`Уборка проведена успешно за ${result}  секунд`)
    )

//Task2
//Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 вы спустя dirtyLevel * 1000 мс возвращали выполненный
//с ошибкой промис. Для обработки неуспешной уборки в then используйте console.log(err). Где err это аргумент reject. 
//Текст ошибки придумайте сами.

function cleanRoom(dirtyLevel) { 
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (dirtyLevel >= 0 && dirtyLevel <= 10) {
                resolve(dirtyLevel);
            } else {
                reject('Ваша комната слишком грязная');
            }
        }, dirtyLevel * 1000)
    })
}

cleanRoom(12)
    .then(result => 
          console.log(`Уборка проведена успешно за ${result}  секунд`),
          err => console.log(err)
    )


//Task3
//Задание со звездочкой. Расширьте предыдущее задание так, чтобы можно было осуществить последовательную уборку трех комнат. 
//Для этого создайте цепочку промисов. Только после того как уборка комнаты завершена, пользователь может начать убирать новую. 
//Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью. Для этого функция 
//cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргемента, каждый из кторых описывает 
//уровень загрязнения каждой комнаты.

function cleanRoom(dirtyLevel) { 
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (dirtyLevel >= 0 && dirtyLevel <= 10) {
                resolve(dirtyLevel);
            } else {
                reject('Ваша комната слишком грязная');
            }
        }, dirtyLevel * 1000)
    })
}

function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
    return cleanRoom(dirtyLevel_1)
    .then(result => {
        console.log(`Уборка проведена успешно за ${result}  секунд`)
        return cleanRoom(dirtyLevel_2);
    }).then(result => {
        console.log(`Уборка проведена успешно за ${result}  секунд`)
        return cleanRoom(dirtyLevel_3);
    }).then(result => {
        console.log(`Уборка проведена успешно за ${result}  секунд`)
    }).catch(err => console.log(err));
}

cleanRooms(3, 11, 2);

// async & await

async function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
    try {
        let result1 = await cleanRoom(dirtyLevel_1);
        console.log(`Уборка проведена успешно за ${result1}  секунд`);
        let result2 = await cleanRoom(dirtyLevel_2);
        console.log(`Уборка проведена успешно за ${result2}  секунд`);
        let result3 = await cleanRoom(dirtyLevel_3);
        console.log(`Уборка проведена успешно за ${result3}  секунд`)
    } catch(err) {
        console.log(err)
    }
}

cleanRooms(3, 11, 2);
   

//Task4
//Задача на повторение массивов. Дан массив строк (например ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"]).
//Ваша задача написать функцию countRepeats которая будет выводить информацию о том какой элемент в данном массиве сколько раз повторяется.
//Функция должна возвращать объект типа:
// 	  	{
// 			str:  3,
// 			str1: 2,
// 			str2: 2,
// 			str4: 2,
// 			str3: 1,
// 		}	
// Обратите внимание что информация должна быть отсортирована по убыванию повторений.


let arr = ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"];

let obj = arr.reduce((acc, elem) => {
    acc[elem] = (acc[elem] || 0) + 1;
    return acc;
}, {});

let obj1 = Object.fromEntries(Object.entries(obj).sort((a, b) => b[1] - a[1]));
console.log(obj1);