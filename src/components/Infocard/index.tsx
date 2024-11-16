type InfoCardProps = {
  label: string;
  image: string;
  data: string;
  energy?: string;
  time?: string;
};
const InfoCard = ({ label, data, image }: InfoCardProps) => {
  return (
    <div
      className="flex flex-row  border border-border-light rounded-md p-1.5  md:p-2.5 gap-2.5 sm:gap:2.5  items-center justify-between min-w-32"
    >
      <figure>
        <img src={image} alt="infoCard Image" />
      </figure>
      <p className="font-space_grotesk font-medium text-sm sm:text-md">{label}</p>
      <p className="font-space_grotesk font-medium text-sm sm:text-md">{data}</p>
    </div>
  );
};

export default InfoCard;
