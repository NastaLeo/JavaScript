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


// via reduce не работает
// let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
// let arrUnique = [];
// arrUnique = arr.reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), 0);