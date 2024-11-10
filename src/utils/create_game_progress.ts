export const createGameProgress = (text: string) => {
  const splitText = text.split("");

  const gameProgress = splitText.map((singleLetter) => {
    return {
      letter: singleLetter,
      flipped: false,
    };
  });
  console.log(splitText, gameProgress);
  return gameProgress;
};
