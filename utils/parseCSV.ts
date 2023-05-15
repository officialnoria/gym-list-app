import {Exercise} from "../interfaces/exercise";

export const readerOnLoad = (text: string): Exercise[] => {
  const lines = text.split('\n');
  const exercises: Exercise[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].split(',');
    exercises.push({
      bodyPart: line[0],
      equipment: line[1],
      gifUrl: line[2],
      id: line[3],
      name: line[4],
      target: line[5]
    });
  }
  return exercises;
}