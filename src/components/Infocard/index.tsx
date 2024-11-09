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
      className="flex flex-row  border border-border-light rounded-md p-1 md:p-2.5 gap-2.5 text-sm sm:text-md"
      style={{ width: 140 }}
    >
      <figure>
        <img src={image} alt="infoCard Image" />
      </figure>
      <p>{label}</p>
      <p>{data}</p>
    </div>
  );
};

export default InfoCard;
