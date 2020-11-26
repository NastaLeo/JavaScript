let User = [{name: 'Ivan', age: 18}, {name: 'Petr', age: 12}, {name: 'Sidor', age: 25}, {name: 'Pavel', age: 24}, {name: 'Sasha', age: 29}]

let youngUsers = User.filter(item => item.age < 18); 
let elderUsers = User.filter(item => item.age >= 18); 
 alert(youngUsers);
 alert(elderUsers);