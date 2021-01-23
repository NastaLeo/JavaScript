//Task1
//Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... }, которая принимает на вход числовой показатель загрязнения комнаты 
//(от 0 до 10). В зависимости от этого числа опеределяется сколько времени надо потратить на уборку, это время равно значению 
//dirtyLevel * 1000 в мс. Данная функция возвращает успешно выполненный промис спустя указанное время dirtyLevel * 1000.
//Для обработки успешной уборки в then используйте console.log(`Уборка проведена успешно за ${result} секунд`); где result это аргумент
//resolve.


// function cleanRoom(dirtyLevel) { 
//     let cleaningTime = dirtyLevel * 1000;
//         return new Promise(function(resolve, reject) {
//             setTimeout(() => {
//                 if (dirtyLevel >= 0 && dirtyLevel <= 10) {
//                     resolve(cleaningTime);
//                 } 
//             }, cleaningTime)
//         })
// }

// cleanRoom(5)
//     .then(result => 
//         console.log(`Уборка проведена успешно за ${result / 1000}  секунд`)
//     )


//Task2
//Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 вы спустя dirtyLevel * 1000 мс возвращали выполненный
//с ошибкой промис. Для обработки неуспешной уборки в then используйте console.log(err). Где err это аргумент reject. 
//Текст ошибки придумайте сами.

// function cleanRoom(dirtyLevel) { 
//     let cleaningTime = dirtyLevel * 1000;
//         return new Promise(function(resolve, reject) {
//             setTimeout(() => {
//                 if (dirtyLevel >= 0 && dirtyLevel <= 10) {
//                     resolve(cleaningTime);
//                 } else {
//                     reject('Ваша комната слишком грязная');
//                 }
//             }, cleaningTime)
//         })
// }

// cleanRoom(12)
//     .then(result => 
//           console.log(`Уборка проведена успешно за ${result / 1000}  секунд`),
//           err => console.log(err)
//     )


//Task3
//Задание со звездочкой. Расширьте предыдущее задание так, чтобы можно было осуществить последовательную уборку трех комнат. 
//Для этого создайте цепочку промисов. Только после того как уборка комнаты завершена, пользователь может начать убирать новую. 
//Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью. Для этого функция 
//cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргемента, каждый из кторых описывает 
//уровень загрязнения каждой комнаты.

// function cleanRoom (dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
//         return new Promise((resolve, reset) => {
//             if (dirtyLevel_1 >= 0 && dirtyLevel_1 <= 10) {
//                 setTimeout(() => {
//                     resolve(dirtyLevel_1 * 1000);
//                 }, dirtyLevel_1 * 1000)
//             } else {
//                 reject ('Ваша комната слишком грязная. Вся уборка будет приостановлена');
//             }
//         }).then(result => {console.log(`Уборка проведена успешно за ${result / 1000}  секунд`);
//             return new Promise((resolve, reset) => {
//                 if (dirtyLevel_2 >= 0 && dirtyLevel_2 <= 10) {
//                     setTimeout(() => {
//                         resolve(dirtyLevel_2 *1000)
//                     }, dirtyLevel_2 * 1000)
//                 } else {
//                     reject ('Ваша комната слишком грязная. Вся уборка будет приостановлена');
//                 }
//             })
//         }).then(result => {console.log(`Уборка проведена успешно за ${result / 1000}  секунд`);
//             return new Promise((resolve, reset) => {
//                 if (dirtyLevel_3 >= 0 && dirtyLevel_3 <= 10) {
//                     setTimeout(() => {
//                         resolve(dirtyLevel_3 *1000)
//                     }, dirtyLevel_3 * 1000)
//                 } else {
//                     reject ('Ваша комната слишком грязная. Вся уборка будет приостановлена');
//                 }
//             })
//         }).then(result => {console.log(`Уборка проведена успешно за ${result / 1000}  секунд`)})
// }

function cleanRoom (dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
    let cleaningTime = dirtyLevel_1;
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (cleaningTime >= 0 && cleaningTime <= 10) {
                resolve(cleaningTime *1000);
            } else {
                reject('Ваша комната слишком грязная. Вся уборка будет приостановлена');
            }
        }, cleaningTime *1000)
    })
}

cleanRoom(3, 4, 2)
    .then(result => {
        console.log(`Уборка проведена успешно за ${result / 1000}  секунд`);
        return function cleanRoom1(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
            cleaningTime = dirtyLevel_2;
            return new Promise(function(resolve, reject) {
                setTimeout(() => {
                    if (cleaningTime >= 0 && cleaningTime <= 10) {
                        resolve(cleaningTime * 1000);
                    } else {
                        reject('Ваша комната слишком грязная. Вся уборка будет приостановлена');
                    }
                }, cleaningTime * 1000)
        })}
    }).then(result1 => {
         console.log(`Уборка проведена успешно за ${result1 / 1000}  секунд`);
    })


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


// let arr = ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"];

// let obj = arr.reduce((acc, elem) => {
//     acc[elem] = (acc[elem] || 0) + 1;
//     return acc;
// }, {});

// Object.values(obj).sort();
// console.log(obj);
