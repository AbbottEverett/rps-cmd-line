const argv = require('yargs').argv;

class Player {
  constructor(type) {
    this.type = type
    this.moveChoice = null;
  }
  randomMove() {
    const selection = ['ROCK', 'PAPER', 'SCISSORS'];
    const index = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    this.moveChoice = selection[index];
    console.log(`${this.type} plays ${this.moveChoice}!`);
  }
  selectMove(input) {
    this.moveChoice = input;
    console.log(`${this.type} plays ${this.moveChoice}!`);
  }
  static checkMoves(p1, p2) {
    const p1Move = p1.moveChoice;
    const p2Move = p2.moveChoice;
    switch(p1Move) {
      case 'ROCK':
        switch(p2Move) {
          case 'ROCK':
            console.log('The game is a tie');
            break;
          case 'PAPER':
            console.log(`~${p2.type} wins!~`);
            break;
          case 'SCISSORS':

            console.log(`~${p1.type} wins!~`);
            break;
        }
        break;
      case 'PAPER':
        switch(p2Move) {
          case 'ROCK':
            console.log(`~${p1.type} wins!~`);
            break;
          case 'PAPER':
            console.log('The game is a tie');
            break;
          case 'SCISSORS':
            console.log(`~${p2.type} wins!~`);
            break;
        }
        break;
      case 'SCISSORS':
        switch(p2Move) {
          case 'ROCK':
            console.log(`~${p2.type} wins!~`);
            break;
          case 'PAPER':
            console.log(`~${p1.type} wins!~`);
            break;
          case 'SCISSORS':
            console.log('The game is a tie');
            break;
        }
        break;
      default:
        console.log(`Invalid move choice by ${p1.type}. ~${p2.type} wins!~`);
    }
  }
}

const human = new Player('Human');
const computer = new Player('Computer');
console.log('Playing a game of Roshambo against the computer.');
human.selectMove(argv.move);
computer.randomMove();
Player.checkMoves(human, computer);
