//Создайте функцию avg() , которая будет находить среднее значение арифмитическое значение своих аргументов.

function avg(){
    let sum =0;

    for(i=0; i < arguments.length; i++)
    sum += arguments[i];
    
    return sum == 0 ? sum : sum / arguments.length;
}
