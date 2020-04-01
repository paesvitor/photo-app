const entity = "Album";

// Actions
export const AlbumTypes = {
  LIST: {
    REQUEST: `@${entity}/list/REQUEST`,
    FAILURE: `@${entity}/list/FAILURE`,
    SUCCESS: `@${entity}/list/SUCCESS`
  }
};

// Data
export interface Album {
  id: number;
  title: string;
}

// State
export interface AlbumListState {
  readonly data: Album[];
  readonly loading: boolean;
  readonly error: boolean;
}

// Root State
export interface AlbumRootState {
  list: AlbumListState;
}
