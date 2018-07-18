import { SET_ACTIVE_TAB } from "../actions/navBar";

const navBarReducer = (state = {}, action) => {
  switch(action.type){
    case SET_ACTIVE_TAB: return {
      ...state,
      activeTab: action.payload
    }

    default: return state;
  }
}

export default navBarReducer;