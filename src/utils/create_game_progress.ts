// generate an array of objects which can be used to monintor real time progress
export const createGameProgress = (text: string) => {
  const splitText = text.split("");

  const gameProgress = splitText.map((singleLetter) => {
    return {
      letter: singleLetter,
      flipped: false,
    };
  });
  return gameProgress;
};
