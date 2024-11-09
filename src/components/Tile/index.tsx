import * as React from "react";
import { images } from "../../assets";

type TileProps = {
  type: "energy" | "token" | "empty" | "flipbit";
  color: string;
  label: string;
};
const Tile = ({ label }: TileProps) => {
  return (
    <div
      className="w-8 sm:w-16 h-8 sm:h-16 rounded-md border border-border-dark flex flex-row items-center justify-center"
      style={{ backgroundColor: "#D9D9D9" }}
    >
      {label === "flipbit" ? <img src={images.bits} /> : <p className="font-bold">{label}</p>}
    </div>
  );
};

export default Tile;
