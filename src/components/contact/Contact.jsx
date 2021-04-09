import React from "react";
import "./contact.scoped.scss";

export default () => {
  return (
    <form className="contact">
      {/* <label htmlFor="name">Name: </label>
      <input placeholder="Enter name" id="name" />
      <label htmlFor="email">Email: </label>
      <input placeholder="Enter email" type="email" id="email" />
      <label htmlFor="message">Message:</label>
      <textarea placeholder="Enter message" id="message" />
      <button>Send</button> */}
      <label>
        Name:
        <input placeholder="Enter name" id="name" />
      </label>
      <label>
        Email:
        <input placeholder="Enter email" type="email" id="email" />
      </label>
      <label htmlFor="message">Message:</label>
      <textarea placeholder="Enter message" id="message" />
      <button>Send</button>
    </form>
  );
};
