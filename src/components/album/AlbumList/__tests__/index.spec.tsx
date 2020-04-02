import React from 'react';
import {unmountComponentAtNode} from 'react-dom';
import {render, act} from '@testing-library/react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {albumActions} from 'store/modules/album/actions';
import reducer from 'store/rootReducer';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import AlbumList from '../index';

describe('<AlbumList/> unit test', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it('Should dispatch the correct action on render', () => {
    const mockStore = createStore(reducer);
    mockStore.dispatch = jest.fn();

    act(() => {
      render(
        <Provider store={mockStore}>
          <AlbumList />
        </Provider>,
        container,
      );
    });

    expect(mockStore.dispatch).toHaveBeenCalledWith(
      albumActions.list.request(),
    );
  });

  it('Should render the correct number of childrens using redux state', () => {
    const mockStore = createStore(reducer, {
      album: {list: {data: [{id: 1, title: 'test'}]}},
    });

    const history = createMemoryHistory();

    mockStore.dispatch = jest.fn();

    act(() => {
      const {queryAllByTestId} = render(
        <Provider store={mockStore}>
          <Router history={history}>
            <AlbumList />
          </Router>
        </Provider>,
        container,
      );

      const result = queryAllByTestId('album');

      expect(result).toHaveLength(1);
    });
  });
});
