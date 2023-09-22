
function getLeapYear(year) {
  if(year % 4 === 0){
      if(year % 100 === 0) {
          if(year % 400 === 0){
               return "is a leap year";
          }
           return "not a leap year";
      } else {
          return "is a leap year";
      }
       return "is a leap year";
  } else {
      return ("is not a leap year");
  }
}
let leap =  getLeapYear(2023);
  console.log(leap);


// var playGame = [];
// var count = 1;

// function playFizBuz(){
//   for(var a=0; a<6;a++){
//     if(count % 3 === 0){
//       playGame.push("fizz");
//       // console.log(playGame,count);
//     } else {
//       playGame.push(count);
//       // console.log(playGame,count);
//     }
//     count++;
//     console.log(playGame);
//   }
  
// }

// playFizBuz();

// var names = ["Hen", "EMi", "Oke"];
// console.log(names.length);



// var outPut = [];

// function playFizBuz(){

//   for(var count = 1; count < 100; count++ ) {

//       if(count % 3 === 0 && count % 5 === 0){
//         outPut.push("fizzBuzz");
//       } else if(count % 3 === 0){
//         outPut.push("fizz");
//       } else if(count % 5 === 0){
//         outPut.push("Buzz");
//       } else {
//         outPut.push(count);
//       }
//   }
// console.log(outPut);
// }

//  playFizBuz();






// USING ONLY IF STATEMENT

var outPut = [];

function playFizBuz(){

  for(var count = 1; count < 100; count++ ) {

     if(count % 3 === 0 && count % 5 === 0){
        if( count % 3 === 0){
            if( count % 5 === 0){
                outPut.push("Buzz");
            } else {
                outPut.push(count);
            }
            outPut.push("fizz")
        } else {
            outPut.push(count); 
        }
        outPut.push("fizzBuzz");
     } else {
        outPut.push(count);
     }
  }
console.log(outPut);
}

 playFizBuz();
