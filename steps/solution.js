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

const step3 = {
  // API file
  //   import { shuffleArray } from './utils';
  // export type Question = {
  //   category: string;
  //   correct_answer: string;
  //   difficulty: string;
  //   incorrect_answers: string[];
  //   question: string;
  //   type: string;
  // };
  // export type QuestionState = Question & { answers: string[] };
  // export enum Difficulty {
  //   EASY = 'easy',
  //   MEDIUM = 'medium',
  //   HARD = 'hard',
  // }
  // export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  //   const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  //   const data = await (await fetch(endpoint)).json();
  //   return data.results.map((question: Question) => {
  //     return { ...question, answers: shuffleArray([...question.incorrect_answers, question.correct_answer]) };
  //   });
  // };
  // -------------------
  // UTILS FILE
  // export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);
  // -------------
  // APP FILE
  //   import React, { useState } from 'react';
  // import { fetchQuizQuestions } from './API';
  // // Components
  // import QuestionCard from './components/QuestionCard';
  // // Types
  // import { Difficulty } from './API';
  // const TOTAL_QUESTIONS = 10;
  // const App = () => {
  //   const [loading, setLoading] = useState(false);
  //   const [questions, setQuestions] = useState([]);
  //   const [number, setNumber] = useState(0);
  //   const [userAnswers, setUserAnswers] = useState([]);
  //   const [score, setScore] = useState(0);
  //   const [gameOver, setGameOver] = useState(true);
  //   console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
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

const step4 = {
  //   import React, { useState } from 'react';
  // import { fetchQuizQuestions } from './API';
  // // Components
  // import QuestionCard from './components/QuestionCard';
  // // Types
  // import { QuestionState, Difficulty } from './API';
  // type AnswerObject = {
  //   question: string;
  //   answer: string;
  //   correct: boolean;
  //   correctAnswer: string;
  // };
  // const TOTAL_QUESTIONS = 10;
  // const App = () => {
  //   const [loading, setLoading] = useState(false);
  //   const [questions, setQuestions] = useState<QuestionState[]>([]);
  //   const [number, setNumber] = useState(0);
  //   const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  //   const [score, setScore] = useState(0);
  //   const [gameOver, setGameOver] = useState(true);
  //   console.log(questions);
  //   const startTrivia = async () => {
  //     setLoading(true);
  //     setGameOver(false);
  //     const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
  //     setQuestions(newQuestions);
  //     setScore(0);
  //     setUserAnswers([]);
  //     setNumber(0);
  //     setLoading(false);
  //   };
  //   const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  //   const nextQuestion = () => [];
  //   return (
  //     <div className="App">
  //       <h1>REACT QUIZ</h1>
  //       {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
  //         <button className="start" onClick={startTrivia}>
  //           Start
  //         </button>
  //       ) : null}
  //       {!gameOver ? <p className="score">Score:</p> : null}
  //       {loading && <p>Loading Questions ...</p>}
  //       {!loading && !gameOver && (
  //         <QuestionCard
  //           questionNr={number + 1}
  //           totalQuestions={TOTAL_QUESTIONS}
  //           question={questions[number].question}
  //           answers={questions[number].answers}
  //           userAnswer={userAnswers ? userAnswers[number] : undefined}
  //           callback={checkAnswer}
  //         />
  //       )}
  //       <button className="next" onClick={nextQuestion}>
  //         Next Question
  //       </button>
  //     </div>
  //   );
  // };
  // export default App;
};

const step5 = {
  // APP
  //   import React, { useState } from 'react';
  // import { fetchQuizQuestions } from './API';
  // // Components
  // import QuestionCard from './components/QuestionCard';
  // // Types
  // import { QuestionState, Difficulty } from './API';
  // export type AnswerObject = {
  //   question: string;
  //   answer: string;
  //   correct: boolean;
  //   correctAnswer: string;
  // };
  // const TOTAL_QUESTIONS = 10;
  // const App = () => {
  //   const [loading, setLoading] = useState(false);
  //   const [questions, setQuestions] = useState<QuestionState[]>([]);
  //   const [number, setNumber] = useState(0);
  //   const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  //   const [score, setScore] = useState(0);
  //   const [gameOver, setGameOver] = useState(true);
  //   const startTrivia = async () => {
  //     setLoading(true);
  //     setGameOver(false);
  //     const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
  //     setQuestions(newQuestions);
  //     setScore(0);
  //     setUserAnswers([]);
  //     setNumber(0);
  //     setLoading(false);
  //   };
  //   const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     if (!gameOver) {
  //       const answer = e.currentTarget.value;
  //       const correct = questions[number].correct_answer === answer;
  //       if (correct) setScore((prev) => prev + 1);
  //       const answerObject = {
  //         question: questions[number].question,
  //         answer,
  //         correct,
  //         correctAnswer: questions[number].correct_answer,
  //       };
  //       setUserAnswers((prev) => [...prev, answerObject]);
  //     }
  //   };
  //   const nextQuestion = () => {
  //     const nextQuestion = number + 1;
  //     if (nextQuestion === TOTAL_QUESTIONS) {
  //       setGameOver(true);
  //     } else {
  //       setNumber(nextQuestion);
  //     }
  //   };
  //   return (
  //     <div className="App">
  //       <h1>REACT QUIZ</h1>
  //       {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
  //         <button className="start" onClick={startTrivia}>
  //           Start
  //         </button>
  //       ) : null}
  //       {!gameOver ? <p className="score">Score: {score}</p> : null}
  //       {loading && <p>Loading Questions ...</p>}
  //       {!loading && !gameOver && (
  //         <QuestionCard
  //           questionNr={number + 1}
  //           totalQuestions={TOTAL_QUESTIONS}
  //           question={questions[number].question}
  //           answers={questions[number].answers}
  //           userAnswer={userAnswers ? userAnswers[number] : undefined}
  //           callback={checkAnswer}
  //         />
  //       )}
  //       {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
  //         <button className="next" onClick={nextQuestion}>
  //           Next Question
  //         </button>
  //       ) : null}
  //     </div>
  //   );
  // };
  // export default App;
  // ------------------
  // Question Card
  // import React from 'react';
  // // Types
  // import { AnswerObject } from '../App';
  // type Props = {
  //   question: string;
  //   answers: string[];
  //   callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  //   userAnswer: AnswerObject | undefined;
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
  //         <div key={answer}>
  //           <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
  //             <span dangerouslySetInnerHTML={{ __html: answer }} />
  //           </button>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };
  // export default QuestionCard;
};
