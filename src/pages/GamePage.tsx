import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@/components/Button';
import { QuestionCard } from '@/components/QuestionCard';

import { QUIZ_QUESTIONS } from '../quizQuestions';

type Answer = {
  correct: boolean;
  text: string;
};

type Question = {
  answers: Answer[];
  category: string;
  difficultyLevel: number;
  id: number;
  question: string;
};
export const GamePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const numQuestions = Number(params.get('questions')) || 5;
  const difficulty = params.get('difficulty');

  // Filtrowanie pytań wg poziomu trudności
  const [questions] = useState<Question[]>(() => {
    let filtered: Question[] = QUIZ_QUESTIONS;
    if (difficulty !== null && difficulty !== undefined && difficulty !== '') {
      filtered = QUIZ_QUESTIONS.filter(
        (q: Question) => String(q.difficultyLevel) === difficulty
      );
    }
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numQuestions);
  });
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIdx];

  const handleSelect = (selected: string) => {
    const correctAnswer = currentQuestion.answers.find(
      (a: Answer) => a.correct
    )?.text;
    if (selected === correctAnswer) {
      setScore((prev: number) => prev + 1);
    }
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx((idx: number) => idx + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 px-4 py-12">
      <div className="w-full max-w-2xl text-center">
        <h2 className="mb-2 text-3xl font-semibold text-yellow-400">
          Gra rozpoczęta!
        </h2>
        <p className="mb-8 text-slate-200">
          Odpowiadaj na pytania i sprawdź swoją wiedzę 🚀
        </p>

        {!isFinished ? (
          <QuestionCard
            answers={[
              currentQuestion.answers[0]?.text ?? '',
              currentQuestion.answers[1]?.text ?? '',
              currentQuestion.answers[2]?.text ?? '',
              currentQuestion.answers[3]?.text ?? '',
            ]}
            onSelect={handleSelect}
            question={currentQuestion.question}
          />
        ) : (
          <div className="py-8">
            <h3 className="mb-4 text-2xl font-bold text-green-400">
              Koniec gry!
            </h3>
            <p className="mb-2 text-lg text-slate-200">
              Twój wynik:{' '}
              <span className="font-bold">
                {score} / {questions.length}
              </span>
            </p>
            <Button
              className="mt-6 px-8 py-3 text-base"
              onClick={() => navigate('/')}
              variant="secondary"
            >
              Powrót do ekranu startowego
            </Button>
          </div>
        )}

        {!isFinished && (
          <div className="mt-10">
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
