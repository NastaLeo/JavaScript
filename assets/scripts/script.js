//Task1
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
   


//Task2
//На основанни задачи из прошлого дoмашнего задания сделайте так, чтобы можно было осуществить параллельную уборку 
//трех комнат. Только после того как уборка всех комнат завершена, пользователь может заявить об окончании уборки. 
//Если одна из комнат оказалась слишком грязной, то пpекращаем уборку полностью. Для этого функция 
//cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргyмента, 
//каждый из кторых описывает уровень загрязнения каждой комнаты. 


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

async function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3){
    try{
        let results = await Promise.all([
        cleanRoom(dirtyLevel_1),
        cleanRoom(dirtyLevel_2),
        cleanRoom(dirtyLevel_3),
        ])
        console.log(`Все комнаты убраны. Время уборки: ${results} секунд`)
    } catch(err){
        console.log('Одна из комнат слишком грязная')
    }
   
}

cleanRooms(2, 9, 4)
cleanRooms(3, 11, 5)








