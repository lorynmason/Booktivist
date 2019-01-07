import { rootReducer } from '../index';
import { createStore } from 'redux';
import { resultsReducer } from '../resultsReducer';
import { infoReducer } from '../infoReducer'
import { messageReducer } from '../messageReducer';
import { bookListReducer } from '../bookListReducer';
import { isLoadingReducer } from '../isLoadingReducer';


describe('rootReducer', () => {
  let store = createStore(rootReducer);
  it('should show initial state of results when resultsReducer handles an action', () => {
    expect(store.getState().results).toEqual(resultsReducer([], {}));
  });

  it('should show initial state of info when infoReducer handles an action', () => {
    expect(store.getState().info).toEqual(infoReducer({}, {}));
  });

  it('should show initial state of bookList when bookListReducer handles an action', () => {
    expect(store.getState().bookList).toEqual(bookListReducer([], {}));
  });

  it('should show initial state of message when messageReducer handles an action', () => {
    expect(store.getState().message).toEqual(messageReducer('', {}));
  });

  it('should show initial state of isLoading when isLoadingReducer handles an action', () => {
    expect(store.getState().isLoading).toEqual(isLoadingReducer(false, {}));
  });
});