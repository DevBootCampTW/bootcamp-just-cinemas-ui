import FourOhFour from '../../src/pages/FourOhFour';
import React from 'react';
import {shallow} from 'enzyme';

describe('FourOhFour page', ()=> {
  it('should render 404 page', () => {
    const wrapper = shallow(<FourOhFour />);

    expect(wrapper.html()).toContain('Oh no!! Page not found')
  })
})