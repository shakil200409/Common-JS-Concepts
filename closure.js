function kitchen() {
  let roast = 0;
  return function () {
    roast++;
    return roast;
  };
}

const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

// Another one 
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();


function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  
