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

//не работает
// for(let value of Object.values(users)){
//     value = (String(value)[0].toUpperCase() + String(value).slice(1));
// }
// console.log(users);

let values = Object.values(users);
let valuesUpper = values.map((value) => (value[0].toUpperCase() + value.slice(1)));
//как вернуть в объект?