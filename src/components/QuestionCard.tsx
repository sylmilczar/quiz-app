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
    <div className="bg-tertiary-800/40 rounded-2xl p-8 shadow-md backdrop-blur-sm">
      <p className="mb-6 text-xl font-semibold text-white">{question}</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {answers.map((answer, index) => (
          <Button
            className="flex w-full justify-center gap-2 py-3 text-base font-medium transition hover:brightness-110"
            key={`${index}-${answer}`}
            onClick={() => onSelect(answer)}
            variant="primary"
          >
            <span>
              {answerLabels[index]} {answer}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};
