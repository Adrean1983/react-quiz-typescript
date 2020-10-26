const step1 = {
  //   import React from 'react';
  // type Props = {
  //   questions: string;
  //   answers: string[];
  //   callback: any;
  //   userAnswer: any;
  //   questionNr: number;
  //   totalQuestions: number;
  // };
  // const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => {
  //   return (
  //     <div>
  //       <p className="number">
  //         Question: {questionNr} / {totalQuestions}
  //       </p>
  //       <p dangerouslySetInnerHTML={{ __html: question }}></p>
  //       {answers.map((answer) => (
  //         <div>
  //           <button disabled={userAnswer} onClick={callback}>
  //             <span dangerouslySetInnerHTML={{ __html: answer }} />
  //           </button>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };
  // export default QuestionCard;
};

const step2 = {
  //   import React, { useState } from 'react';
  // import QuestionCard from './components/QuestionCard';
  // const TOTAL_QUESTIONS = 10;
  // const App = () => {
  //   const [loading, setLoading] = useState(false);
  //   const [questions, setQuestions] = useState([]);
  //   const [number, setNumber] = useState(0);
  //   const [userAnswers, setUserAnswers] = useState([]);
  //   const [score, setScore] = useState(0);
  //   const [gameOver, setGameOver] = useState(true);
  //   const startTrivia = async () => {};
  //   const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  //   const nextQuestion = () => [];
  //   return (
  //     <div className="App">
  //       <h1>REACT QUIZ</h1>
  //       <button className="start">Start</button>
  //       <p className="score">Score:</p>
  //       <p>Loading Questions ...</p>
  //       <QuestionCard
  //         questionNr={number + 1}
  //         totalQuestions={TOTAL_QUESTIONS}
  //         question={questions[number].question}
  //         answers={questions[number].answer}
  //         userAnswer={userAnswers ? userAnswers[number] : undefined}
  //         callback={checkAnswer}
  //       />
  //       <button className="next" onClick={nextQuestion}>
  //         Next Question
  //       </button>
  //     </div>
  //   );
  // };
  // export default App;
};
