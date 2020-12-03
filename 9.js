//Task1
//Напишите функцию func() которая при каждом своем вызове будет возвращать количество своих вызовов 
//(сколько раз ее вызызвали до этого плюс этот вызов);

function func() {
    let currentCount = 0;  
        return function(){
            currentCount++;
            return currentCount;
        } 
    }
let counter = func();
console.log(counter());
        

//Task2
//Напишите функцию которая будет увеличивать переменную let i = 0, от 0 до 20, при чем переменная будет увеличивать
//свое значение на еденицу каждые 2 секунды. Когда переменная станет равной 20 прекратить увеличение. 
//Попробуйте реализовать через setInterval и через рекурснивный setTimeout.

//setInterval
function showIncreaseLet(){
    let i = 0;
    console.log(i);
    let intervalId = setInterval(() => {
       i += 1;
       console.log(i)}, 2000);
    // if (i === 20) {
    //     setTimeout(() => {clearInterval(intervalId)
    //     }, 1000);    
    //    }
}
  
//рекурсивный setTimeout
let i = 0;
function showIncreaseLet(){
    console.log(i);
    setTimeout(() => {i += 1;
    }, 2000);
    setTimeout(showIncreaseLet, 2000)
}

            
//Task3
//Напишите функцию startTimer() которая будет запускать вывод через confirm("Реклама исчезнет счерез 5 секунд, 
//вы согласны ?"),  при нажатии "ДА" вывоите alert("Реклама") через 5 секунд, если нажали "НЕТ", 
//то повторить вопрос confirm("Реклама исчезнет счерез 5 секунд, вы согласны ?")
//и так до тех пор пока пользовательне нажмет "ДА" и не увидит эту рекламу через alert.  

//сообщение 'Реклама исчезнет через 5 секунд, вы согласны ?' будет выскакивать непрерывно
function startTimer(){
        let answer = confirm("Реклама исчезнет через 5 секунд, вы согласны ?", '');
        console.log(answer);
            if (!!answer === true) {
                setTimeout(() => {alert('Реклама')           
                }, 5000);
            } else { return startTimer();
            }
        };

//сообщение 'Реклама исчезнет через 5 секунд, вы согласны ?' при отказе будет выскакивать с периодичностью 5 секунд
function startTimer(){
        let answer = confirm("Реклама исчезнет через 5 секунд, вы согласны ?", '');
        console.log(answer);
            if (!!answer === true) {
                setTimeout(() => {alert('Реклама')           
                }, 5000);
            } else { 
                if (!!answer === true) {setTimeout(() => {clearInterval(setInterval(startTimer(), 5000)), alert('Реклама')
                }, 5000);}
                return setInterval(startTimer(), 5000);
            }
        };