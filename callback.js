function greeting(handler, name){
    handler(name);
}

// const name = 'Dalim bhai';
// const numbers = [12,37,25];
const laptop = {price: 37000, brand: 'Lenovo'};
// greeting(laptop);

function greetingHandler(name){
    console.log('Good Morning!', name);
}

function ending(name){
    console.log('Bye Bye', name);
}

greeting(greetingHandler, 'Kobir Ali');
greeting(ending, 'Kobir Ali');

greeting(greetingHandler, 'Dobir Ali');
greeting(ending, 'Dobir Ali');

greeting(greetingHandler, 'Sobir Ali');
greeting(ending, 'Sobir Ali');




// Check on the html file(index.html), open it with live server
function submitHandler(){
    console.log('Submit Button cicked');
}

document.getElementById('submit-btn').addEventListener('click', submitHandler);