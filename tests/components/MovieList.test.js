import React from 'react';
import MovieList from '../../src/components/MovieList';
import { shallow } from 'enzyme';

describe("MovieList [Components]", () => {
    it('should call requestMovieList', () => {
        const requestMovieList = jest.fn();
        const movies = [{title: "Test Movie"}]

        const node = shallow(<MovieList requestMovieList={requestMovieList} movies={movies}/>)

        expect(requestMovieList).toBeCalled();

    })
})