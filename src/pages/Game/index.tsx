import { images } from "../../assets";
import InfoCard from "../../components/Infocard";
import Tile from "../../components/Tile";
import Button from "../../components/button";

const Game = () => {
  // create an array to hold the references for each game tile
  const gameArray = new Array(30).fill(0);
  return (
    <main className="w-full  flex flex-col gap-8 px-4">
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
            {/* auto-cols-max */}
          {gameArray.map((item, index) => {
            return <Tile key={index} />;
          })}{" "}
        </section>
        <section className=" flex flex-row sm:flex-col gap-4 ">
          <InfoCard label="energy" image={images.energy} data="0/10" />
          <InfoCard label="energy" image={images.energy} data="0/10" />
          <InfoCard label="energy" image={images.energy} data="0/10" />
        </section>
      </section>
      <section className="flex flex-col sm:flex-row gap-4 sm:items-center p-4">
        <div
          className="w-full h-20 sm:h-40 rounded-small mb-4 "
          style={{ backgroundColor: "#EFE9C9" }}
        >
          0 1 0 3 0 4 0 5 6 7 8 9 0 9 0 3 4 5 6 7
        </div>
        <button className="border-2 w-36 h-12" style={{borderColor:"#72D07C"}}>Gain Energy</button>
      </section>
      <section className="flex flex-col sm:flex-row gap-4 sm:items-center">
        <div
          className="w-full h-20 sm:h-40 rounded-md mb-4 p-4 flex "
          style={{ backgroundColor: "#EFE9C9" }}
        >
          <img src={images.locksvg} className="w-6 h-6" alt="locks"/>
          <img src={images.locksvg} className="w-6 h-6" alt="locks"/>
          <img src={images.locksvg} className="w-6 h-6" alt="locks"/>
          <img src={images.locksvg} className="w-6 h-6" alt="locks"/>
          <img src={images.locksvg} className="w-6 h-6" alt="locks"/>
          <img src={images.locksvg} className="w-6 h-6" alt="locks"/>
          <img src={images.locksvg} className="w-6 h-6" alt="locks"/>
          <img src={images.locksvg} className="w-6 h-6" alt="locks"/>
        </div>
        <Button label="Roll dice" color="#72D07C"/>
      </section>
    </main>
  );
};

export default Game;
