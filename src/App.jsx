import { Component } from "react";
import { nanoid } from "nanoid";

import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      number: "",
    }));
  };

  handleInput = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleFilter = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              onChange={this.handleInput}
              value={this.state.name}
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
              onChange={this.handleInput}
              value={this.state.number}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}:{number}
            </li>
          ))}
        </ul>

        <h2>Find contaacts by name</h2>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleFilter}
        />
      </>
    );
  }
}

export default App;
