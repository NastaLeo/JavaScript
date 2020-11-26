let total = [10, 'a', 25, 100];
let sum = 0;
for(let i = 0; i < (total.length); i++) {
   if ((typeof total[i] === 'number') && !isNaN(i)) {
   sum += total[i];
}
}
alert('Сумма ' + sum);