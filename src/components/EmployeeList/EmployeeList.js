import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions/actionCreator";
import Employee from "../Employee/Employee";
import PropTypes from "prop-types";
import "./style.css";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  static propTypes = {
    fetchData: PropTypes.func,
    list: PropTypes.array
  };

  render() {
    const { list } = this.props;
    return (
      <>
        <h1 className="list-h1">The List of Employees</h1>
        <ul className="list">
          {list.map(el => (
            <li className="list-item" key={el.id}>
              <Employee
                id={el.id}
                name={el.name}
                surname={el.surname}
                src={el.avatar}
                position={el.company.position}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default connect(
  state => ({
    list: state.employees.data
  }),
  { fetchData }
)(EmployeeList);
