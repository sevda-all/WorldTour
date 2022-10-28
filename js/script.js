
const animations = document.querySelectorAll('.animation');

if (animations.length > 0) {
  window.addEventListener('scroll', animationOnScroll);

  function animationOnScroll(params) {
    for (let index = 0; index < animations.length; index++) {
      const animation = animations[index];
      const animationHeight = animation.offsetHeight;
      const animationOffset = offset(animation).top;
      const animationStart = 4;


      let animationPoint = window.innerHeight - animationHeight / animationStart;
      if (animationHeight > window.innerHeight) {
        animationPoint = window.innerHeight - window.innerHeight / animationStart;
      }


      if ((window.scrollY > animationOffset - animationPoint) && window.scrollY < (animationOffset + animationHeight)) {
        animation.classList.add('active');
      } else {
        if (!animation.classList.contains('animation-stop')) {
          animation.classList.remove('active');
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();
    let scrollLeft = window.scrollY || document.documentElement.scrollLeft;
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() => {
    animationOnScroll();
  }, 400);
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  freeMode: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

$(function () {
  $("#display").click(function () {
    $(".hidden-area").css("display", "flex");
    $("#hide").css("display", "flex");
    $("#display").css("display", "none");
  });

  $("#hide").click(function () {
    $(".hidden-area").css("display", "none");
    $("#hide").css("display", "none");
    $("#display").css("display", "flex");
  });
});


function validate() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var error_message = document.getElementById("error_message");

  var re_phone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
  var re_email = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  var valid_phone = re_phone.test(phone);
  var valid_email = re_email.test(email);

  error_message.style.padding = "10px";

  var text;
  if (name.length < 5 || name === '') {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if (!valid_phone || phone === '') {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if (!valid_email || email === '') {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your application uccessfully sent!',
    showConfirmButton: false,
    timer: 15000
  })
}
