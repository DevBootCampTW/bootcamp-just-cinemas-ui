import React from 'react';
import {shallow} from 'enzyme';
import MovieItem from '../../src/components/MovieItem';

describe('MovieItem Component', ()=> {
  it('should invoke clickHandler onClick on Image', ()=> {
    const handleMovieClick = jest.fn();
    const movie = {
      imdbID: "123",
      soundEffects: []
    }
    const wrapper = shallow(<MovieItem handleMovieClick={handleMovieClick} movie={movie} />);

    // wrapper.find('img').simulate('click');

    // expect(handleMovieClick).toBeCalledWith("123");
    
  })
})