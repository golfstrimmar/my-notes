function _(el) {
  return document.querySelector(el);
}
let menu = _(".header__menu");
let wrapper = _(".wrapper");
let header = _(".header");
let headerlink = _(".header__link");
let burger = _(".header__burger");
let close2 = _(".icon-close2");
let phone = _(".header__phone");
let body = document.body;
let scrollup = _(".up_down_btn");

wrapper.addEventListener("click", function (event) {
  if (event.target == burger) {
    menu.classList.add("header__menu_act");
    phone.classList.add("header__phone_act");
    menu.appendChild(phone);
    body.style.overflow = "hidden";
  }else{
  if (event.target !== menu) {
    menu.classList.remove("header__menu_act");
    menu.removeChild(phone);
    header.appendChild(phone);
    phone.classList.remove("header__phone_act");
    body.style.overflow = "visible";
  }
  }
});











// close2.addEventListener("click", function (event) {
//    menu.classList.remove("header__menu_act");
//    menu.removeChild(phone);
//    header.appendChild(phone);
//    phone.classList.remove("header__phone_act");
//    body.style.overflow = "visible";
// });

window.addEventListener("resize", function (event) {
  if (document.documentElement.clientWidth > 768) {
    menu.classList.remove("header__menu_act");
    menu.removeChild(phone);
    header.appendChild(phone);
    body.style.overflow = "visible";
  } else {
    menu.appendChild(phone);
    header.removeChild(phone);
    body.style.overflow = "hidden";
  }
});

window.addEventListener("scroll", function (event) {
  if (window.pageYOffset > 50) {
    header.style.cssText = `height: 60px;	background-color: rgba(36, 36, 36, 0.8);`;
  } else {
    header.style.cssText = `height: 80px;background-color: rgba(36, 36, 36, 0.2);`;
  }
});

// ============кнопка на начало
// $(document).ready(function (e) {
//     $(".scrollup").click(function () {
//       $("html, body").animate(
//         {
//           scrollTop: 0,
//         },
//         1000
//       );
//     });
//   }),
//     $(document).ready(function (e) {
//       $(window).scroll(function () {
//         if ($(this).scrollTop() > 200) {
//           $(".scrollup").fadeIn();
//         } else {
//           $(".scrollup").fadeOut();
//         }
//       });
//     }),

(function () {
  "use strict";

  var upDownBtn = document.querySelector(".up_down_btn");
  var check;

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = 200;

    if (scrolled > coords) {
      upDownBtn.classList.add("up_down_btn-show");
      upDownBtn.innerHTML = "&uarr;";
      upDownBtn.setAttribute("title", "Наверх");
      check = false;
    }
    if (scrolled < coords) {
      upDownBtn.innerHTML = "&darr;";
      upDownBtn.setAttribute("title", "Вниз");
      check = true;
    }
  }

  function backToTop() {
    upDownBtn.classList.add("up_down_btn-disabled");
    if (!check) {
      (function goTop() {
        if (window.pageYOffset !== 0) {
          window.scrollBy(0, -15);
          setTimeout(goTop, 0);
        } else {
          upDownBtn.classList.remove("up_down_btn-disabled");
        }
      })();
      return;
    } else if (check) {
      (function goBottom() {
        var match = Math.ceil(
          window.pageYOffset + document.documentElement.clientHeight
        );

        if (match != document.documentElement.scrollHeight) {
          window.scrollBy(0, 15);
          setTimeout(goBottom, 0);
        } else {
          upDownBtn.classList.remove("up_down_btn-disabled");
        }
      })();
      return;
    }
  }

  window.addEventListener("scroll", trackScroll);
  upDownBtn.addEventListener("click", backToTop);
})();
