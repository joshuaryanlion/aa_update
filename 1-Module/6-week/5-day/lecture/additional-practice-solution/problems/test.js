function boo() {
    console.log('boop!');
}

console.log('fizz');
setTimeout(boo, 0);
console.log('buzz');
