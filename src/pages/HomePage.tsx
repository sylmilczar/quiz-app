import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Button';

export const HomePage = () => {
  const navigate = useNavigate();
  const [numQuestions, setNumQuestions] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<string>('łatwy');

  const startGame = () => {
    // pass parameters to /game as query params (can be read by GamePage later)
    const params = new URLSearchParams({
      difficulty,
      questions: String(numQuestions),
    });
    navigate(`/game?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-2xl rounded-sm bg-white/10 p-10 text-center shadow-lg backdrop-blur-sm">
        <h1 className="text-secondary-400 mb-10 text-4xl font-bold">
          Witaj w CosmicQuiz!
        </h1>
        <p className="mb-4 text-lg text-slate-200">
          Przygotuj się na krótki quiz. Sprawdź swoją wiedzę odpowiadając na
          pytania.
        </p>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <label className="flex items-center gap-2 text-sm text-slate-200">
            Pytania:
            <select
              className="bg-tertiary-700 ml-2 rounded-sm px-2 py-1 text-slate-100"
              onChange={(e) => setNumQuestions(Number(e.target.value))}
              value={numQuestions}
            >
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </label>

          <label className="flex items-center gap-2 text-sm text-slate-200">
            Poziom:
            <select
              className="bg-tertiary-700 ml-2 rounded-sm px-2 py-1 text-slate-100"
              onChange={(e) => setDifficulty(e.target.value)}
              value={difficulty}
            >
              <option value="łatwy">Łatwy</option>
              <option value="średni">Średni</option>
              <option value="trudny">Trudny</option>
            </select>
          </label>
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
    </div>
  );
};

export default HomePage;
