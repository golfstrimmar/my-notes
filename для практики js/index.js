window.onload=function(){
  function _(el) {
    return document.querySelector(el);
  }

let a = ["1", "2"]
console.log(a)


  // let sample = _(".sample .sample-board");

  //  sample.addEventListener('click', function (event) {

  //  this.classList.add("board");
  //  if(this.classList.contains("board")){
  //    this.classList.remove("board")
  //  };
  //  });

  

  // function activeItem(){
  // this.classList.toggle("board");
  // }

  
//  sample.onclick =	function activeItem(){
// this.classList.toggle("board");
//  }		

// ================= добавление - убавление рамки у элементов массива=========
// let items =document.querySelectorAll(".sample .sample-board");		
// for( let i =0; i< items.length; i++		 ){
//   items[i].onclick = activeItem;
// }

// function activeItem() {
//   this.classList.toggle("board");
// };

// setInterval(function () {
// let rand = mtRand(0, items.length - 1);
// // здесь вызываем метод activeItem  и навязываем ему контекст-- элемент items[rand]		
// activeItem.call(items[rand]);
// },500)

// // генерирует случайное целое число в интервале
// function mtRand(min,max) {
//   return Math.floor( Math.random()*( max - min + 1));
// }
// ============================================================


// let timer = new Timer(60, sample);
// setInterval(function() {
//   timer.tick();
// }, 1000);





};
// function Timer(time, elem){
//   this.time =time;
//   this.elem = elem;
//   this.tick = function(){
//     this.time--;
//     this.elem.innerHTML = this.time;
//   }
// }












// замыкания - это когда одна функция объявляется внутри другой и внутренняя функция видит все переменные внешней. в данном примере activeItem() выведет в консоль sample. а если вынести объявление функции  activeItem() за пределы функции window.onload=function(). то даст ошибку


// function activeItem(){
// this.classList.toggle("board");	
// }


