import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AnswersSummary } from '@/components/AnswersSummary';
import { Button } from '@/components/Button';
import { QuestionCard } from '@/components/QuestionCard';

import type { Answer, QuizQuestion } from '../types/quizQuestions.types';

import { QUIZ_QUESTIONS } from '../quizQuestions';
export const GamePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const numQuestions = Number(params.get('questions')) || 5;
  const difficulty = params.get('difficulty');

  // Filtrowanie pytań wg poziomu trudności
  const [questions] = useState<QuizQuestion[]>(() => {
    let filtered: QuizQuestion[] = QUIZ_QUESTIONS;
    if (difficulty !== null && difficulty !== undefined && difficulty !== '') {
      filtered = QUIZ_QUESTIONS.filter(
        (q: QuizQuestion) => String(q.difficultyLevel) === difficulty
      );
    }
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numQuestions);
  });
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<null | string>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [answersHistory, setAnswersHistory] = useState<
    Array<{
      correctAnswer: string;
      isCorrect: boolean;
      question: string;
      userAnswer: string;
    }>
  >([]);

  const currentQuestion = questions[currentQuestionIdx];

  const handleSelect = (selected: string) => {
    if (isLocked) return;
    setSelectedAnswer(selected);
    const correctAnswer = currentQuestion.answers.find(
      (a: Answer) => a.correct
    )?.text;
    const correct = selected === correctAnswer;
    setIsCorrect(correct);
    setAnswersHistory((prev) => [
      ...prev,
      {
        correctAnswer: correctAnswer || '',
        isCorrect: correct,
        question: currentQuestion.question,
        userAnswer: selected,
      },
    ]);
    setIsLocked(true);
    if (correct) {
      setScore((prev: number) => prev + 1);
    }
    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      setIsLocked(false);
      if (currentQuestionIdx < questions.length - 1) {
        setCurrentQuestionIdx((idx: number) => idx + 1);
      } else {
        setIsFinished(true);
      }
    }, 600);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 px-4 py-12">
      <div className="text-center">
        {!isFinished ? (
          <>
            <div>
              <h2 className="mb-2 text-3xl font-semibold text-yellow-400">
                Gra rozpoczęta!
              </h2>
              <p className="mb-8 text-slate-200">
                Odpowiadaj na pytania i sprawdź swoją wiedzę 🚀
              </p>
            </div>
            <QuestionCard
              answers={[
                currentQuestion.answers[0]?.text ?? '',
                currentQuestion.answers[1]?.text ?? '',
                currentQuestion.answers[2]?.text ?? '',
                currentQuestion.answers[3]?.text ?? '',
              ]}
              isCorrect={isCorrect}
              isLocked={isLocked}
              onSelect={handleSelect}
              question={currentQuestion.question}
              selectedAnswer={selectedAnswer}
            />
          </>
        ) : (
          <div className="flex flex-col items-center">
            <Button
              className="px-8 py-3 text-base"
              onClick={() => navigate('/')}
              variant="secondary"
            >
              Powrót do ekranu startowego
            </Button>
            <AnswersSummary
              answers={answersHistory}
              score={score}
              totalQuestions={questions.length}
            />
          </div>
        )}

        {!isFinished && (
          <div className="mt-20">
            <Button
              className="px-8 py-3 text-base"
              onClick={() => navigate('/')}
              variant="secondary"
            >
              Powrót
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;
