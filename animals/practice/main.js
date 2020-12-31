



window.onload = () =>
  document.querySelector("#show_ip").onclick =  () =>
   {ajaxGet(); } 

function ajaxGet() {
  var request = new XMLHttpRequest();
  request.open("GET", "form.php");
  request.send();
  
}; 







// let serveResponse = document.querySelector("#response")
// // обращение к форме и событию на форме --submit
// document.forms.ourForm.onsubmit = function (e) {
//   // предотвращение дефолтного поведения события
//   e.preventDefault();
//   // вывод в переменную значения инпута
//   var userInput = document.forms.ourForm.ourForm__inp.value;

//   // если используется метод get то нужно прописать во избежание некорректных запросов к серверу/ иначе
//   // могут быть введены символы, которые поломают get запрос
//   // userInput = encodeURIComponent(userInput);

//   // собственно создание оббъекта запроса
//   let xhr = new XMLHttpRequest();

//   // в url после вопросительного знака вводим данные в виде пары ключ-значение
//   // выбираем произвольное имя ключа
//   // xhr.open("GET", "form.php?" + "ourForm__inp=" + userInput);

//   // если метод Post
//   xhr.open('POST', 'form.php');

//   // заголовок указывается при помощи метода
//   // он обязательно должен находиться после open перед send
//   // это указание для сервера Как обрабатывать пришедшие запрос
//   // иначе сервер проигнорирует данные отправленные методом Post

//   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  

//   // осталось обработать ответ с сервера
//   xhr.onreadystatechange = function () {
//     // проверяем состояние запроса и числовой код состояния HTTP ответа
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       // если запрос стадии удачно
//       // поменяем содержимое Дива response
//       // при помощи свойства Text Content
//       // xhr.responseText;--------это то что пришло с сервера
//       serveResponse.textContent = xhr.responseText;
//     }
//   };


// // отправим запрос в кодировке urlencoded
//   xhr.send("ourForm__inp=" + userInput);


// };




