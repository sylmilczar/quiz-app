import type { Category } from '@/types/quizQuestions.types';

import { Button } from '@/components';
import { CATEGORY_LABELS } from '@/constants/labels';

type QuestionCardProps = {
  answers: [string, string, string, string];
  category: Category;
  isCorrect?: boolean | null;
  isLocked?: boolean;
  onSelect: (answer: string) => void;
  question: string;
  selectedAnswer?: null | string;
};

const answerLabels = ['A)', 'B)', 'C)', 'D)'];

export const QuestionCard = ({
  answers,
  category,
  isCorrect,
  isLocked,
  onSelect,
  question,
  selectedAnswer,
}: QuestionCardProps) => {
  return (
    <div className="bg-tertiary-800/40 mx-auto w-full rounded-sm p-2 shadow-md backdrop-blur-sm sm:p-8 md:p-4 lg:min-w-4xl">
      <p className="bg-secondary-600 mb-4 bg-clip-text font-extrabold tracking-widest text-transparent uppercase sm:text-lg">
        💫 {CATEGORY_LABELS[category]}
      </p>
      <p className="mb-6 font-semibold break-words text-white sm:text-lg sm:text-xl">
        {question}
      </p>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
        {answers.map((answer, index) => {
          const isSelected = selectedAnswer === answer;
          let borderColor = '';
          if (isSelected && isLocked) {
            borderColor = isCorrect ? 'border-green-500' : 'border-red-500';
          }
          return (
            <Button
              className={`flex max-w-full min-w-2xs justify-center gap-2 border-2 py-3 text-base font-medium transition hover:brightness-110 ${isSelected ? borderColor : 'border-transparent'} ${isLocked ? 'pointer-events-none opacity-80' : ''}`}
              disabled={isLocked}
              key={`${index}-${answer}`}
              onClick={() => onSelect(answer)}
              variant="primary"
            >
              <span className="w-full text-start">
                {answerLabels[index]} {answer}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
