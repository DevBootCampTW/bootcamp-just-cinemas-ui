import React from 'react';
import {shallow} from 'enzyme';
import {MovieItem} from '../../src/components/MovieItem';

describe('MovieItem Component', ()=> {
  it('should invoke clickHandler onClick on Image', ()=> {
    const movie = {
      imdbID: "123",
      soundEffects: []
    }
    const push = jest.fn();
    const history = {
      push
    }
    const wrapper = shallow(<MovieItem movie={movie} history={history} />);

    wrapper.find('img').simulate('click');

    expect(history.push).toBeCalledWith("/movie/123");
  })

  it('should invoke clickHandler onClick on title', ()=> {
    const movie = {
      imdbID: "123",
      soundEffects: []
    }
    const push = jest.fn();
    const history = {
      push
    }
    const wrapper = shallow(<MovieItem movie={movie} history={history} />);

    wrapper.find('.card-title').simulate('click');

    expect(history.push).toBeCalledWith("/movie/123");
  })
})