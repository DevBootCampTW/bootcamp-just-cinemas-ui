import React from 'react';
import MovieList from '../../src/components/MovieList';

jest.mock('../../src/components/MovieItem');
import MovieItem from '../../src/components/MovieItem';
import { shallow, mount } from 'enzyme';

describe("MovieList [Components]", () => {
    it('should call requestMovieList with now showing', () => {
        const requestMovieList = jest.fn();
        const state = {
            movies: [{title: "Test Movie", imdbID: "1"}],
            error: null,
            loading: true,
            language: 'English',
            location: 'Pune'
        }

        const node = shallow(<MovieList listingType={"NOW_SHOWING"} requestMovieList={requestMovieList} movies={state.movies} loading={state.loading} language={state.language} location={state.location}/>)

        expect(requestMovieList).toBeCalledWith("NOW_SHOWING", "English", "Pune");

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

      it('should render MovieItem component', () => {
        const requestMovieList = jest.fn();
        const state = {
            movies: [{title: "Test Movie", imdbID: "1"}],
            error: null,
            loading: false
        }

        const node = shallow(<MovieList requestMovieList={requestMovieList} movies={state.movies} loading={state.loading}/>)
               
        expect(node.find(MovieItem).exists()).toBeTruthy();
    })

    it('should render language dropdown', () => {
        const requestMovieList = jest.fn();
        const state = {
            movies: [{title: "Test Movie", imdbID: "1"}],
            error: null,
            loading: false
        }
        const wrapper = shallow(<MovieList requestMovieList={requestMovieList} movies={state.movies} loading={state.loading}/>);
        const lists = wrapper.find('SelectionFilter');
    
        expect(lists.length).toEqual(2);
      })

      it('should invoke languageChange handler', () => {
        const requestMovieList = jest.fn();
        const movies = [];
        const listingType = "NOW_SHOWING";
        const language="ENGLISH";
        const location="BANGALORE";

        const wrapper = shallow(<MovieList requestMovieList={requestMovieList} movies={movies} 
        listingType={listingType} language={language} location={location}/>);
        const lists = wrapper.find('SelectionFilter');
    
        const languageFilter = lists.at(0);
        languageFilter.prop('onFilterChange')({value: 'HINDI'});

        expect(requestMovieList).toHaveBeenLastCalledWith(listingType, 'HINDI', 'BANGALORE');
      })

      it('should invoke locationChange handler', () => {
        const requestMovieList = jest.fn();
        const movies = [];
        const listingType = "NOW_SHOWING";
        const language="ENGLISH";
        const location="BANGALORE";

        const wrapper = shallow(<MovieList requestMovieList={requestMovieList} movies={movies} 
        listingType={listingType} language={language} location={location}/>);
        const lists = wrapper.find('SelectionFilter');
    
        const locationFilter = lists.at(1);
        locationFilter.prop('onFilterChange')({value: 'PUNE'});

        expect(requestMovieList).toHaveBeenLastCalledWith(listingType, 'ENGLISH', 'PUNE');
      })

})