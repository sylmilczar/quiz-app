import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Button';
import { QuestionCard } from '@/components/QuestionCard';

export const GamePage = () => {
  const navigate = useNavigate();

  return (
    <div className="m-5 flex flex-col gap-5 text-center">
      <p className="mx-auto text-xl text-slate-100">
        Gra rozpoczęta — odpowiadaj na pytania
      </p>

      <QuestionCard
        answers={['jedeną', 'dwie', 'trzy', 'cztery']}
        onSelect={(a) => console.log('wybrano odpowiedź', a)}
        question="Ile kot ma łap?"
      />
      <Button onClick={() => navigate('/')} variant="secondary">
        Powrót
      </Button>
    </div>
  );
};

export default GamePage;
