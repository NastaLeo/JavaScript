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
		
