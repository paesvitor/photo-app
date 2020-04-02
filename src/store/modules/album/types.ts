import {Photo} from '../photo/types';

const entity = 'Album';

// Actions
export const AlbumTypes = {
  LIST: {
    REQUEST: `@${entity}/list/REQUEST`,
    FAILURE: `@${entity}/list/FAILURE`,
    SUCCESS: `@${entity}/list/SUCCESS`,
  },
  SHOW: {
    REQUEST: `@${entity}/show/REQUEST`,
    FAILURE: `@${entity}/show/FAILURE`,
    SUCCESS: `@${entity}/show/SUCCESS`,
  },
};

// Data
export interface Album {
  id: number;
  title: string;
}

// States
export interface AlbumListState {
  readonly data: Album[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface AlbumShowState {
  readonly data: {
    album: Album;
    photos: Photo[];
  };
  readonly loading: boolean;
  readonly error: boolean;
}

// Root State
export interface AlbumRootState {
  list: AlbumListState;
  show: AlbumShowState;
}
