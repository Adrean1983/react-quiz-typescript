Step1:
Add types for the props in QuestionCard make QuestionCard a type. And expost props to component as normal.
question
answers
callback
userAnswer
questionNr
totalQuestions

Display the question number and total questions in a p tag with class of number. Display the question in a p tag using dangerously set innerhtml. Map over the answers in a div with a button with disabled based on the userAnswer. It also has an onClick that calls callback. Within button show the answer in a span using dangerously set inner HTML.
