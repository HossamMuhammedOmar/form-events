const signup_form = document.querySelector('#signup-form');
const creditCard = document.querySelector('#cc');
const fruitOptions = document.querySelector('#fru');
const terms = document.querySelector('#terms');

// ****************** PreventDefault
// signup_form.addEventListener('submit', (e) => {
//   alert('Submeted the form');
//   e.preventDefault();
//   console.log('cc', creditCard.value);
//   console.log('terms', terms.checked);
//   console.log('fruitOptions', fruitOptions.value);
// });
const formData = {};

// creditCard.addEventListener('input', (e) => {
//   console.log(e.target.value);
//   formData.cc = e.target.value;
// });

// fruitOptions.addEventListener('input', (e) => {
//   console.log(e.target.value);
//   formData.fruitOptions = e.target.value;
// });

// terms.addEventListener('input', (e) => {
//   console.log(e.target.checked);
//   formData.terms = e.target.checked;
// });

for (let input of [creditCard, fruitOptions, terms]) {
  input.addEventListener('input', ({ target }) => {
    const { name, value, checked, type } = target;
    formData[name] = type === 'checkbox' ? checked : value;
  });
}
