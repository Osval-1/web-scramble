import { images } from "../../assets";
import InfoCard from "../../components/Infocard";
import Tile from "../../components/Tile";
import Button from "../../components/button";
import { useState, useEffect } from "react";
import { rollDie } from "../../utils/roll_die";
import { useAppDispatch, useAppSelector } from "../../store";
import { createGame } from "../../utils/create_game_instance";
import { convertToBinary } from "../../utils/convert_to_binary";
import {
  resetCurrentPosition,
  updateRoll,
  updateGameProgress,
  getGameProgress,
  addEnergy,
  addToken,
  flipBit,
} from "../../store/slices/gameSlice";
import { useNavigate } from "react-router-dom";
import OutlineButton from "../../components/outline_button";
import { flipRandomBit } from "../../utils/flip_random_bit";
import { createGameProgress } from "../../utils/create_game_progress";

// create an array to hold the references for each game tile
const gameArray = createGame();

//page for which the game runs
const Game = () => {
  const [encodedMessage, setEncodedMessage] = useState<string>("");
  const [timer, setTimer] = useState(0);
  const game = useAppSelector((state) => state.gameInstance);
  const tokens = useAppSelector((state) => state.gameInstance.tokens);
  const energy = useAppSelector((state) => state.gameInstance.energy);

  const gameProgress = useAppSelector(
    (state) => state.gameInstance.gameProgress
  );
  const [tileType, setTileType] = useState<string>(gameArray[0]);

  //convert to binary and create progress tracking data structure
  useEffect(() => {
    setEncodedMessage(convertToBinary(game.decoded_message));
    dispatch(getGameProgress(createGameProgress(game.decoded_message)));
  }, []);

  //timer
  useEffect(() => {
    const timerRef = setInterval(() => {
      setTimer((prevstate) => prevstate + 1);
    }, 1000);

    return () => clearInterval(timerRef);
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // method to update progress tracker
  const updateProgress = (flippedIndex: number) => {
    const newGameProgressIndex = Math.floor(flippedIndex / 8);
    dispatch(updateGameProgress(newGameProgressIndex));
  };

  // handler for die rolls
  const handleDieRoll = () => {
    const roll = rollDie();
    if (game.currentPosition + roll > 30) {
      dispatch(resetCurrentPosition(0));
      setTileType(gameArray[0]);
      return;
    }
    dispatch(updateRoll(roll));
    setTileType(gameArray[game.currentPosition + roll]);
  };

  //handler for all interactions withoutline button
  const handlePressOutlineButton = () => {
    console.log(tileType);
    if (tileType === "e") {
      handleEnergyGain();
      return;
    }
    if (tileType === "flipbit") {
      handleFlipBit();
      const winCondition = gameProgress.find((item) => item.flipped === false);
      if (winCondition === undefined) {
        navigate("/Won");
      }
      return;
    }
    if (tileType === "q") {
      handleTokenGain();
      return;
    }
  };
  // handler for fliping the bits
  const handleFlipBit = () => {
    if (energy <= 0 || tokens <= 0) return;
    const { bits, flippedIndex } = flipRandomBit(encodedMessage);
    setEncodedMessage(bits);
    updateProgress(flippedIndex);
    dispatch(flipBit());
  };
  //handler for incrementing energy
  const handleEnergyGain = () => {
    dispatch(addEnergy());
  };
  //handler for incrementing tokens

  const handleTokenGain = () => {
    dispatch(addToken());
  };

  return (
    <main className="w-full  flex flex-col gap-8 px-4 items-center">
      <h1 className="text-2xl md:text-4xl text-center text-text-h1 opacity-75 pt-4 font-space_grotesk">
        Quantum Code Breaker{" "}
      </h1>
      <section className="w-screen flex flex-col sm:flex-row gap-4 md:gap-20 ">
        <section
          style={{
            backgroundImage: `url(${images.background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className=" border w-full md:w-3/4 h-screen pl-20 sm:pl-24 md:pl-24 lg:pl-32 pb-4 md:pb-12 grid grid-cols-5"
        >
          {/* this is where the game board exists */}
          {gameArray.map((itemLabel, index) => {
            const TileColor = index === game.currentPosition ? "#EFE9C9" : "#D9D9D9";
            const tileBorderColor =
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

        {/* All the information tiles */}
        <section className=" flex flex-col justify-between">
          <div className="flex flex-row sm:flex-col gap-4 ">
            <InfoCard
              label="energy"
              image={images.energy}
              data={`${energy}/10`}
            />
            <InfoCard label="Tokens" image={images.coins} data={`${tokens}`} />
            <InfoCard image={images.time} label="Time" data={`${timer} Secs`} />
          </div>
          <div className="flex flex-row sm:flex-col">
            <img src={images.die} alt="die" />
            <h1 className="text-4xl text-center text-text-h1 opacity-75 pt-4">
              {game.currentRoll}
            </h1>
          </div>
        </section>
      </section>
      {/* encoded message section*/}
      <section className="flex flex-col sm:flex-row gap-12 sm:items-center p-4 w-full ">
        <p
          className="w-3/4 min-h-20 sm:min-h-32 rounded-sm mb-4 font-semibold p-2 flex break-all tracking-widest font-space_grotesk"
          style={{ backgroundColor: "#EFE9C9" }}
        >
          {encodedMessage}
        </p>
        <OutlineButton type={tileType} click={handlePressOutlineButton} />
      </section>

      {/* decoded message section */}
      <section className="flex flex-col sm:flex-row gap-16 sm:items-center p-4 w-full">
        <div
          className="w-3/4  min-h-20 sm:min-h-32 rounded-md mb-4 p-4 flex flex-wrap gap-2"
          style={{ backgroundColor: "#EFE9C9" }}
        >
          {gameProgress.map((item, index) => {
            if (item.flipped === true) {
              return <div key={index}>{item.letter}</div>;
            }
            return (
              <img
                src={images.locksvg}
                className="w-6 h-6"
                alt="locks"
                key={index}
              />
            );
          })}
        </div>
        <Button label="Roll dice" color="#72D07C" onclick={handleDieRoll} />
      </section>
    </main>
  );
};

export default Game;
