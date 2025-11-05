import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AnswersSummary,
  Button,
  QuestionCard,
  ScrollDownButton,
} from '@/components';
import { useQuizParams } from '@/hooks/useQuizParams';

import type { Answer, QuizQuestion } from '../types/quizQuestions.types';

import { QUIZ_QUESTIONS } from '../quizQuestions';
export const GamePage = () => {
  const navigate = useNavigate();

  const { difficulty, numQuestions } = useQuizParams();

  const [questions] = useState<QuizQuestion[]>(() => {
    let filtered: QuizQuestion[] = QUIZ_QUESTIONS;

    const difficultyNumber = Number(difficulty);
    if (!isNaN(difficultyNumber)) {
      filtered = QUIZ_QUESTIONS.filter(
        (q: QuizQuestion) => q.difficultyLevel === difficultyNumber
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
    <div className="flex flex-col items-center justify-center gap-6 px-2 py-8 sm:gap-10 sm:py-12">
      <div className="w-full text-center">
        {!isFinished ? (
          <>
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-yellow-400 sm:text-3xl">
                Gra rozpoczęta!
              </h2>
              <p className="mb-6 text-slate-200 sm:mb-8">
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
              category={currentQuestion.category}
              isCorrect={isCorrect}
              isLocked={isLocked}
              onSelect={handleSelect}
              question={currentQuestion.question}
              selectedAnswer={selectedAnswer}
            />
          </>
        ) : (
          <div className="mb-6 flex flex-col items-center">
            <ScrollDownButton />

            <AnswersSummary
              answers={answersHistory}
              score={score}
              totalQuestions={questions.length}
            />
            <div className="flex w-full justify-between gap-2">
              <Button
                className="text-sm"
                onClick={() => navigate('/')}
                variant="secondary"
              >
                Powrót do ekranu startowego
              </Button>
              <Button
                className="text-sm"
                onClick={() => window.location.reload()}
                variant="secondary"
              >
                Zagraj jeszcze raz!
              </Button>
            </div>
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
