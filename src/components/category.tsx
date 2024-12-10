// import { useState, Dispatch, SetStateAction } from "react";
import CategoryRow from "./categoryRow";
import { v4 as uuidv4 } from "uuid";

interface Dishes {
  id: string;
  dishName: string;
  personAssigned: string;
  portions: string;
}

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
      dishName: "",
      personAssigned: "",
      portions: "0",
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
        <h2>{header}</h2>
      </div>
      <div className="flex-row" style={{ gap: "1em" }}>
        <h3 style={{ minWidth: "30vw", textAlign: "left" }}>Dishes</h3>
        <h3 style={{ minWidth: "30vw", textAlign: "left" }}>Person Assigned</h3>
        <h3 style={{ minWidth: "10vw", textAlign: "left" }}>Portions</h3>
      </div>
      <div>
        <ul
          className="flex-column"
          style={{
            display: "flex",
            listStyleType: "none",
            gap: "0.25em",
          }}
        >
          {dishes.map((dish, i) => (
            <CategoryRow setStateArray={setDishes} index={i} key={dish.id} />
          ))}
          {/* {categoryArray.map((item, i) => (
            <div className="flex-column">
              <li key={i}>{item}</li>
            </div>
          ))} */}
        </ul>
      </div>
      <button onClick={handleAddAnotherRow}>Add another?</button>
    </div>
  );
};

export default Category;
