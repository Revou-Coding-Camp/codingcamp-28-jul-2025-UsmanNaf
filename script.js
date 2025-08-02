// js/script.js

/* 4. Welcome greeting */
const nameFromStorage = localStorage.getItem('visitorName') || prompt('What is your name?');
localStorage.setItem('visitorName', nameFromStorage);
document.getElementById('visitor-name').textContent = nameFromStorage;

/* 5. Form validation + display submitted values */
const form = document.getElementById('contactForm');
const output = document.getElementById('output');
const result = document.getElementById('result');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Simple client-side validation
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = {
    Name: form.name.value.trim(),
    Email: form.email.value.trim(),
    Phone: form.phone.value.trim(),
    Message: form.message.value.trim()
  };

  result.textContent = JSON.stringify(data, null, 2);
  output.classList.remove('hidden');
  form.reset();
});