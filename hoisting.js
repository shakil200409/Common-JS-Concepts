// You can do Hoisting for var
for(var i = 0; i<5; i++){
    console.log(i);
}

console.log('Outside', i);

// But not for let & const
for(let j = 0; j<5; j++){
    console.log(j);
}

console.log('Outside', j);