'use strict';
// Write your code here

const form = document.querySelector('#conversion-form');
const from = form.querySelector('#convert-from');
const amount = form.querySelector('#convert-count');
// amount.setAttribute('required', 'true');
amount.setAttribute('type', 'number');
console.dir(amount);
const to = form.querySelector('#convert-to');
const btn = form.querySelector('button');
const output = form.querySelector('#output');

btn.addEventListener('click', fetchCovertion);

async function fetchCovertion(e) {
  e.preventDefault();

  if (
    from.value !== 'Choose...' &&
    to.value !== 'Choose...' &&
    amount.value !== ''
  ) {
    const pair = `${from.value}-${to.value}`;
    const url = `https://api.coinbase.com/v2/prices/${pair}/spot`;
    const dataFetched = await fetch(url);
    const data = await dataFetched.json();
    output.value = Number(data.data.amount) * Number(amount.value);
  } else {
    // alert(`Choose an option to convert from, to and amount!`);
  }
}

// btn.addEventListener('click', (e) => {
//   e.preventDefault();

//   if (
//     from.value !== 'Choose...' &&
//     to.value !== 'Choose...' &&
//     amount.value !== ''
//   ) {
//     const pair = `${from.value}-${to.value}`;

//     fetch(`https://api.coinbase.com/v2/prices/${pair}/spot`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         output.value = Number(data.data.amount) * Number(amount.value);
//       });
//   } else {
//     alert(`Choose an option to convert from, to and amount!`);
//   }
// });
