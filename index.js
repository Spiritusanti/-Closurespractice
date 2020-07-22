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
// function initialize2() {
//   let view;
//   return function setView() {
//     view = 'hello';
//     console.log('view has been set w/ initialize2')
//   }
// }

// initialize2()()
// initialize2()()
// initialize2()()
// console.log(view)

// function can still run multiple times.... Why? View is declared in the parent scope of setView.... would altering the scoping solve this?

// declare view after we update it's value? (also, switching to arrow fn's because I love them)

// const initialize3 = () => {
//   view = 'maybe?'
//   return () => {
//     let view;
//     console.log(`${view}`)
//   }
// }

// initialize3()();
// console.log(view);

// this also doesn't solve the problem..... Is scope the wrong angle to approach from?

// Andrei's solution:

// let view;
// function initializeSolved() {
//   let called = 0;
//   return function() {
//     if (called > 0) {
//       return;
//     } else {
//       view = 'solved';
//       called++;
//       console.log('solved the problem!')
//     }
//   }
// }

// scoping was not entirely the wrong idea. Andrei solved this problem by utilizing a counter to trigger a conditional inside a nested function.

// const startOnce = initializeSolved();
// startOnce();
// startOnce();
// startOnce();
// console.log(view)

// one problem still remains though. initializeSolved can still be called. How can we solve this with encapsulation?

// if we place it inside an object?

// const startOnce2 = {
//   view: '',
//   initialize: () => {
//     let called = 0;
//   return function() {
//     if (called > 0) {
//       return;
//     } else {
//       startOnce2.view = 'solved';
//       called++;
//       console.log('solved the problem!')
//     }
//   }
//   },
// }

// startOnce2.initialize()();
// startOnce2.initialize()();
// startOnce2.initialize()();
// doesn't solve the problem.....


// Mohit's answer utilizing an IIFE:
// how does this solution work?

let view;
const viewImage = (function initialize() {
  let called = 0;
  return function(){
    if (called > 0){
      return;
    } else {
      view = 'Thanks Mohit!';
      called++
      console.log('view has been set!')
    }
  }
})();

viewImage()
viewImage()
viewImage()
viewImage()
