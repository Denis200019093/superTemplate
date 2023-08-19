import { useState, FormEvent, ChangeEvent } from "react";

import "./Form.scss";

const Form = () => {
  const [values, setValues] = useState({
    email: "",
  });

  const sendForm = (e: FormEvent) => {
    e.preventDefault();

    alert(`Твій email ${values.email}`);

    setValues({ email: "" });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="my-form">
      <form onSubmit={sendForm}>
        <input
          value={values.email}
          onChange={handleInputChange}
          type="email"
          name="email"
          placeholder="Email"
        />
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default Form;
