export type Answer = {
  correct: boolean;
  text: string;
};

export type QuizQuestion = {
  answers: Answer[];
  category:
    | 'animals'
    | 'chemistry'
    | 'fun'
    | 'geography'
    | 'history'
    | 'popculture'
    | 'science'
    | 'space';
  difficultyLevel: 0 | 1 | 2;
  id: number;
  question: string;
};
