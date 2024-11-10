type ButtonProps = {
  color: string;
  label: string;
  onclick?: () => void;
};
const Button = ({ color, label, onclick }: ButtonProps) => {
  return (
    <button
      className="text-md font-bold rounded-md px-2 sm:px-4 w-20 sm:w-28 text-sm sm:text-md h-12"
      style={{ backgroundColor: color }}
      onClick={onclick}
    >
      <p className="text-white">{label}</p>
    </button>
  );
};

export default Button;
