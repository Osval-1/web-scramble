type ButtonProps = {
  color: string;
  label: string;
  onclick?: () => void;
};
const Button = ({ color, label, onclick }: ButtonProps) => {
  return (
    <button
      className="text-md font-bold rounded-md px-4"
      style={{ backgroundColor: color }}
      onClick={onclick}
    >
      <p className="text-white">{label}</p>
    </button>
  );
};

export default Button;
