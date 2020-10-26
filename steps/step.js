const step1 = {
  //   Add types for the props in QuestionCard make QuestionCard a type. And expost props to component as normal.
  // question
  // answers
  // callback
  // userAnswers
  // questionNr
  // totalQuestions
  // Display the question number and total questions in a p tag with class of number. Display the question in a p tag using dangerously set innerhtml. Map over the answers in a div with a button with disabled based on the userAnswer. It also has an onClick that calls callback. Within button show the answer in a span using dangerously set inner HTML.
};

const step2 = {
  // Build props from the app for question card in app.js. Set state for loading, gameOver and the props passed down.
};

const step3 = {
  // setup fetch file. This is example. Want to set amount and difficulty https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple. Use an enum for the difficulty.
  // Bring the function and the enum and function into app. Can console.log the result to test.
  // Need to setup a type for the API called Question. Setup a further type called QuestionState which extends Question which adds answers as a property.
  // Map over the api call and return an object which contains each questions object from API as well as the list of shuffled answers. Need to make a shuffleArray function in the Utils which is passed in the incorrect answers and the correct answers
};
