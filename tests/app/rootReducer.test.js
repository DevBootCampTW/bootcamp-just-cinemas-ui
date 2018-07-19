import rootReducer from '../../src/app/rootReducer';

jest.mock('../../src/reducers/movieList');
import movieListReducer from '../../src/reducers/movieList';

jest.mock('../../src/reducers/movieDetails');
import movieDetails from '../../src/reducers/movieDetails';

jest.mock('../../src/reducers/navBar');
import navBar from '../../src/reducers/navBar';

describe('rootReducer', ()=> {
  it('should', ()=> {
    movieListReducer.mockImplementation(() => {
      return ({})
    })

    rootReducer();

    expect(movieListReducer).toBeCalled();
    expect(movieDetails).toBeCalled();
    expect(navBar).toBeCalled();
  })
})