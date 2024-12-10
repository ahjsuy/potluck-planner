import CategoryInput from "./categoryInput";
import CloseButton from "./closeButton";
import TypeButton from "./typeButton";
import { useEffect, useState } from "react";

interface Dishes {
  id: string;
  dishName: string;
  personAssigned: string;
  portions: string;
}

interface Props {
  setStateArray: React.Dispatch<React.SetStateAction<Dishes[]>>;
  index: number;
  noCloseButton?: boolean;
}

const CategoryRow = ({ setStateArray, noCloseButton, index }: Props) => {
  // const [dishValue, setDishValue] = useState("");

  // useEffect(() => {
  //   if (index && setStateArray) {
  //     setStateArray((prev) =>
  //       prev.map((item, i) =>
  //         i === index ? { ...item, dishName: dishValue } : item
  //       )
  //     );
  //   }
  //   console.log("Changing dish value!");
  // }, [setDishValue]);

  return (
    <div className="flex-row" style={{ gap: "1em" }}>
      <div style={{ minWidth: "30vw", paddingLeft: "0.5em" }}>
        <CategoryInput
          propToUpdate="dishName"
          index={index}
          setStateArray={setStateArray}
        />
        {/* <input
          value={dishValue}
          onChange={(e) => setDishValue(e.target.value)}
        /> */}
      </div>
      <div style={{ minWidth: "30vw", maxWidth: "25vw", paddingLeft: "0.5em" }}>
        {/* <TypeButton placeholderText="John Smith" noAddButton={true} /> */}
        <CategoryInput
          propToUpdate="personAssigned"
          index={index}
          setStateArray={setStateArray}
        />
      </div>
      <div style={{ minWidth: "10vw", paddingLeft: "0.5em" }}>
        {/* <TypeButton placeholderText="8 servings" noAddButton={true} /> */}
        <CategoryInput
          propToUpdate="portions"
          index={index}
          setStateArray={setStateArray}
        />
      </div>
      {!noCloseButton && (
        <CloseButton setStateArray={setStateArray} index={index} />
      )}
    </div>
  );
};

export default CategoryRow;
