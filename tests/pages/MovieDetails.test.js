import React from 'react';
import { shallow } from 'enzyme';
import MovieDetails from '../../src/pages/MovieDetails';
import MovieStills from '../../src/components/MovieStills'

describe('MovieDetailsPage', () => {
  it('should call getMovieDetails', () => {
    const getMovieDetails = jest.fn();
    const match = {
      params: {
        id: '123'
      }
    }

    const node = shallow(<MovieDetails getMovieDetails={getMovieDetails} match={match} />)

    expect(getMovieDetails).toBeCalledWith('123');
  })

  it('should not call getMovieDetails', () => {
    const getMovieDetails = jest.fn();
    const match = {
      params: {
        id: null
      }
    }

    const node = shallow(<MovieDetails getMovieDetails={getMovieDetails} match={match} />)

    expect(getMovieDetails).not.toBeCalled();
  })

  it('should render loading', () => {
    const match = {
      params: {
        id: '123'
      }
    }
    const node = shallow(<MovieDetails getMovieDetails={() => { }} match={match} loading={true} />)

    const element = node.find('.loader');
    expect(element.text()).toContain("Loading...")

  })

  it('should render error', () => {
    const match = {
      params: {
        id: '123'
      }
    }
    const error = { errorMessage: "Something went wrong" };
    const node = shallow(<MovieDetails getMovieDetails={() => { }} match={match} error={error} />)

    const element = node.find('.loadingError');
    expect(element.text()).toContain("Error loading movie details")

  })

  it('should render MovieStills component', () => {
    const match = {
      params: {
        id: '123'
      }
    }

    const movie = {
      stills: ["1.jpg", "2.jpg"],
      soundEffects: []
    }
    const node = shallow(<MovieDetails getMovieDetails={() => { }} match={match} movie={movie} />)

    const elements = node.find('MovieStills');
    expect(elements.length).toBe(1);
  })
})
