import { images } from "../../assets";

type TileProps = {
  color: string;
  borderColor:string;
  label: string;
};
const Tile = ({ label, color,borderColor }: TileProps) => {
  return (
    <div
      className="w-8 sm:w-16 h-8 sm:h-16 rounded-md border border-border-dark flex flex-row items-center justify-center"
      style={{ backgroundColor: color,borderColor:borderColor}}
    >
      {label === "flipbit" ? (
        <img src={images.bits} />
      ) : (
        <p className="font-bold">{label}</p>
      )}
    </div>
  );
};

export default Tile;
