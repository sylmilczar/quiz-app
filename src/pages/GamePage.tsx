import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Button';
import { QuestionCard } from '@/components/QuestionCard';

export const GamePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-10 px-4 py-12">
      <div className="w-full max-w-2xl text-center">
        <h2 className="mb-2 text-3xl font-semibold text-yellow-400">
          Gra rozpoczęta!
        </h2>
        <p className="mb-8 text-slate-200">
          Odpowiadaj na pytania i sprawdź swoją wiedzę 🚀
        </p>

        <QuestionCard
          answers={['jedną', 'dwie', 'trzy', 'cztery']}
          onSelect={(a) => console.log('wybrano odpowiedź', a)}
          question="Ile kot ma łap?"
        />

        <div className="mt-10">
          <Button
            className="px-8 py-3 text-base"
            onClick={() => navigate('/')}
            variant="secondary"
          >
            Powrót
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
