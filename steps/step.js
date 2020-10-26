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

const step4 = {
  // Set the type for questions use state. The type is already in the API file. create a type in App.js for userAnswers. Call it AnswerObject. It has four things properties.
  // Create the startTrivia function. It does the fetch data function as well as resetting much of the state. It should call this function when start button is clicked.
  // Conditionally display start button depending if game over or limit of questions have been reached.
  // Only show the score if not in the gameover mode.
  // Only show loading if loading
  // Display cards if not loading and not game over
};

const step5 = {
  // conditionally show the next question button.
  // add stuff to checkAnswer function:
  //  1. check if game is not over and if not store the value of the answer button click in a variable.
  // 2. Check if the chosen answer matches the correct answer.
  // 3. if it's correct increment the score.
  // 4. Save the answer in the array for user answers.
  // 5. create an answer Object. from the answer object type
  // 6. update the setUserAnswers state. Spread the new object into the array.
  // Next Question  function.
  // 1. move on to next question if not the last question.
  // 2 . if true set game over to true
  // 3. if not true set the number to the next question number
  // Fix up types for the callback and the userAnswer. Need to adjust the disabled button to be a boolean check
};
