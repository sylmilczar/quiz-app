import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Button';

export const HomePage = () => {
  const navigate = useNavigate();
  const [numQuestions, setNumQuestions] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<string>('0');

  const startGame = () => {
    // pass parameters to /game as query params (can be read by GamePage later)
    const params = new URLSearchParams({
      difficulty,
      questions: String(numQuestions),
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
          <label className="flex items-center justify-center gap-2 text-slate-200">
            Ilość pytań:
            <select
              className="bg-tertiary-700 ml-2 rounded-sm px-2 py-1 text-slate-100"
              onChange={(e) => setNumQuestions(Number(e.target.value))}
              value={numQuestions}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </label>

          <label className="flex items-center justify-center gap-2 text-slate-200">
            Poziom:
            <select
              className="bg-tertiary-700 ml-2 rounded-sm px-2 py-1 text-slate-100"
              onChange={(e) => setDifficulty(e.target.value)}
              value={difficulty}
            >
              <option value="0">Łatwy</option>
              <option value="1">Średni</option>
              <option value="2">Trudny</option>
            </select>
          </label>
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
