import React from 'react';
import {unmountComponentAtNode} from 'react-dom';
import {render, act, fireEvent} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import AlbumListCard from '../index';

describe('<AlbumListCard/> unit test', () => {
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

  it('Should redirect to /album/:id when clicking card', () => {
    const history = createMemoryHistory();

    act(() => {
      const {getByTestId} = render(
        <Router history={history}>
          <AlbumListCard album={{id: 1, title: 'Title'}} />
        </Router>,
        container,
      );

      fireEvent.click(getByTestId('link'));
    });
  });
});
