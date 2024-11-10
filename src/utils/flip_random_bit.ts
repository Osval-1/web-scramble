export const flipRandomBit = (bitString: string) => {
  const bits = bitString.replace(/\s/g, "").split("");

  const randomPosition = Math.floor(Math.random() * bits.length);

  bits[randomPosition] = bits[randomPosition] === "0" ? "1" : "0";

  return { bits: bits.join(""), flippedIndex: randomPosition };
};
