import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Difficulty } from '@/types/quizQuestions.types';

import { CustomSelect } from '@/components';
import { Button } from '@/components/Button';
import { DIFFICULTY_LABELS } from '@/constants/labels';

export const HomePage = () => {
  const navigate = useNavigate();
  const [numQuestions, setNumQuestions] = useState<string>('5');
  const [difficulty, setDifficulty] = useState<Difficulty>(0);

  const startGame = () => {
    // pass parameters to /game as query params (can be read by GamePage later)
    const params = new URLSearchParams({
      difficulty: String(difficulty),
      questions: numQuestions,
    });
    navigate(`/game?${params.toString()}`);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <h1 className="mt-5 mb-6 text-2xl font-bold text-yellow-400 sm:mb-10 sm:text-4xl">
        Witaj w CosmicQuiz!
      </h1>
      <div className="mb-6 text-center sm:mb-8">
        <p className="mb-4 text-base text-slate-200 sm:text-lg">
          Witaj w świecie wiedzy! CosmicQuiz to fascynujący quiz sprawdzający
          Twoją wiedzę z różnych dziedzin - od świata zwierząt, przez tajemnice
          kosmosu, po chemię, geografię i wiele innych.
        </p>
        <p className="text-lg text-slate-200">
          Wybierz poziom trudności i liczbę pytań, a następnie rozpocznij swoją
          przygodę z różnorodnymi pytaniami.
        </p>
        <p className="text-lg text-slate-200">Sprawdź, ile wiesz!</p>
      </div>
      <div className="bg-tertiary-700/20 w-full max-w-2xl rounded-sm p-6 text-center shadow-lg backdrop-blur-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <CustomSelect
            label="Ilość pytań"
            onChange={(v) => setNumQuestions(v)}
            options={[
              { label: '5', value: '5' },
              { label: '10', value: '10' },
              { label: '20', value: '20' },
            ]}
            value={numQuestions}
          />

          <CustomSelect
            label="Poziom"
            onChange={(v) => setDifficulty(v)}
            options={Object.entries(DIFFICULTY_LABELS).map(([key, label]) => ({
              label,
              value: Number(key) as Difficulty,
            }))}
            value={difficulty}
          />
        </div>
      </div>
      <div className="flex justify-center py-6">
        <Button
          className="px-6 py-3 text-lg"
          onClick={startGame}
          variant="secondary"
        >
          Rozpocznij grę!
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
