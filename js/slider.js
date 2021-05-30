$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    effect: "coverflow",
    keyboard: {
      enabled: "true",
      onlyInViewport: "true",
    },
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
    effect: "slide",
    keyboard: {
      enabled: "true",
      onlyInViewport: "true",
    },
  });
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Клик по кнопке меню");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    var $body = $(document.body);
    var oldWidth = $body.innerWidth();
    $body.css("overflow", "hidden");
    $body.width(oldWidth);
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    var $body = $(document.body);
    $body.css("overflow", "auto");
    $body.width("auto");
  }

  $(document).keyup(function (event) {
    if (event.which == "27") {
      $(".modal__overlay").removeClass("modal__overlay--visible");
      $(".modal__dialog").removeClass("modal__dialog--visible");
    }
  });
  $("#adminModal")
    .modal()
    .on("shown", function () {
      $("body").css("overflow", "hidden");
    })
    .on("hidden", function () {
      $("body").css("overflow", "auto");
    });
  // Обработка форм
  $(".modal__form").validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "The name must be more than two letters",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Phone is required",
        minlength: "You must enter 10 digits",
      },
    },
  });
  $(".footer__form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must be more than two letters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone is required",
          minlength: "You must enter 10 digits",
        },
      },
    });
  });
  $(".subscribe").validate({
    errorClass: "invalid",
    messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
    },
  });
  $(".footer__input--phone_us").mask("+7 (000) 000-00-00");
  $(".modal__input--phone_us").mask("+7 (000) 000-00-00");
  AOS.init();
});
