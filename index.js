// goal is to create a function that can only run once!

starter function:
let view;
function initialize() {
  view = 'hello';
  console.log('view has been set!')
}

initialize();
initialize();
initialize();
console.log(view)

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

// function can still run multiple times.... Why? View is declared in the parent scope of setView.... would altering the scoping solve this?

// declare view after we update it's value? (also, switching to arrow fn's because I love them)

const initialize3 = () => {
  view = 'maybe?'
  return () => {
    let view;
    console.log(`${view}`)
  }
}

initialize3()();
console.log(view);

// this also doesn't solve the problem..... Is scope the wrong angle to approach from?

// Andrei's solution:

let view;
function initializeSolved() {
  
}

