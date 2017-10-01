var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const DegreeQuestions = require('../lib').DegreeQuestions;

console.log('type \'exit\' at any time to quit');

var degreeQuestions = new DegreeQuestions();

(function askQuestion() {
  var q = degreeQuestions.generate();
  rl.question(q.questionText, function(message) {
    if (message == 'exit') //we need some base case, for recursion
      return rl.close(); //closing RL and returning from function.
    var answer =
    console.dir('The answer was ' + q.answer);
    askQuestion();
  });
})();
