document.addEventListener('DOMContentLoaded', function () {

  // FAQ
  var faq = document.querySelectorAll('.faq-item');

  faq.forEach(function (item) {
    item.addEventListener('click', function () {

      var answer = item.nextElementSibling;
      var open = item.classList.contains('open');

      // Close other FAQ
      faq.forEach(function (other) {
        if (other !== item) {
          other.classList.remove('open');

          var otherAnswer = other.nextElementSibling;

          if (otherAnswer && otherAnswer.classList.contains('faq-answer')) {
            otherAnswer.classList.remove('open');
          }
        }
      });

      // Open selected FAQ
      item.classList.toggle('open', !open);

      if (answer && answer.classList.contains('faq-answer')) {
        answer.classList.toggle('open', !open);
      }
    });
  });


  // TRENDING
  var arrow = document.querySelector('.scroll');
  var row = document.querySelector('.trending-row');

  if (arrow && row) {

    arrow.addEventListener('click', function () {

      var maxScroll = row.scrollWidth - row.clientWidth;

      if (row.scrollLeft >= maxScroll - 10) {

        row.scrollBy({
          left: -300,
          behavior: 'smooth'
        });

      } else {

        row.scrollBy({
          left: 300,
          behavior: 'smooth'
        });

      }
    });


    row.addEventListener('scroll', function () {

      var maxScroll = row.scrollWidth - row.clientWidth;

      if (row.scrollLeft >= maxScroll - 10) {
        arrow.textContent = '‹';
      } else {
        arrow.textContent = '›';
      }

    });

  }


  // EMAIL
  var forms = document.querySelectorAll('.email-form');

  forms.forEach(function (form) {

    var emailInput = form.querySelector('input[type="email"]');
    var button = form.querySelector('button');

    if (!emailInput || !button) return;

    button.addEventListener('click', function (event) {

      event.preventDefault();

      var email = emailInput.value.trim();

      // Empty email
      if (email === '') {
        emailInput.focus();
        emailInput.style.border = '1px solid var(--netflix-red)';

        alert('Please enter your email address.');
        return;
      }

      // Check email format
      var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailFormat.test(email)) {
        emailInput.focus();
        emailInput.style.border = '1px solid var(--netflix-red)';

        alert('Please enter a valid email address.');
        return;
      }

      // Valid email
      emailInput.style.border = '1px solid #8c8c8c';

      alert(
        'Welcome! Your sign-in request has been received for ' + email + '.'
      );

    });

  });

});