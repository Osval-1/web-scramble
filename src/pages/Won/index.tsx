import { images } from "../../assets";
import { useNavigate } from "react-router-dom";

// Won page which will be displayed to the user when they succesfully decode the game
const Won = () => {
  
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <main className="h-full w-full flex flex-col items-center gap-8">
      <h1 className="text-2xl md:text-4xl text-center pt-4 font-bold font-space_grotesk">
        Message
      </h1>
      <section
        className="w-2/3 p-4 rounded-sm text-left"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <p style={{ color: "#78786E" }} className="font-space_grotesk tracking-wider">
          Physics-Informed Neural Networks (PINNs) are a class of deep learning
          models that can be trained on physics-based simulations. This allows
          you to control the model's architecture, training data, and
          hyperparameters, making it useful for a wide range of applications.
        </p>
      </section>
      <section className="w-2/3">
        <p className="font-semibold font-space_grotesk">
          Congratulations! You've decoded the message. You've earned
          <span className=" font-space_grotesk font-extrabold"> 100 Qcibs. </span>
          Enter your email to claim your rewards
        </p>
      </section>
      <section className="flex flex-row sm:flex-row gap-4 items-center">
        <div
          onClick={handleNavigate}
          className="font-bold text-xl h-12 p-2 font-space_grotesk cursor-pointer"
          style={{color:"#4C473D"}}
        >
          Play Again
        </div>
        <div
          className="border rounded-sm p-4 flex gap-2 font-bold h-12 items-center font-space_grotesk cursor-pointer"
          style={{ backgroundColor: "#FAFAFA" }}
        >
          <figure>
            <img src={images.share} alt="share image" />
          </figure>
          Share to someone else
        </div>
      </section>
      <section className="w-2/3 flex flex-col gap-4">
        <div className="flex ">
          <img src={images.stack_of_coins} alt="stack of coins" />
          <p className="font-bold text-xl font-space_grotesk"> 100 Qcibs</p>
        </div>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            placeholder="Email"
            style={{ color: "#78786E", borderColor: "#D9D9D9" }}
            className="border-2 p-2 font-bold w-full font-space_grotesk"
          />
        </label>
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            placeholder="Name"
            style={{ color: "#78786E", borderColor: "#D9D9D9" }}
            className="border-2 p-2 font-bold w-full font-space_grotesk"
          />
        </label>
      </section>
    </main>
  );
};

export default Won;
