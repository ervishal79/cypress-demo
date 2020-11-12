// sum (2,4)

// function sum (a,b){
//    return console.log(a+b)

// }





// var B = [1, 3, 6, 4, 1, 2]
// var B = [1, 2, 3]
var B = [-1,-3]

solution(B)

function solution(A) {
    // only positive values, sorted
    A = A.filter(x => x >= 1).sort((a, b) => a - b)
    console.log(A)
    let x = 1

    for(let i = 0; i < A.length; i++) {
        // if we find a smaller number no need to continue, cause the array is sorted
        if(x < A[i]) {
            return console.log('x in if '+x)
        }
        x = A[i] + 1
    }

    return console.log('x in for loop '+x)
}
