export type Answer = {
  correct: boolean;
  text: string;
};

export type Category =
  | 'animals'
  | 'celebrities'
  | 'chemistry'
  | 'fun'
  | 'geography'
  | 'history'
  | 'lameJoke'
  | 'popculture'
  | 'science'
  | 'space';

export type Difficulty = 0 | 1 | 2;

export type QuizQuestion = {
  answers: Answer[];
  category: Category;
  difficultyLevel: 0 | 1 | 2;
  id: number;
  question: string;
};
