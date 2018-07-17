import navBar from '../../src/reducers/navBar';

describe('NavBar reducer', ()=> {

  it('should return same state', ()=> {
    const action = {type: "XYZ", payload: "UPCOMING"};
    const newState = navBar({}, action);
    
    expect(newState).toEqual({});
  })

  it('should set activeTab in the state', ()=> {
    const action = {type: "SET_ACTIVE_TAB", payload: "UPCOMING"};
    const newState = navBar(undefined, action);
    
    expect(newState).toEqual({activeTab: "UPCOMING"});
  })
})