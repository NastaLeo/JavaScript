//Необходимо сделать так чтобы все значения полей объекта users начинались с заглавной буквы 
//(например не "pavel" a "Pavel"). Для решения этой задачи рекомендую использовать методы Object.keys или 
//Object.values и методы строк как UpperCase. 

let users = {
    first_name: "pavel",
    second_name: "ivanov",
    father_name: "ivanovich",
    city: "minsk",
    car: "subaru",
    telephone: "samsung" 
}

let values = Object.values(users);
for(let value of values) {
    value = value[0].toUpperCase();
}
let strValues = values.join(',');


let arrUpper = strValues.split(',').toUpperCase;

String()[0].toUpperCase();