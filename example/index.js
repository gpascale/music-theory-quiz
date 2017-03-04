var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

import DegreeQuestions from '../lib/degree-questions';

console.log("type 'exit' at any time to quit");

var degreeQuestions = new DegreeQuestions();

(function askQuestion() {
  var q = degreeQuestions.generate();
  rl.question(q.questionText, function(message) {
    if (message == 'exit') //we need some base case, for recursion
      return rl.close(); //closing RL and returning from function.
    var answer = q.answer.name().toUpperCase() + q.answer.accidental();
    console.dir('The answer was ' + answer);
    askQuestion();
  });
})();
