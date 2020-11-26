//Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений строки str.
//n — по умолчанию 2, str — пустая строка.


function repeat(str='', n=2) {
    let new_str;
        while (n > 0) 
        new_str += str;
        return new_str;
}
