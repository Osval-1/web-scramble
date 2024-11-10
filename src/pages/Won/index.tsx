import { images } from "../../assets";
const Won = () => {
  return (
    <main>
      <h1 className="text-2xl md:text-4xl text-center pt-4 font-bold">
        Message
      </h1>
      <section className="" style={{ backgroundColor: "#F5F5F5" }}>
        <p style={{ color: "#78786E" }}>
          Physics-Informed Neural Networks (PINNs) are a class of deep learning
          models that can be trained on physics-based simulations. This allows
          you to control the model's architecture, training data, and
          hyperparameters, making it useful for a wide range of applications.
        </p>
      </section>
      <section>
        <p className="font-semibold">
          Congratulations! You've decoded the message. You've earned 100 Qcibs.
          Enter your email to claim your rewards
        </p>
      </section>
      <section className="flex flex-row">
        <p onClick={()=>console.log("home")} className="font-bold text-2xl" color="#4C473D">
   Play again
        </p>
        <div
          className="border rounded-sm p-4 flex gap-2 font-bold"
          style={{ backgroundColor: "#FAFAFA" }}
        >
          <figure>
            <img src={images.share} alt="share image" />
          </figure>
          Share to someone else
        </div>
      </section>
      <section>
        <div>
          <img src={images.stack_of_coins} alt="stack of coins" />
        </div>
        <input type="text" placeholder="Email" style={{color:"#78786E"}} className="border-2 p-2" />
      </section>
    </main>
  );
};

export default Won;
