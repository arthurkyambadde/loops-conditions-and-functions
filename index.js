"use strict";

// //WHILE LOOPS

const PrintEvenNumbers = function () {
  let number = 0;

  while (number <= 20) {
    console.log(number);
    number = number + 2;
  }
};

// evenNumbers();
// console.log("new exercise starts here");
// //exercise 1
// //display eve numbers from 0-67

// let numberNew = 0;
// while (numberNew <= 67) {
//   console.log(numberNew);
//   numberNew = numberNew + 2;
// }

//display odd numbers

// console.log("display even numbers");

const displayOddNumbers = function () {
  let numberOfCows = 0;
  while (numberOfCows <= 67) {
    if (numberOfCows % 2 === 1) {
      console.log(numberOfCows);
      // console.log(numberOfCows);
    }
    numberOfCows = numberOfCows + 1;
  }
};

// displayOddNumbers();

// console.log("odd numbers");
// let numberOfCows = 0;

// while (numberOfCows <= 67) {
//   if (numberOfCows % 2 === 1) {
//     console.log(numberOfCows);
//   } else {
//   }
//   numberOfCows = numberOfCows + 1;
// }

// //console.log 2 to the power 10
const powerTen = function () {
  let result = 1;
  let counter = 0;

  while (counter <= 10) {
    console.log(result);
    result = result * 2;
    counter = counter + 1;
  }
};
// powerTen();

//jimmy challenge
//create a variable named lucky number
//create a while loop to ask a question of 'guess my lucky number'd
//if the user guesses the lucky number log to console 'you are right'
//if the user guesses the wrong value log to console 'wrong guess! try again'

//WHILE LOOP

const guessMyLuckyNumber = function () {
  while (true) {
    const myLuckyNumber = 6;
    const userInput = Number(prompt("Guess my lucky Number?"));
    if (userInput !== myLuckyNumber) {
      console.log("Sorry wrong guess please try again");
      continue;
    } else {
      console.log("You win");
      break;
    }
  }
};

//guessMyLuckyNumber();

//DO WHILE LOOP

const guessInDoLoop = function () {
  let men = 0;
  do {
    console.log(men);
    men = men + 1;
  } while (men < 10);
  do {
    let userInput = Number(prompt("guess my secret number"));
    let secretNumber = 7;
    if (userInput !== secretNumber) {
      console.log("you have lost");
      continue;
    } else {
      console.log("you win");
      break;
    }
  } while (true);
};
//guessInDoLoop()

//FOR LOOP

const guessSecretNumber = function () {
  for (; true; ) {
    let secretNumber = 5;
    let userInput = Number(prompt("guess my number"));
    if (userInput !== secretNumber) {
      console.log("bro your wrong🤣 try again");
      continue;
    } else {
      console.log("you win bro 😙");
      break;
    }
  }
};

// guessSecretNumber();

//LOOPING A TRIANGLE

const loopingTriangle = function () {
  for (let i = 0; i <= 7; i++) {
    let string = "";
    for (let j = 0; j <= i; j++) {
      string = string + "#";
    }
    console.log(string);
  }
  for (let i = 0; i <= 7; i++) {
    let string = "";
    for (let j = 0; j < i; j++) {
      string = string + "H";
    }
    console.log(string);
  }
  for (let i = 0; i <= 0; i++) {
    for (let j = 0; j < 8; j++) {
      if (j % 2 === 0) {
        console.log(` # # # #`);
      } else {
        console.log(`# # # # `);
      }
    }
  }
};

// loopingTriangle();

// RIGHT version

const buildChessBoard = function () {
  for (let chessColumn = 0; chessColumn <= 7; chessColumn++) {
    let boardChip = "";

    for (let chessRow = 0; chessRow <= 8; chessRow++) {
      if (chessColumn % 2 === 0) {
        if (chessRow % 2 === 0) {
          boardChip = boardChip + "#";
        } else if (chessRow % 2 === 1) {
          boardChip = boardChip + " ";
        }
      } else if (chessColumn % 2 === 1) {
        if (chessRow % 2 === 0) {
          boardChip = boardChip + " ";
        } else if (chessRow % 2 === 1) {
          boardChip = boardChip + "#";
        }
      }
    }

    console.log(boardChip);
  }
};

//buildChessBoard();
