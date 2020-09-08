import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toISOString().slice(0, 10),
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleClick = () => {
    console.log("dodaj");
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: new Date().toISOString().slice(0, 10),
        });
      }
    } else {
      alert("Za krótka nazwa.");
    }
  };

  render() {
    const minDate = new Date().toISOString().slice(0, 10);
    let maxDate = minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Dodaj zadanie"
          value={this.state.text}
          onChange={this.handleText}
        />
        <input
          type="checkbox"
          id="important"
          checked={this.state.checked}
          onChange={this.handleCheckbox}
        />
        <label htmlFor="important">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy zrobić</label>
        <input
          type="date"
          id="date"
          value={this.state.date}
          min={minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
