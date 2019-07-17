import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { clickOnEmployee } from "../../actions/actionCreator";
import AddNewEmplBtn from "../AddNewEmplBtn/AddNewEmplBtn";
import { Link } from "react-router-dom";

class EmployeeSlider extends Component {
  render() {
    const { list, clickOnEmployee } = this.props;

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
      // arrows: true
    };
    return (
      <>
        <Slider {...settings}>
          {list.map(el => (
            <Link to={`/${el.id}`}>
              <div
                key={el.id}
                id={el.id}
                className="carousel"
                onClick={() => clickOnEmployee(el.id)}
              >
                <img className="carousel__img" src={el.avatar} alt={el.name} />
              </div>
            </Link>
          ))}
        </Slider>
        <AddNewEmplBtn />
      </>
    );
  }
}

export default connect(
  state => ({
    list: state.employees.data
  }),
  { clickOnEmployee }
)(EmployeeSlider);
