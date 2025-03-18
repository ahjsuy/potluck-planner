interface Props<T> {
  setStateArray?: React.Dispatch<React.SetStateAction<T[]>>;
  index?: number;
}

const CloseButton = <T,>({ setStateArray, index }: Props<T>) => {
  const handleClick = () => {
    if (typeof index === "number" && setStateArray) {
      setStateArray((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1),
      ]);
    }
    console.log("removed index, ", index);
  };
  return (
    <button className="add-button" onClick={handleClick}>
      <span
        // style={{ placeSelf: "center" }}
        className="material-symbols-outlined"
      >
        close
      </span>
    </button>
  );
};

export default CloseButton;
