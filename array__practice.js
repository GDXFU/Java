let item1 = 20
let item2 = 30
let item3 = 40
let item4 = 50
let item5 = 100

let arr = [20, 30, 40, 50, 100]

console.log()


    // first element of array:
//    console.log(arr[0])

    // last element of array:
//  console.log(arr[arr.length - 1])

    // Add element onto end of array:
 //   arr.push(200)

let newArr = arr.filter((element) => {
console.log(element)
if (element < 50) {
    return true;
    console.log( '@@@')
    }
})

console.log(newArr);

/////////////////
//simplifed version


let newArr = arr.filter(element => element < 50) 

    console.log(newArr);



















