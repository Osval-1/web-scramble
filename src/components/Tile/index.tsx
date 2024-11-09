type TileProps = {
  type: "energy" | "token" | "empty" | "flipbit";
  image: string;
  color: string;
};
const Tile = () => {
  return (
    <div
      className="w-8 sm:w-16 h-8 sm:h-16 rounded-md border border-border-dark"
      style={{ backgroundColor: "#D9D9D9" }}
    >
      
    </div>
  );
};

export default Tile;
