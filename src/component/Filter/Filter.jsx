import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input type="text" name="filter" value={value} onChange={onChange} />
    );
  }
}
