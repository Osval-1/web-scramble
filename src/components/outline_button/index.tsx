
type OutlineButtonProps = {
  type: string;
  click: () => void;
};
const OutlineButton = ({ type, click }: OutlineButtonProps) => {
  return (
    <button
      className="border-2 w-40 h-12"
      style={{
        borderColor: "#72D07C",
        display: type === " " ? "none" : "block",
      }}
      onClick={click}
    >
      {type === "q" && "Claim Token"}
      {type === "e" && "Gain Energy"}
      {type === "flipbit" && "Flip Bit"} 
    </button>
  );
};

export default OutlineButton;
