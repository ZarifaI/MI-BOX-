document.addEventListener('DOMContentLoaded', function() {
    const quoteFormButton = document.querySelector('.btn');
    const quoteFormButton2 = document.querySelector('.btn2');

    function scrollToQuoteForm() {
        const quoteFormSection = document.getElementById('quoteForm');
        quoteFormSection.scrollIntoView({ behavior: 'smooth' });
    }

    quoteFormButton.addEventListener('click', scrollToQuoteForm);
    quoteFormButton2.addEventListener('click', scrollToQuoteForm);
});

// Add an event listener to handle changes in the service dropdown
document.getElementById('serviceNeeded').addEventListener('change', function() {
    var selectedValue = this.value;
    var storageSection = document.querySelector('.storageSection');
  
    if (selectedValue === 'service2') {
      storageSection.style.display = 'block';
    } else {
      storageSection.style.display = 'none';
    }
  });
  
  
  function toggleCompanyName() {
    var isBusiness = document.getElementById('isBusiness').value;
    var companyNameBox = document.getElementById('companyNameBox');
  
    if (isBusiness === 'yes') {
      companyNameBox.style.display = 'block';
    } else {
      companyNameBox.style.display = 'none';
    }
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq .question');

    questions.forEach(question => {
        const plusSign = document.createElement('span');
        plusSign.textContent = '+';
        plusSign.classList.add('plus-sign');

        question.querySelector('h3').appendChild(plusSign);

        question.querySelector('h3').addEventListener('click', () => {
            const answer = question.querySelector('.answer');
            const plusSign = question.querySelector('.plus-sign');

            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                plusSign.textContent = '-'; // Change to minus sign
            } else {
                answer.style.display = 'none';
                plusSign.textContent = '+'; // Change back to plus sign
            }
        });
    });
});
