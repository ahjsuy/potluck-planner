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
    <div>
      <li
        className="text-bubble"
        key={index}
        onMouseEnter={() => setShowX(true)}
        onMouseLeave={() => setShowX(false)}
      >
        {text}
        {showX && <CloseButton setStateArray={setStateArray} index={index} />}
      </li>
    </div>
  );
};

export default TextBubble;
