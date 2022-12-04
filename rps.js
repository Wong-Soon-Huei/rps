function getComputerChoice ()

var computer = ['Rock', 'Paper', 'Scissor'];
var computerResult = computer[Math.floor(Math.random()*computer.length)];
console.log('The computer chose: ' + computerResult);