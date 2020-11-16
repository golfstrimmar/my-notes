window.onload=function(){
  function _(el) {
    return document.querySelector(el);
  }
  let sample = _(".sample .sample-board");

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

let items =document.querySelectorAll(".sample .sample-board");		
for( let i =0; i< items.length; i++		 ){
  items[i].onclick = activeItem;
}

function activeItem() {
    this.classList.toggle("board");
  };

// setInterval(activeItem, 500);

};

// замыкания - это когда одна функция объявляется внутри другой и внутренняя функция видит все переменные внешней. в данном примере activeItem() выведет в консоль sample. а если вынести объявление функции  activeItem() за пределы функции window.onload=function(). то даст ошибку


// function activeItem(){
// this.classList.toggle("board");	
// }


