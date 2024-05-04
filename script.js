'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = ` 
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(u => u[0])
      .join('');
  });
};
createUserNames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----FOREACH----');

movements.forEach(function (mov, i, arr) {
  const direction = mov > 0 ? 'deposited' : 'withdrew';
  console.log(`Movement ${i}: You ${direction} ${Math.abs(mov)} $`);
});


// forEach will always loop through entire array (cannot break/continue)

// 0: function(200)
// 1: function(450)
// 2: function(-400)

/////////////////////////////////////////////////



let arr = ['a', 'b', 'c', 'd', 'e'];
// SLICE (does not mutate original method)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//
// SPLICE (mutates original array)
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//
// REVERSE (mutates original array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//
// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
//same as:
console.log([...arr, ...arr2]);

//
// JOIN
console.log(letters.join('-'));

//
// AT method (ES2022)
const arrAt = [23, 11, 64];
console.log(arrAt.at(0));
// (same as:)
console.log(arrAt[0]);

// getting last array element
console.log(arrAt[arrAt.length - 1]);
console.log(arrAt.slice(-1)[0]);
console.log(arrAt.at(-1));
// also works on strings
console.log('Hochmajer'.at(0));

*/

/*
// working with arrays challenge #01

const checkDogs = function (arr1, arr2) {
  const arrCopy = arr1.slice(1, -1);
  const arrFinal = arrCopy.concat(arr2);
  console.log(arrFinal);
  arrFinal.forEach(function (age, i) {
    const str =
      age >= 3 ? `an adult, and is ${age} years old` : `still a puppy 🐕`;
    console.log(`Dog number ${i + 1} is ` + str);
  });
};

const dogsJulia = [3, 5, 2, 15, 7];
const dogsKate = [4, 1, 15, 8, 3];
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

checkDogs(dogsJulia, dogsKate);
checkDogs(dogsJulia2, dogsKate2);
*/

// FILTER [array method]
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals);
