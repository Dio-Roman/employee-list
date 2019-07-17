import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewEmployee } from "../../actions/actionCreator";
import "./style.css";

class NewEmployeeForm extends Component {
  state = {
    id: "",
    name: "",
    surname: "",
    avatar:
      "http://www.topglobus.ru/forum/images/avatars/gallery/cerno-bile/0740.jpg",
    address: {
      street: "",
      suite: "",
      city: ""
    },
    company: {
      position: ""
    },
    comments: []
  };

  componentDidMount = () => {
    this.setId();
  };

  setId = () => {
    const { list } = this.props;
    let emplId = list.length + 1;
    this.setState({
      id: emplId
    });
  };

  handleInput = ({ target: { value, name } }) => {
    if (name == "position") {
      this.setState({
        company: { ...this.state.company, [name]: value }
      });
    } else if (name == "city" || name == "street" || name == "suite") {
      this.setState({
        address: { ...this.state.address, [name]: value }
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  handleAdd = e => {
    e.preventDefault();
    const { addNewEmployee, list } = this.props;

    addNewEmployee(this.state);

    this.setState({
      id: list.length + 2,
      name: "",
      surname: "",
      avatar:
        "http://www.topglobus.ru/forum/images/avatars/gallery/cerno-bile/0740.jpg",
      address: {
        street: "",
        suite: "",
        city: ""
      },
      company: {
        position: ""
      },
      comments: []
    });
  };

  render() {
    const { list } = this.props;

    return (
      <div className="add-new-employee">
        <h2 className="add-new-employee__title-form">Add new employee</h2>
        <form className="add-new-employee__form">
          <label>
            <input
              autoFocus
              className="add-new-employee__input"
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInput}
            />
          </label>
          <label>
            <input
              className="add-new-employee__input"
              type="text"
              name="surname"
              placeholder="Surname"
              value={this.state.surname}
              onChange={this.handleInput}
            />
          </label>
          <label>
            <input
              className="add-new-employee__input"
              type="text"
              name="position"
              placeholder="Position"
              value={this.state.company.position}
              onChange={this.handleInput}
            />
          </label>
          <label>
            <input
              className="add-new-employee__input"
              type="telephone"
              name="avatar"
              placeholder="Avatar"
              value={this.state.avatar}
              onChange={this.handleInput}
            />
          </label>
          <label>
            <p>Address:</p>
            <input
              className="add-new-employee__input"
              type="text"
              name="city"
              placeholder="City"
              value={this.state.address.city}
              onChange={this.handleInput}
            />
            <input
              className="add-new-employee__input"
              type="text"
              name="street"
              placeholder="Street"
              value={this.state.address.street}
              onChange={this.handleInput}
            />
            <input
              className="add-new-employee__input"
              type="text"
              name="suite"
              placeholder="Suite"
              value={this.state.address.suite}
              onChange={this.handleInput}
            />
          </label>

          <button
            className="add-new-employee__send-btn"
            onClick={this.handleAdd}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    list: state.employees.data
  }),
  { addNewEmployee }
)(NewEmployeeForm);
