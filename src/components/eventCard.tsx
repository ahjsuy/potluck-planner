interface Props {
  eventName: string;
  date: string;
  address: string;
}

const EventCard = ({ eventName, date, address }: Props) => {
  return (
    <div className="eventCard flex-column">
      <img
        className="upload-picture div-centered"
        src={"/assets/pexels-picjumbo-com-55570-196648.jpg"}
        style={{ width: "50%", height: "50%" }}
      />
      <h1> {eventName} </h1>
      <h3>{date}</h3>
      <h3>{address}</h3>
    </div>
  );
};

export default EventCard;
