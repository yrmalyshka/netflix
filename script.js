document.addEventListener('DOMContentLoaded', function () {

  // FAQ accordion toggle
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var answer = item.nextElementSibling;
      var isOpen = item.classList.contains('open');

      // Close all other open items
      faqItems.forEach(function (other) {
        if (other !== item) {
          other.classList.remove('open');
          var otherAnswer = other.nextElementSibling;
          if (otherAnswer && otherAnswer.classList.contains('faq-answer')) {
            otherAnswer.classList.remove('open');
          }
        }
      });

      // Toggle current item
      item.classList.toggle('open', !isOpen);
      if (answer && answer.classList.contains('faq-answer')) {
        answer.classList.toggle('open', !isOpen);
      }
    });
  });

  // Trending Now horizontal scroll arrow
  var scrollArrow = document.querySelector('.scroll-arrow');
  var trendingRow = document.querySelector('.trending-row');
  if (scrollArrow && trendingRow) {
    scrollArrow.addEventListener('click', function () {
      trendingRow.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }

  // Get Started buttons: basic email validation before "submitting"
  var getStartedButtons = document.querySelectorAll('.get-started-btn');
  getStartedButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var form = btn.closest('.email-form');
      var input = form ? form.querySelector('input[type="email"]') : null;
      if (input && input.value.trim() === '') {
        input.focus();
        input.style.border = '1px solid var(--netflix-red)';
      } else if (input) {
        input.style.border = '1px solid #8c8c8c';
        alert('Sign up flow would start here for: ' + input.value);
      }
    });
  });

});