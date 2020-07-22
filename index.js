// goal is to create a function that can only run once!

// starter function:
// let view;
// function initialize() {
//   view = 'hello';
//   console.log('view has been set!')
// }

// initialize();
// initialize();
// initialize();
// console.log(view)

// Attempted solution:
//  --> remove view from global scope 
function initialize2() {
  let view;
  return function setView() {
    view = 'hello';
    console.log('view has been set w/ initialize2')
  }
}

initialize2()()
initialize2()()
initialize2()()
console.log(view)



// Andrei's solution:
