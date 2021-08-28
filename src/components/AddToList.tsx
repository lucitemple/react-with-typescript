import React, { useState } from "react";

const AddToList = (): JSX.Element => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      ></input>
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      ></input>
      <input
        type="text"
        placeholder="Image URL"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
        name="img"
      ></input>
      <input
        type="text"
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default AddToList;
