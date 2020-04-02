import React from 'react';
import {unmountComponentAtNode} from 'react-dom';
import {render} from '@testing-library/react';
import {Photo} from 'store/modules/photo/types';
import PhotoList from '../index';

describe('<PhotoList/> unit test', () => {
  let container = null;
  const photos: Photo[] = [
    {
      albumId: 1,
      id: 1,
      title: 'photo',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/600/92c952',
    },
  ];
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('Should render the correct amount of photos', () => {
    const {queryAllByTestId} = render(<PhotoList photos={photos} />, container);

    const result = queryAllByTestId('photo-container');

    expect(result).toHaveLength(photos.length);
  });
});
