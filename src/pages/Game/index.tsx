import { images } from "../../assets";
import InfoCard from "../../components/Infocard";
import Tile from "../../components/Tile";

const Game = () => {
  const gameArray = new Array(30).fill(0);
  return (
    <main className="w-screen h-screen border ">
      <h1 className="text-2xl md:text-4xl text-center text-text-h1 opacity-75 p-4">
        Quantum Code Breaker{" "}
      </h1>
      <section className="w-screen h-screen gap-4 flex flex-col sm:flex-row gap-4">
        <section
          style={{
            backgroundImage: `url(${images.background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full md:w-3/4 h-4/5 md:h-screen pl-16 md:pl-16 lg:pl-28 pb-4 md:pb-12 grid grid-cols-5 auto-cols-max"
        >
          {gameArray.map((item, index) => {
            return <Tile key={index} />;
          })}{" "}
        </section>
        <section className=" flex flex-col gap-4">
          <InfoCard label="energy" image={images.energy} data="0/10" />
          <InfoCard label="energy" image={images.energy} data="0/10" />
          <InfoCard label="energy" image={images.energy} data="0/10" />
        </section>
      </section>
    </main>
  );
};

export default Game;
