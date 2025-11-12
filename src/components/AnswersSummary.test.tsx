import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AnswersSummary } from '@/components/AnswersSummary';

// Mock useQuizParams hook
vi.mock('@/hooks/useQuizParams', () => ({
  useQuizParams: vi.fn(() => ({ difficulty: 1 })),
}));

// Mock constants
vi.mock('@/constants/labels', async () => {
  const actual = await vi.importActual('@/constants/labels');
  return {
    ...actual,
  };
});

describe('AnswersSummary', () => {
  const mockAnswers = [
    {
      correctAnswer: 'Warszawa',
      isCorrect: true,
      question: 'Jaka jest stolica Polski?',
      userAnswer: 'Warszawa',
    },
    {
      correctAnswer: '4',
      isCorrect: false,
      question: 'Ile to 2 + 2?',
      userAnswer: '5',
    },
    {
      correctAnswer: 'Adam Mickiewicz',
      isCorrect: true,
      question: 'Kto napisał "Pan Tadeusz"?',
      userAnswer: 'Adam Mickiewicz',
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('powinien renderować komponent z poprawnymi danymi', () => {
    render(
      <AnswersSummary answers={mockAnswers} score={2} totalQuestions={3} />
    );

    expect(screen.getByText('Koniec gry!')).toBeInTheDocument();
    expect(screen.getByText(/Twój wynik:/)).toBeInTheDocument();
    expect(screen.getByText('2 / 3')).toBeInTheDocument();
  });

  it('powinien wyświetlać poziom trudności', async () => {
    const { DIFFICULTY_LABELS } = await import('@/constants/labels');
    render(
      <AnswersSummary answers={mockAnswers} score={2} totalQuestions={3} />
    );
    expect(
      screen.getByText(`(poziom: ${DIFFICULTY_LABELS[1]})`)
    ).toBeInTheDocument();
    expect(screen.getByText('(poziom: Średni)')).toBeInTheDocument();
  });

  it('powinien renderować wszystkie pytania z odpowiedziami', () => {
    render(
      <AnswersSummary answers={mockAnswers} score={2} totalQuestions={3} />
    );

    mockAnswers.forEach((answer, index) => {
      expect(
        screen.getByText(`${index + 1}. ${answer.question}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(answer.userAnswer, { exact: false })
      ).toBeInTheDocument();
    });
  });

  it('powinien pokazywać checkmark dla poprawnych odpowiedzi', () => {
    render(
      <AnswersSummary answers={mockAnswers} score={2} totalQuestions={3} />
    );

    const correctAnswers = screen.getAllByText(/✓/);
    expect(correctAnswers).toHaveLength(2); // 2 poprawne odpowiedzi
  });

  it('powinien pokazywać X dla błędnych odpowiedzi', () => {
    render(
      <AnswersSummary answers={mockAnswers} score={2} totalQuestions={3} />
    );

    const incorrectAnswers = screen.getAllByText(/✗/);
    expect(incorrectAnswers).toHaveLength(1); // 1 błędna odpowiedź
  });

  it('powinien pokazywać poprawną odpowiedź gdy użytkownik się pomylił', () => {
    render(
      <AnswersSummary answers={mockAnswers} score={2} totalQuestions={3} />
    );

    expect(screen.getByText('Poprawna odpowiedź:')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('nie powinien pokazywać poprawnej odpowiedzi gdy użytkownik odpowiedział dobrze', () => {
    const correctAnswers = mockAnswers.filter((a) => a.isCorrect);
    render(
      <AnswersSummary answers={correctAnswers} score={2} totalQuestions={2} />
    );

    expect(screen.queryByText('Poprawna odpowiedź:')).not.toBeInTheDocument();
  });

  it('powinien obsługiwać wynik 0/10', () => {
    const allWrong = mockAnswers.map((a) => ({ ...a, isCorrect: false }));
    render(<AnswersSummary answers={allWrong} score={0} totalQuestions={3} />);

    expect(screen.getByText('0 / 3')).toBeInTheDocument();
  });

  it('powinien obsługiwać perfekcyjny wynik', () => {
    const allCorrect = mockAnswers.map((a) => ({ ...a, isCorrect: true }));
    render(
      <AnswersSummary answers={allCorrect} score={3} totalQuestions={3} />
    );

    expect(screen.getByText('3 / 3')).toBeInTheDocument();
  });
});
