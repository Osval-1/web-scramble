import { useState } from "react";
import { FormEvent } from "react";
import InfoCard from "../../components/Infocard";
import { images } from "../../assets";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { updateDecodedMessage } from "../../store/slices/gameSlice";

const Setup = () => {
  const [text, setText] = useState<string>(
    "Enter your message to be decoded ( Leave blank for default)"
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleTextArea = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const handlePlay = () => {
    if (text.length === 0) {
      dispatch(updateDecodedMessage("quantumrealm"));
      return;
    }
    if (text === "Enter your message to be decoded ( Leave blank for default)") {
      dispatch(updateDecodedMessage("quantumrealm"));
      navigate("/Game");
      return;
    }
    dispatch(updateDecodedMessage(text));
    navigate("/Game");
  };
  return (
    <main className="w-screen h-full flex flex-col gap-12 px-4 items-center">
      <h1 className="text-2xl md:text-4xl text-center text-text-h1 opacity-75 pt-4">
        Quantum Code Breaker{" "}
      </h1>
      <section className="sm:w-2/3 md:w-1/2">
        <textarea
          name="input"
          value={text}
          className="border w-full rounded-sm text-text-h1 p-4 "
          style={{
            borderColor: "#E8DECF",
            backgroundColor: "#FAFAFA",
            color: "#78786E",
          }}
          onChange={(e) => handleTextArea(e)}
          cols={30}
          rows={10}
        ></textarea>
        <h1 className="text-2xl md:text-4xl  pt-4 font-bold  w-1/2">Setup</h1>
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <InfoCard label="Energy" image={images.energy} data="0/10" />
          <InfoCard label="Tokens" image={images.coins} data="5" />
          <InfoCard image={images.time} label="Time" data="20 Secs" />
          <InfoCard image={images.bait} label="Bait" data="$3" />
          <InfoCard image={images.stack_of_coins} label="QCibs" data="3" />
          <InfoCard image={images.bits} label="Max Bits" data="3" />
        </section>
      </section>
      <section className="flex flex-row gap-4 justify-center">
        <Button label="Play" color="#72D07C" onclick={handlePlay} />
        <h1 className="text-2xl md:text-4xl  pt-4 font-bold">Or</h1>
        <div
          className="border rounded-sm p-4 flex gap-2 font-bold"
          style={{ backgroundColor: "#F5F0E5" }}
        >
          <figure>
            <img src={images.share} alt="share image" />
          </figure>
          Share to someone else
        </div>
      </section>
      <img src={images.code} alt="code" className="" />
    </main>
  );
};

export default Setup;
