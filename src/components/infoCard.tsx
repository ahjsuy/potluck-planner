interface Props {
  text: string;
}

const InfoCard = ({ text }: Props) => {
  return (
    <div>
      <h1>header</h1>
      <div>icon</div>
      <p>{text}</p>
    </div>
  );
};

export default InfoCard;
