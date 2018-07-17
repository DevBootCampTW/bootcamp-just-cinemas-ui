import * as actions from '../../src/actions/navBar';

describe('NavBar actions', ()=> {
  it('should return setActiveTab action', ()=> {
    const action = actions.setActiveTab("THE_TAB");
    expect(action).toEqual({type: "SET_ACTIVE_TAB", payload: "THE_TAB"});
  })
})