import React from 'react';
import { shallow } from 'enzyme';
import MovieDetails from '../../pages/MovieDetails';

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
})
