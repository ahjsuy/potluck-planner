// import { useState, Dispatch, SetStateAction } from "react";
import CategoryRow from "./categoryRow";
import { v4 as uuidv4 } from "uuid";
import { Dishes } from "../types";

interface Props {
  header: string;
  dishes: Dishes[];
  setDishes: React.Dispatch<React.SetStateAction<Dishes[]>>;
}

const Category = ({ header, setDishes, dishes }: Props) => {
  // const [categoryArray, setCategoryArray] = useState([<CategoryRow />]);
  // const [categoryDishes, setCategoryDishes] = useState<Dishes[]>([]);

  const handleAddAnotherRow = () => {
    const newDish = {
      id: uuidv4(),
      dishname: "",
      dishguest: "",
      dishportion: "",
      category: header,
    };
    if (!dishes) {
      setDishes([newDish]);
    } else {
      setDishes((prev) => [...prev, newDish]);
    }
    console.log(dishes);
  };

  return (
    <div style={{ padding: "1em" }}>
      <div>
        <div>
          <h1 className="lisu-bosa-regular">
            <img className="vine" src="/assets/vine-left.svg"></img>
            {header}
            <img
              className="vine flip-horizontally"
              src="/assets/vine-left.svg"
            ></img>
          </h1>
        </div>
        <hr className="half-hr"></hr>
      </div>
      <div
        className="flex-row lisu-bosa-regular"
        style={{ textAlign: "center", gap: "3em" }}
      >
        <h3 style={{ flexGrow: "1", minWidth: "15vw" }}>Dishes</h3>
        <h3 style={{ flexGrow: "1", minWidth: "20vw" }}>Person Assigned</h3>
        <h3 style={{ flexGrow: "1", minWidth: "5vw", textAlign: "left" }}>
          Portions
        </h3>
      </div>
      <div>
        <ul
          className="flex-column"
          style={{
            display: "flex",
            listStyleType: "none",
            gap: "1em",
            // paddingLeft: "0",
            placeSelf: "center",
            placeContent: "center",
          }}
        >
          {dishes.map((dish, i) => (
            <div>
              <CategoryRow
                dish={dish}
                setStateArray={setDishes}
                index={i}
                key={dish.id}
              />
            </div>
          ))}
          {/* {categoryArray.map((item, i) => (
            <div className="flex-column">
              <li key={i}>{item}</li>
            </div>
          ))} */}
        </ul>
      </div>
      <button
        className="orange-button lisu-bosa-regular"
        style={{ margin: "1em" }}
        onClick={handleAddAnotherRow}
      >
        Add another?
      </button>
    </div>
  );
};

export default Category;
