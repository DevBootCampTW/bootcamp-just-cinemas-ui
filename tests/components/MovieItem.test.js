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

    wrapper.find('.card-title-movie').simulate('click');

    expect(history.push).toBeCalledWith("/movie/123");
  })

  it('should render list of movies with correct poster', () => {

    const movie = {
            title: "Test Movie",
            imdbRating: 0.1,
            poster: "poster.img",
            soundEffects: ['SDDS', 'RDX']
        }

    const node = shallow(<MovieItem movie={movie}/>)

    const elements = node.find('.card-img-top');
    expect(elements.prop('src')).toBe('poster.img');

})

it('should render list of movies with movie title', () => {

    const movie = {
        title: "Test Movie",
        imdbRating: 0.1,
        poster: "poster.img",
        soundEffects: ['SDDS', 'RDX']
    }

    const node = shallow(<MovieItem movie={movie}/>)

    const elements = node.find('.card-title-movie');
    expect(elements.prop('children')).toBe('Test Movie');

})

it('should render list of movies with movie details', () => {

    const movie = {
        title: "Test Movie",
        imdbRating: 0.1,
        poster: "poster.img",
        soundEffects: ['SDDS', 'RDX']
    }

    const node = shallow(<MovieItem movie={movie}/>)

    const elements = node.find('.card-text-movie');
    expect(elements.at(0).prop('children')).toBe('SDDS | RDX');
})
})