import { Button } from '@/components';

type QuestionCardProps = {
  answers: [string, string, string, string]; // dokładnie 4 elementy
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
    <div className="bg-secondary-50 w-full max-w-md rounded-2xl p-6 text-center shadow-md">
      <p className="mb-6 text-lg font-semibold">{question}</p>

      <div className="grid grid-cols-2 gap-4">
        {answers.map((answer, index) => (
          <Button
            className="flex items-center gap-2 text-base"
            key={`${index}-${answer}`}
            onClick={() => onSelect(answer)}
          >
            <span>{answerLabels[index]}</span>
            <span>{answer}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
