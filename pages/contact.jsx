import { useState } from "react";
import { contact } from "../styles/contact.module.scss";

export default () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = () => {
    // alert(JSON.stringify(formState));
  };

  return (
    <form onSubmit={handleSubmit} className={contact}>
      <label>
        Name:
        <input
          placeholder="Enter name"
          id="name"
          value={formState.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          placeholder="Enter email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="message">Message:</label>
      <textarea
        fixed
        placeholder="Enter message"
        id="message"
        value={formState.message}
        onChange={handleChange}
      />
      <button>Send</button>
    </form>
  );
};
