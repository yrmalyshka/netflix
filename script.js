document.addEventListener('DOMContentLoaded', function () {

  // FAQ ACCORDION
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    item.addEventListener('click', function () {

      var answer = item.nextElementSibling;
      var isOpen = item.classList.contains('open');

      // Close other FAQ items
      faqItems.forEach(function (other) {
        if (other !== item) {
          other.classList.remove('open');

          var otherAnswer = other.nextElementSibling;

          if (otherAnswer && otherAnswer.classList.contains('faq-answer')) {
            otherAnswer.classList.remove('open');
          }
        }
      });

      // Toggle current FAQ
      item.classList.toggle('open', !isOpen);

      if (answer && answer.classList.contains('faq-answer')) {
        answer.classList.toggle('open', !isOpen);
      }
    });
  });


  // TRENDING NOW SCROLL
  var scrollArrow = document.querySelector('.scroll-arrow');
  var trendingRow = document.querySelector('.trending-row');

  if (scrollArrow && trendingRow) {

    scrollArrow.addEventListener('click', function () {

      var maxScroll = trendingRow.scrollWidth - trendingRow.clientWidth;

      if (trendingRow.scrollLeft >= maxScroll - 10) {

        trendingRow.scrollBy({
          left: -300,
          behavior: 'smooth'
        });

      } else {

        trendingRow.scrollBy({
          left: 300,
          behavior: 'smooth'
        });

      }
    });

    trendingRow.addEventListener('scroll', function () {

      var maxScroll = trendingRow.scrollWidth - trendingRow.clientWidth;

      if (trendingRow.scrollLeft >= maxScroll - 10) {
        scrollArrow.textContent = '‹';
      } else {
        scrollArrow.textContent = '›';
      }

    });

  }

  // EMAIL VALIDATION
  var emailForms = document.querySelectorAll('.email-form');

  emailForms.forEach(function (form) {

    var input = form.querySelector('input[type="email"]');
    var button = form.querySelector('button');

    if (!input || !button) return;

    button.addEventListener('click', function (event) {

      event.preventDefault();

      var email = input.value.trim();

      // Empty email
      if (email === '') {

        input.focus();
        input.style.border = '1px solid var(--netflix-red)';

        alert('Please enter your email address.');
        return;
      }


      // Invalid email format
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {

        input.focus();
        input.style.border = '1px solid var(--netflix-red)';

        alert('Please enter a valid email address.');
        return;
      }


      // Valid email
      input.style.border = '1px solid #8c8c8c';

      alert(
        'Welcome! Your sign-in request has been received for ' + email + '.'
      );

    });

  });

});