import React, { Component } from "react";
import NewEmployeeForm from "../NewEmployeeForm/NewEmployeeForm";
import "./style.css";

class AddNewEmplBtn extends Component {
  state = {
    formVisible: false
  };

  handleClick = () => {
    this.setState({
      formVisible: !this.state.formVisible
    });
  };

  render() {
    const { formVisible } = this.state;
    return (
      <>
        {formVisible ? (
          <button className="add-new-empl-btn" onClick={this.handleClick}>
            Cancel
          </button>
        ) : (
          <button className="add-new-empl-btn" onClick={this.handleClick}>
            Add new employee
          </button>
        )}
        {formVisible && <NewEmployeeForm />}
      </>
    );
  }
}

export default AddNewEmplBtn;
