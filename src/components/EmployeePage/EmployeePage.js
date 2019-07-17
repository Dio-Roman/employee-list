import React from "react";
import { connect } from "react-redux";
import AddComment from "../AddComment/AddComment";
import BackBtn from '../BackBtn/BackBtn';
import EmployeeSlider from "../Carousel/Carousel";
import "./style.css";

const EmployeePage = ({ list }) => {
  let lastFiveComments = list.data[list.choosenId - 1].comments.filter(
    el =>
      list.data[list.choosenId - 1].comments.indexOf(el) >=
      list.data[list.choosenId - 1].comments.length - 5
  );
  return (
    <>
      <EmployeeSlider />
      <BackBtn/>
      <div className="employee-page">
        <main className="employee-page__info">
          <img
            className="employee-page__img"
            height="90"
            width="90"
            src={list.data[list.choosenId - 1].avatar}
            alt={list.data[list.choosenId - 1].name}
          />
          <p>
            <span className="employee-page__span">Name:</span>{" "}
            {list.data[list.choosenId - 1].name}
          </p>
          <p>
            <span className="employee-page__span">Surname:</span>{" "}
            {list.data[list.choosenId - 1].surname}
          </p>
          <p>
            <span className="employee-page__span">Position:</span>{" "}
            {list.data[list.choosenId - 1].company.position}
          </p>
          <p>
            <span className="employee-page__span">Address:</span>{" "}
            {list.data[list.choosenId - 1].address.city},{" "}
            {list.data[list.choosenId - 1].address.street},{" "}
            {list.data[list.choosenId - 1].address.suite}
          </p>
        </main>

        <h2 className="employee-page__comments-h2">The Last 5 Comments</h2>
        <ul>
          {lastFiveComments.map(el => (
            <li>
              <h4>{el.title}</h4>
              <p>{el.body}</p>
            </li>
          ))}
        </ul>
        <AddComment id={list.data[list.choosenId - 1].id} />
      </div>
    </>
  );
};

export default connect(state => ({
  list: state.employees
}))(EmployeePage);
