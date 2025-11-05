import { useLocation } from 'react-router-dom';

import type { Difficulty } from '@/types/quizQuestions.types';

export const useQuizParams = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const numQuestions = Number(params.get('questions')) || 5;
  const rawDifficulty = Number(params.get('difficulty'));
  const difficulty: Difficulty = [0, 1, 2].includes(rawDifficulty)
    ? (rawDifficulty as Difficulty)
    : 0;

  return { difficulty, numQuestions };
};
