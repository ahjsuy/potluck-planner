import { useEffect, useState } from "react";

interface Dishes {
  id: string;
  dishName: string;
  personAssigned: string;
  portions: string;
}

interface Props {
  propToUpdate: keyof Dishes;
  index: number;
  setStateArray?: React.Dispatch<React.SetStateAction<Dishes[]>>;
}

const CategoryInput = ({ propToUpdate, index, setStateArray }: Props) => {
  const [value, setValue] = useState("");

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
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default CategoryInput;
