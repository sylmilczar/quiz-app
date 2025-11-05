import type { Category, Difficulty } from '@/types/quizQuestions.types';

export const CATEGORY_LABELS: Record<Category, string> = {
  animals: 'Zwierzęta',
  celebrities: 'Celebryci',
  chemistry: 'Chemia',
  fun: 'Zabawa',
  geography: 'Geografia',
  history: 'Historia',
  lameJoke: 'Suchar',
  popculture: 'Popkultura',
  science: 'Nauka',
  space: 'Kosmos',
};

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  0: 'Łatwy',
  1: 'Średni',
  2: 'Trudny',
};
