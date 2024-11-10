export const determineType = (type: string) => {
  if (type === "e") {
    return "Gain Energy";
  }
  if (type === "q") {
    return "Claim Token";
  }
  if (type === "flipbit") {
    return "Flip Bit";
  }
};
