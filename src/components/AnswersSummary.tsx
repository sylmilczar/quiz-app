type Answer = {
  correctAnswer: string;
  isCorrect: boolean;
  question: string;
  userAnswer: string;
};

type AnswersSummaryProps = {
  answers: Answer[];
  score: number;
  totalQuestions: number;
};

export const AnswersSummary = ({
  answers,
  score,
  totalQuestions,
}: AnswersSummaryProps) => {
  return (
    <div className="w-full py-8">
      <div className="text-center">
        <h3 className="mb-4 text-2xl font-bold text-green-400">Koniec gry!</h3>
        <p className="mb-6 text-lg text-slate-200">
          Twój wynik:{' '}
          <span className="font-bold">
            {score} / {totalQuestions}
          </span>
        </p>
      </div>

      <div className="bg-tertiary-800/40 mx-auto mb-8 w-full max-w-2xl rounded-sm p-4 sm:p-6">
        <h4 className="mb-4 text-lg font-semibold text-yellow-400 sm:text-xl">
          Podsumowanie odpowiedzi:
        </h4>
        <div className="space-y-3 sm:space-y-4">
          {answers.map((answer, index) => (
            <div
              className="bg-tertiary-700/20 rounded-sm p-3 sm:p-4"
              key={index}
            >
              <p className="mb-2 text-left font-medium text-white">
                {index + 1}. {answer.question}
              </p>
              <div className="flex flex-col gap-1 text-sm md:ms-3">
                <div className="flex items-center gap-2">
                  <span className="text-slate-300">Twoja odpowiedź:</span>
                  <span
                    className={
                      answer.isCorrect ? 'text-green-400' : 'text-red-400'
                    }
                  >
                    {answer.userAnswer} {answer.isCorrect ? '✓' : '✗'}
                  </span>
                </div>
                {!answer.isCorrect && (
                  <div className="flex items-center gap-2">
                    <span className="text-slate-300">Poprawna odpowiedź:</span>
                    <span className="text-green-400">
                      {answer.correctAnswer}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
