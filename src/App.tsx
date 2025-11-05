import { Button } from '@/components/Button';

import { QuestionCard } from './components/QuestionCard';

const App = () => {
  return (
    <>
      <div className="m-5 flex flex-col gap-5 text-center">
        <p className="mx-auto text-xl">This is where it begins...</p>
        <div className="flex justify-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
        <div className="flex justify-center gap-3">
          <QuestionCard
            answers={['jedeną', 'dwie', 'trzy', 'cztery']}
            onSelect={() => console.log('hop hop')}
            question="Ile kot ma łap?"
          />
        </div>
      </div>
    </>
  );
};

export default App;
