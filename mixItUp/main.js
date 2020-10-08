  $(document).ready(function () {
   var containerEl = document.querySelector("#Container");
   var mixer = mixitup(containerEl, {
     controls: {
       toggleLogic: "and",
     },
   });
  });

