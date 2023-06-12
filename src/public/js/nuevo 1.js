const form = document.querySelector('form');
const emailRegex = /^w+@[a-zA-Z]+?.[a-zA-Z]{2,3}$/;
const idRegex = /^\d{2}-\d{4}-\d{5}$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = form.querySelector('#email').value;
  const dateOfBirth = form.querySelector('#date-of-birth').value;
  const id = form.querySelector('#id').value;

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  const age = calculateAge(dateOfBirth);
  if (age < 18) {
    alert('You must be at least 18 years old to register');
    return;
  }

  if (!idRegex.test(id)) {
    alert('Please enter a valid ID in the format 00-0000-00000');
    return;
  }

  // Submit the form if all validations pass
  form.submit();
});

function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}