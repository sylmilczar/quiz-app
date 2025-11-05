import { Button } from '@/components';

type QuestionCardProps = {
  answers: [string, string, string, string];
  onSelect: (answer: string) => void;
  question: string;
};

const answerLabels = ['A)', 'B)', 'C)', 'D)'];

export const QuestionCard = ({
  answers,
  onSelect,
  question,
}: QuestionCardProps) => {
  return (
    <div className="bg-tertiary-800/40 mx-auto max-w-full rounded-sm p-8 shadow-md backdrop-blur-sm md:w-[800px]">
      <p className="mb-6 min-h-[56px] text-xl font-semibold break-words text-white">
        {question}
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {answers.map((answer, index) => (
          <Button
            className="flex max-w-full justify-center gap-2 py-3 text-base font-medium transition hover:brightness-110"
            key={`${index}-${answer}`}
            onClick={() => onSelect(answer)}
            variant="primary"
          >
            <span className="w-full truncate text-center">
              {answerLabels[index]} {answer}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};
