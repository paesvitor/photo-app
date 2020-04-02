import {Reducer} from 'redux';
import {AlbumTypes, AlbumShowState} from '../types';

const INITIAL_STATE: AlbumShowState = {
  data: {
    album: {
      id: 0,
      title: '',
    },
    photos: [],
  },
  error: false,
  loading: false,
};

const reducer: Reducer<AlbumShowState> = (
  state = INITIAL_STATE,
  action: any,
) => {
  switch (action.type) {
    case AlbumTypes.SHOW.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AlbumTypes.SHOW.FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case AlbumTypes.SHOW.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
