import {
  CLICK_ON_EMPLOYEE,
  ADD_COMMENT,
  ADD_NEW_EMPLOYEE,
  FETCH_SUCCESS
} from "../constants";

export const clickOnEmployee = id => ({
  type: CLICK_ON_EMPLOYEE,
  id
});

export const addComment = (id, input) => ({
  type: ADD_COMMENT,
  id,
  input
});

export const addNewEmployee = employForm => ({
  type: ADD_NEW_EMPLOYEE,
  employForm
});

export const fetchData = type => {
  return dispatch => {
    fetch("https://63d546b5-eb32-4094-a4a5-3e5f4c41f387.mock.pstmn.io/json")
      // fetch('http://localhost:3000/data.json')
      .then(response => response.json())
      .then(data => {
        console.log("мои данные : ", data);
        dispatch({
          type: FETCH_SUCCESS,
          data
        });
      });
  };
};
