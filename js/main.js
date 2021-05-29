$(document).ready(function () {
  $(".footer__form").validate({
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
  $(".phone_us").mask("+7 (000) 000-00-00");
  AOS.init();
});
