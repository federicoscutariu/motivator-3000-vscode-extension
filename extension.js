// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

const motivationalMessages = [
  "You're on the right track, keep going!",
  "Every line of code is a step forward.",
  "Don't stop now, you're doing great!",
  "Don't give up, the best is yet to come!",
  "The next bug will be solved in style.",
  "Small progress every day leads to big results.",
  "You have everything it takes to succeed!",
  "Perseverance always pays off, keep coding!",
  "Every mistake is an opportunity to improve.",
  "Code is like a puzzle, you're almost done!",
  "You're closer to the solution than you think!",
  "Even the best programmers started here.",
  "Keep writing, the next feature will be awesome!",
  "Believe in yourself, you can do it!",
  "You're building something extraordinary!",
  "Code by code, you're realizing your vision.",
  "One step at a time, you'll get there!",
  "Every completed function is a small milestone.",
  "Don't let a small error discourage you.",
  "There's always a solution, find it!",
  "Your project is taking shape, keep going!",
  "Patience and persistence are the keys to success.",
  "Don't underestimate the small progress!",
  "You're unstoppable!",
  "Keep going, your project will be amazing!",
  "Trust the process, the result will be fantastic.",
  "Slowly but steadily, you're reaching the goal.",
  "Every bug fixed makes you stronger.",
  "Code may be complex, but you're tougher!",
  "You're not alone, every coder faces challenges.",
  "You don't need to see the whole path, just take the next step.",
  "Keep going, you've already come so far!",
  "Remember why you started, keep pushing!",
  "Coding is an art, and you're an artist!",
  "You're capable of great things, keep writing!",
  "There's nothing you can't solve!",
  "Every bug fixed is a victory.",
  "Remember to take a break, then come back stronger!",
  "Progress takes time, keep moving forward.",
  "Success is the sum of small efforts repeated.",
  "Don't let a mistake stop you, face it!",
  "Coding is a journey, enjoy every moment.",
  "You're better than you think!",
  "Even the best programmers make mistakes.",
  "You've overcome worse obstacles, keep going!",
  "Don't forget to celebrate your successes, even the small ones.",
  "Every time you solve a problem, you get better.",
  "There's no perfect code, only improvable.",
  "You're on the right track, stay focused.",
  "You're creating something unique, don't give up!",
  "There's always a way, you just need to find it.",
  "A step back is just a chance to improve.",
  "Every project has its tough moments, hang in there!",
  "Your code is like a story coming to life.",
  "Don't stop now, you're closer to the goal than you think!",
  "Even the most complex code starts with a single line.",
  "You're a problem solver, keep it up!",
  "Every line of code brings you closer to your vision.",
  "Hard work always pays off, keep going!",
  "Believe in your potential, you are capable of great things!",
  "Don't let complexity scare you, face it!",
  "Code is your canvas, keep painting!",
  "You're making incredible progress, don't stop!",
  "Even the biggest project starts with a small step.",
  "You've solved problems before, you can do it again!",
  "Keep pushing, the finish line is closer than it seems!",
  "You're an amazing programmer, keep it up!",
  "Every obstacle is a chance to learn something new.",
  "Don't let setbacks stop you, success is around the corner.",
  "Every mistake is just a step towards the solution.",
  "You chose a challenging path, but it's worth it!",
  "Keep going, you're building something great!",
  "You're stronger than any bug!",
  "Remember: every line of code has its value.",
  "You're creating something useful, keep at it!",
  "There’s no failure, only feedback.",
  "Don't stop until you're proud of the result.",
  "You're one step away from the solution, keep going!",
  "Don't forget: you're here to create, not to be perfect.",
  "Your project is unique, just like you.",
  "Don't underestimate the power of perseverance.",
  "Every success starts with a small step, like the one you just took.",
  "You're not alone, code is a challenge for everyone.",
  "You've already overcome many obstacles, don't stop now.",
  "Your code matters, keep improving it!",
  "You're better than you think, don't give up!",
  "Don't let small mistakes stop you.",
  "Every completed function is a success!",
  "Hard work always leads to results.",
  "You're unstoppable, keep it up!",
  "Don't stop until you've reached your goal.",
  "Every line of code is a step towards your vision.",
  "Don't get discouraged, you've already come so far!",
  "Keep coding, you get better every day.",
  "You have the potential to create something amazing.",
  "Success comes to those who don't give up, keep going!",
  "Don't stop now, you've got this!",
  "Every line of code is a step towards your goal.",
  "You chose a tough path, but it's worth it!",
  "Don't forget to have fun while coding, it's part of the process!",
];

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "motivator-3000" is now active!'
  );

	const configuration = vscode.workspace.getConfiguration();
	const interval = configuration.get("motivator.interval", 5000);

  setInterval(() => {
    var message =
      motivationalMessages[
        Math.floor(Math.random() * motivationalMessages.length)
      ];

    vscode.window.showInformationMessage(message);
  }, interval);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
