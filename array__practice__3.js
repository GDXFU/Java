/**
 * turn each element in an array of dollars into cents
 * 
 * #@examples
 * [ 1, 5, 10, 3] => [100, 500, 1000, 300]
 * [ 0, 10, 20] => [0, 1000, 2000]
 */

let dollars = [1, 5, 10, 3,];

let cents = dollars.map(element => { 
    reu
})

console.log(cents)


//////////////////////////////////////////////////
///alternative way \
let cents = dollars.map(element => element * 100 { 
    reu
})


///////////////////////////////
/// map method


// loop over every element in dollars
for (let i = 0; i < dollars.length; ++i) {
    cents.push(dollars [i] * 100);
}
//console log cents

console.log(cents);