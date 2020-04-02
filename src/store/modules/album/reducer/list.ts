import {Reducer} from 'redux';
import {AlbumListState, AlbumTypes} from '../types';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<AlbumListState> = (
  state = INITIAL_STATE,
  action: any,
) => {
  switch (action.type) {
    case AlbumTypes.LIST.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AlbumTypes.LIST.FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case AlbumTypes.LIST.SUCCESS:
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
