import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";

// ! Components
import ContactForm from "./component/ContactForm/ContactForm";
import Filter from "./component/Filter/Filter";
import ContactList from "./component/ContactList/ContactList";

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
        <ContactForm onSubmit={this.handleSubmit} onChange={this.handleInput} number={this.state.number} name={this.state.name}/>
        <h2>Contacts</h2>
        {/* <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}:{number}
            </li>
          ))}
        </ul> */}
        <h2>Find contaacts by name</h2>
        <ContactList filteredContacts={filteredContacts}/>
        <Filter value={this.state.filter} onChange={this.handleFilter}/>
      </>
    );
  }
}

export default App;
