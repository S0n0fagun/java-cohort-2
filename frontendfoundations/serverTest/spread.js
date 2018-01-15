let names = ["Sally", "Sue", "Sam"];
let moreNames = ["Tom", "Timmy", ...names, "Bob"];

console.log(moreNames);

let state = {
  isLoggedIn: true,
  numLikes: 42,
  numPosts: 3,
  numComments: 4
};

console.log(state);

let newState = {
  numComments: 5
};

state = { ...state, ...newState };

state.numComments++;

console.log(state);
