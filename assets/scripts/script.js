//Task1
//Отправьте GET на адресс 'https://jsonplaceholder.typicode.com/posts' после чего извлеките только первые 20 записей 
//и отсортируйте их по убыванию длины title.

async function getNotes(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
    let json = await response.json();
    console.log(json);

    let result = json.slice(0, 20);
    console.log(result);

    let resultFinal = result.sort((a, b) => {
      return b.title.length - a.title.length
    })
    console.log(resultFinal)
}

getNotes();



//Task2
//Создайте html документ, в котором подключите script.js. В html файле создайте кнопку (любого вида). 
//По нажатию на кнопку отправляйте с помощтю POST запроса на адресс https://jsonplaceholder.typicode.com/posts объект
// {
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//   }
// В случае получения ответа создайте div, в котором будет храниться информация о полученном ответе (поля title и body ответа).
// Оформление div придумайте сами.


let user = {
  title: 'foo',
  body: 'bar',
  userId: 1,
}

let button = document.querySelector('form');
button.onsubmit = async function request(event){
    event.preventDefault();
    try{
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      })

      let result = await response.json();
      console.log('title: ', result.title, 'body: ', result.body)
           
      if (result) {
        let div = document.createElement('div');
      document.body.append(div);
      div.style = 'position:relative; top:50px; border:1px solid green';
      div.innerHTML = 'title: ' + result.title + ', body: ' + result.body;  
      }
    } catch (err){
        console.log(err)
    }
};
