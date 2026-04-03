import React, { Component } from "react";

export default class ContactList extends Component {
  render() {
    const { filteredContacts } = this.props;
    return (
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}:{number}
          </li>
        ))}
      </ul>
    );
  }
}
