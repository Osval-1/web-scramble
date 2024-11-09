import { images } from "../../assets";
import InfoCard from "../../components/Infocard";
import Tile from "../../components/Tile";
import Button from "../../components/button";
import { useState, useEffect, useRef } from "react";
import { rollDie } from "../../utils/roll_die";
import { useAppDispatch, useAppSelector } from "../../store";
import { createGame } from "../../utils/create_game_instance";
import { convertToBinary } from "../../utils/convert_to_binary";
import { updateRoll } from "../../store/slices/gameSlice";

const Game = () => {
  const [encodedMessage, setEncodedMessage] = useState<string>("");
  const game = useAppSelector((state) => state.gameInstance);
  const [gameProgress, setGameProgress] = useState(
    game.decoded_message.split("")
  );

  useEffect(() => {
    setEncodedMessage(convertToBinary(game.decoded_message));
    console.log(game)
  });
  const dispatch = useAppDispatch();

  const handleDieRoll = () => {
    const roll = rollDie();
      dispatch(updateRoll(roll));
  };

  // create an array to hold the references for each game tile

  const gameArray = createGame();
  return (
    <main className="w-full  flex flex-col gap-8 px-4 items-center">
      <h1 className="text-2xl md:text-4xl text-center text-text-h1 opacity-75 pt-4">
        Quantum Code Breaker{" "}
      </h1>
      <section className="w-screen  gap-4 flex flex-col sm:flex-row gap-4 md:gap-20 ">
        <section
          style={{
            backgroundImage: `url(${images.background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className=" border w-full md:w-3/4 h-screen pl-16 md:pl-16 lg:pl-28 pb-4 md:pb-12 grid grid-cols-5"
        >
          {gameArray.map((itemLabel, index) => {
            let TileColor =
              index === game.currentPosition ? "#EFE9C9" : "#D9D9D9";
            let tileBorderColor =
              index === game.currentPosition ? "#EAA21E" : "#918C73";
            return (
              <Tile
                key={index}
                label={itemLabel}
                color={TileColor}
                borderColor={tileBorderColor}
              />
            );
          })}{" "}
        </section>
        <section className=" flex flex-col justify-between">
          <div className="flex flex-row sm:flex-col gap-4 ">
            <InfoCard
              label="energy"
              image={images.energy}
              data={`${game.energy}/10`}
            />
            <InfoCard
              label="Tokens"
              image={images.coins}
              data={`${game.tokens}`}
            />
            <InfoCard
              image={images.time}
              label="Time"
              data={`${game.time} Secs`}
            />
          </div>
          <div className="flex flex-row sm:flex-col">
            <img src={images.die} alt="die" />
            <h1 className="text-4xl text-center text-text-h1 opacity-75 pt-4">
              1
            </h1>
          </div>
        </section>
      </section>
      <section className="flex flex-col sm:flex-row gap-4 sm:items-center p-4 w-full">
        <div
          className="w-full h-20 sm:h-40 rounded-sm mb-4 font-semibold p-2"
          style={{ backgroundColor: "#EFE9C9" }}
        >
          {encodedMessage}
        </div>
        <button
          className="border-2 w-40 h-12"
          style={{ borderColor: "#72D07C" }}
        >
          Gain Energy
        </button>
      </section>
      <section className="flex flex-col sm:flex-row gap-4 sm:items-center p-4 w-full">
        <div
          className="w-full h-20 sm:h-40 rounded-md mb-4 p-4 flex "
          style={{ backgroundColor: "#EFE9C9" }}
        >
          {gameProgress.map((item) => (
            <img src={images.locksvg} className="w-6 h-6" alt="locks" />
          ))}
        </div>
        <Button label="Roll dice" color="#72D07C" onclick={handleDieRoll} />
      </section>
    </main>
  );
};

export default Game;
