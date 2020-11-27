//- Посчитать первые 8 чисел Фибоначчи использую рекурсию. Например: fibonachi(n); 
//(При вызове функции положите n = 8); 

function fibonachi(n){
    return n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2);
}
fibonachi(8);
