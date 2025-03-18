import Dish from "../models/dishesModel";
import CategoryInput from "./categoryInput";
import CloseButton from "./closeButton";
import TypeButton from "./typeButton";
import { useEffect, useState } from "react";
import { Dishes } from "../types";

interface Props {
  setStateArray: React.Dispatch<React.SetStateAction<Dishes[]>>;
  index: number;
  noCloseButton?: boolean;
  dish: Dishes;
}

const CategoryRow = ({ setStateArray, noCloseButton, index, dish }: Props) => {
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
      <div style={{ minWidth: "15vw", flexGrow: "1" }}>
        <CategoryInput
          placeholder={dish.dishname}
          propToUpdate="dishname"
          index={index}
          setStateArray={setStateArray}
        />
        {/* <input
          value={dishValue}
          onChange={(e) => setDishValue(e.target.value)}
        /> */}
      </div>
      <div
        style={{
          flexGrow: "1",
          minWidth: "20vw",
          maxWidth: "25vw",
          paddingLeft: "0.5em",
        }}
      >
        {/* <TypeButton placeholderText="John Smith" noAddButton={true} /> */}
        <CategoryInput
          placeholder={dish.dishguest}
          propToUpdate="dishguest"
          index={index}
          setStateArray={setStateArray}
        />
      </div>
      <div style={{ flexGrow: "1", minWidth: "5vw", paddingLeft: "0.5em" }}>
        {/* <TypeButton placeholderText="8 servings" noAddButton={true} /> */}
        <CategoryInput
          placeholder={dish.dishportion}
          propToUpdate="dishportion"
          index={index}
          setStateArray={setStateArray}
        />
      </div>
      <div style={{}}>
        {!noCloseButton && (
          <CloseButton setStateArray={setStateArray} index={index} />
        )}
      </div>
    </div>
  );
};

export default CategoryRow;
