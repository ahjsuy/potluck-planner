import { useState, FormEvent } from "react";
import AddButton from "./addButton";

interface Props {
  classNames?: string;
  setStateArray?: React.Dispatch<React.SetStateAction<string[]>>;
  placeholderText?: string;
  noAddButton?: boolean;
}

const TypeButton = ({
  classNames,
  setStateArray,
  placeholderText,
  noAddButton,
}: Props) => {
  const [value, setValue] = useState(placeholderText || "Nuts");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (setStateArray && e.currentTarget && value.trim())
      setStateArray((prev) => [...prev, value]);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <input
          className={`form-control ${classNames}`}
          type="text"
          aria-label="Add button"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ width: `${value.length + 3}ch` }}
        />
        {!noAddButton && <AddButton />}
      </form>
    </div>
  );
};

export default TypeButton;
