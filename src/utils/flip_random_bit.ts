export const flipRandomBit = (bitString: string) => {
  const bits = bitString.replace(/\s/g, "").split("");

  const randomPosition = Math.floor(Math.random() * bits.length);

  bits[randomPosition] = bits[randomPosition] === "0" ? "1" : "0";
  console.log(randomPosition)

  // if (bitString.includes(' ')) {
  //     return bits
  //         .join('')
  //         .match(/.{8}/g)
  //         .join(' ');
  // }

  return bits.join("");
};
