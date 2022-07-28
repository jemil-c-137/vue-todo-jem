export interface IToDo {
  name: string;
  id: number;
  isComplete: boolean;
  isFavorite: boolean;
}

export type KeysToDo = keyof IToDo;
