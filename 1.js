//Task 1
//Дан массив var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4]; 
//На основании этого массива создать новый массив arrUnique который будет представлять собой массив arr 
//но без дублирующихся по своим значениям элементам. Использовать методы reduce и indexOf.

//via includes
let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
let arrUnique = [];
arr.forEach((element) => {if (!arrUnique.includes(element)) {arrUnique.push(element)
}});
console.log(arrUnique)

// via filter
let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
let arrUnique = [];
arrUnique = arr.filter((item, index) => (arr.indexOf(item) === index));

// via reduce
let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
let arrUnique = arr.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item]
}, []);


//Task 2
//На основании этого массива сформировать новы массив usersAfterYear где все пользователи повзрсолели на год и 
//являются совершенолетними (повзрослевших на год, но оставшимися все еще несовершенолетних пользователей 
//в новый массив usersAfterYear не включать). Сам массив users должен остаться неизменным. Использовать метод map.

let users = [
    {id: 1, name: "Вася", age: 19},
    {id: 2, name: "Петя", age: 18},
    {id: 3, name: "Маша", age: 17},
    {id: 4, name: "Света", age: 18},
    {id: 5, name: "Наташа", age: 17},
    {id: 6, name: "Женя", age: 12},
    {id: 7, name: "Коля", age: 30},
    {id: 8, name: "Настя", age: 16},
    {id: 9, name: "Антон", age: 19},
    {id: 10, name: "Иван", age: 20},
    {id: 11, name: "Павел", age: 16},
    {id: 12, name: "Денис", age: 20},
 ];

let usersAfter = users.map(user => {
    user.age += 1;
    return user
}
);
let usersAfterYear = usersAfter.filter(user => user.age >= 18);


//Task 3
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

let usersAfterUniqueAge = usersAfterYear.reduce((unique, user) => {
                           let index = unique.findIndex(el => el.age === user.age);
                            if (index === -1) {
                                unique.push(user);
                            } return unique;                                     
                            }, []);

//Task 4
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

let keys = Object.keys(users);
console.log(keys);
keys.forEach(key => {
    users[key] = users[key][0].toUpperCase() + users[key].slice(1);
})


//Task 5
//Посчитать первые 8 чисел Фибоначчи использую рекурсию. Например: fibonachi(n); 
//(При вызове функции положите n = 8); 

function fibonachi(n){
    return n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2);
}

fibonachi(8);


//Task 6
//Посчитать с помощью рекурсии факториал числа 10. Например: factorial(n); (При выозове полжите n = 10); 	

function factorial(n) {
    if (n < 0) {
        return;
    }
    else if (n == 1 || n == 0) {
        return 1;
    } else { 
        return n * factorial(n - 1);
    }
}

factorial(10);

