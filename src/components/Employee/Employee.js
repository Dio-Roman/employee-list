import React, { Component } from "react";
import "./style.css";
import { clickOnEmployee } from "../../actions/actionCreator";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Employee extends Component {
  render() {
    const { id, src, name, surname, position, clickOnEmployee } = this.props;

    return (
      <Link to={`/${id}`}>
        <div
          className="employee-item"
          id={id}
          onClick={() => clickOnEmployee(id)}
        >
          <img
            className="employee-item__ava"
            height="50"
            width="50"
            src={src}
            alt={name}
          />
          <p className="employee-item__p">Name: {name}</p>
          <p className="employee-item__p">Surname: {surname}</p>
          <p className="employee-item__p">Position: {position}</p>
        </div>
      </Link>
    );
  }
}

export default connect(
  null,
  { clickOnEmployee }
)(Employee);
