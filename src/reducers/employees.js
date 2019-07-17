import {
  CLICK_ON_EMPLOYEE,
  ADD_COMMENT,
  ADD_NEW_EMPLOYEE,
  FETCH_SUCCESS
} from "../constants";

let initialState = {
  data: [],
  choosenId: 1
};

const employees = (
  state = initialState,
  { type, id, input, employForm, data }
) => {
  switch (type) {
    case CLICK_ON_EMPLOYEE:
      let newId = state.data.filter(el => el.id == id);
      return {
        ...state,
        choosenId: newId[0].id
      };

    case ADD_COMMENT:
      let arrInput = [input];
      return {
        ...state,
        data: state.data.map(el => {
          if (el.id == id) {
            el.comments = [...el.comments, ...arrInput];
          }
          return el;
        })
      };

    case ADD_NEW_EMPLOYEE:
      return {
        ...state,
        data: [...state.data].concat(employForm)
      };

    case FETCH_SUCCESS:
      console.log("из редюсера", data);
      return {
        ...state,
        data: [...data]
      };

    default:
      return state;
  }
};

export default employees;
