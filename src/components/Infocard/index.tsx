type InfoCardProps = {
  label: string;
  image: string;
  data: string;
  energy?: string;
  time?: string;
};
const InfoCard = ({ label, data, image }: InfoCardProps) => {
  return (
    <div className="flex flex-row  border border-border-light rounded-md p-2.5 gap-2.5" style={{width:140}}>
      <img src={image} />
      <p>{label}</p>
      <p>{data}</p>
    </div>
  );
};

export default InfoCard;
