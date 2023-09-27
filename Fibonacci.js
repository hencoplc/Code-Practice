




// function FibonacciLogic(n){
//     var outPut = [];
//     if(n === 1){
//         outPut = [0];
//     } else if(n === 2) {
//         outPut = [0, 1]
//     } else {
//         outPut = [0,1];

//         for (var i =2; i < n; i++){
//             outPut.push(outPut[outPut.length -2] + outPut[outPut.length -1]);
//         }
//     }
   
//   return outPut;

// }

// var getLogic = FibonacciLogic(5);
// console.log(getLogic);



function solveFibonacci(n){
    var outPut = [];
    if(n === 1){
        outPut = [0];
    } else if(n === 0){
        outPut = [0, 1];
    } else {
        outPut = [0, 1];
        for(i = 2; i < n; i++){
            outPut.push(outPut[outPut.length -2] + outPut[outPut.length -1]);
        }
    }
    console.log(outPut);
    return outPut
    
}

solveFibonacci(10);