import { images } from "../../assets";
import { useNavigate } from "react-router-dom";

const Won = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Won");
  };
  return (
    <main className="h-full w-full flex flex-col items-center gap-8">
      <h1 className="text-2xl md:text-4xl text-center pt-4 font-bold ">
        Message
      </h1>
      <section
        className="w-2/3 p-4 rounded-sm text-left"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <p style={{ color: "#78786E" }}>
          Physics-Informed Neural Networks (PINNs) are a class of deep learning
          models that can be trained on physics-based simulations. This allows
          you to control the model's architecture, training data, and
          hyperparameters, making it useful for a wide range of applications.
        </p>
      </section>
      <section className="w-2/3">
        <p className="font-semibold">
          Congratulations! You've decoded the message. You've earned
          <span className="font-bold"> 100 Qcibs.</span>
          Enter your email to claim your rewards
        </p>
      </section>
      <section className="flex flex-row gap-4 items-center">
        <p
          onClick={handleNavigate}
          className="font-bold text-xl h-12"
          color="#4C473D"
        >
          Play again
        </p>
        <div
          className="border rounded-sm p-4 flex gap-2 font-bold h-12 items-center"
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
          <p className="font-bold text-xl"> 100 Qcibs</p>
        </div>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            placeholder="Email"
            style={{ color: "#78786E", borderColor: "#D9D9D9" }}
            className="border-2 p-2 font-bold w-full"
          />
        </label>
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            placeholder="Name"
            style={{ color: "#78786E", borderColor: "#D9D9D9" }}
            className="border-2 p-2 font-bold w-full"
          />
        </label>
      </section>
    </main>
  );
};

export default Won;
