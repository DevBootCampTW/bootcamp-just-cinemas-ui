import React from 'react';
import MovieList from '../../src/components/MovieList';
import { shallow } from 'enzyme';

describe("MovieList [Components]", () => {
    it('should call requestMovieList with now showing', () => {
        const requestMovieList = jest.fn();
        const state = {
            movies: [{title: "Test Movie", imdbID: "1"}],
            error: null,
            loading: true
        }

        const node = shallow(<MovieList listingType={"NOW_SHOWING"} requestMovieList={requestMovieList} movies={state.movies} loading={state.loading}/>)

        expect(requestMovieList).toBeCalledWith("NOW_SHOWING");

    })

    it('should render loading', () => {
        const requestMovieList = jest.fn();
        const state = {
            movies: [{title: "Test Movie", imdbID: "1"}],
            error: null,
            loading: true
        }

        const node = shallow(<MovieList requestMovieList={requestMovieList} movies={state.movies} loading={state.loading} />)
    
        const element = node.find('.loader');
        expect(element.text()).toContain("Loading...")
      })
    
      it('should render error', () => {
        const requestMovieList = jest.fn();
        const state = {
            movies: [{title: "Test Movie", imdbID: "1"}],
            error: "Error Loading Movies..",
            loading: true
        }
        const node = shallow(<MovieList requestMovieList={requestMovieList} movies={state.movies} error={state.error}/>)
    
        const element = node.find('.loadingError');
        expect(element.text()).toContain("Error Loading Movies")
      })

    //   it('should render MovieItem component', () => {
    //     const requestMovieList = jest.fn();
    //     const state = {
    //         movies: [{title: "Test Movie", imdbID: "1"}],
    //         error: null,
    //         loading: false
    //     }

    //     const node = shallow(<MovieList requestMovieList={requestMovieList} movies={state.movies} loading={state.loading}/>)
    //     // console.log(node.props())
    //     // const elements = node.find('.row').prop('children')[0].type['displayName'];    
    //     const elements = node.find('.row').prop('children')[0];   
    //     console.log(elements);         
    //     expect(elements).toBe(state.movies[0]);
    // })

})