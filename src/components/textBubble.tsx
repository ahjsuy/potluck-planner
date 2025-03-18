import { useState } from "react";
import CloseButton from "./closeButton";

interface Props {
  text: String;
  index: number;
  setStateArray?: React.Dispatch<React.SetStateAction<string[]>>;
}

const TextBubble = ({ text, index, setStateArray }: Props) => {
  const [showX, setShowX] = useState(false);

  return (
    // <div
    //   className="flex-row"
    //   style={{
    //     textAlign: "center",
    //     alignItems: "center",
    //     minHeight: "100%",
    //   }}
    // >
    <li
      className="text-bubble"
      key={index}
      onMouseEnter={() => setShowX(true)}
      onMouseLeave={() => setShowX(false)}
      style={{
        minHeight: "100%",
        placeContent: "center",
        margin: "auto",
        justifyContent: "space-between",
        padding: "0 0 0 .25em",
        display: "flex",
        flexDirection: "row",
        borderRadius: "0.5em",
      }}
    >
      <div
        className="flex-row"
        style={{
          margin: "0 1em",
          width: "100%",
          fontSize: "1.125em",
        }}
      >
        {text}
      </div>

      <div style={{}}>
        {true && <CloseButton setStateArray={setStateArray} index={index} />}
      </div>
    </li>
    // </div>
  );
};

export default TextBubble;
