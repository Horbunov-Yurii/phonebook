import React, { Component } from "react";

export default class ContactForm extends Component {
  render() {
    const { onSubmit, onChange, number, name } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            onChange={onChange}
            value={name}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label>
          Number:
          <input
            type="tel"
            name="number"
            onChange={onChange}
            value={number}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
