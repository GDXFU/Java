// 
// filter out all the 'FAIL' elements in an array
//@exmples

// [ 'A+', 'A', 'FAIL' ] => [ 'A+', 'A']
// [ 'FAIL', 'FAIL' , 'B'] => ['B']
// [ ;FAIL'] => []


let grades = [ 'A+', 'A', 'FAIL']

let goodGrades = grades.filter((element)) => {
    console.log(element)
    if (element !== 'FAIL')
        return true;
}

console.log(goodGrades)

////
// alternatiive way

let grades = ['A+', 'A', 'FAIL']

Let goodGrades = grades.filter(element => element !== 'FAIL')

console.log(goodGrades)




///////
let grade = [ 'A+','A','FAIL']

// create a new empty array called 'goodGrades'
let goodGrades = []


For (let i = 0; i < grades.length; ++i) {
    if (grades[i] !== 'FAIL') {
        goodGrades.push(grades[i]);
    }

    // add the current element onto 'goodGrades' only if 
    // the current element is not equal to 'FAIL'
    console.log(grades[i]);
}



///////////////////////////////////////////////////////////////////////////

let arr = [1, 4, 9, 16]

arr.map((element)) => {
    console.log(element)
    return undefined;

}

console.log(newArr)


