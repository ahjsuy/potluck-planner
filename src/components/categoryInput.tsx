import { useEffect, useState } from "react";
import { Dishes } from "../types";

interface Props {
  placeholder: string;
  propToUpdate: keyof Dishes;
  index: number;
  setStateArray?: React.Dispatch<React.SetStateAction<Dishes[]>>;
}

const CategoryInput = ({
  placeholder,
  propToUpdate,
  index,
  setStateArray,
}: Props) => {
  const [value, setValue] = useState(placeholder ?? "");

  useEffect(() => {
    if (typeof index === "number" && setStateArray) {
      setStateArray((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, [propToUpdate]: value } : item
        )
      );
    }
    console.log("Changing dish value for index: ", index);
  }, [value]);

  return (
    <div>
      <input
        className="line-input lisu-bosa-regular"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default CategoryInput;
