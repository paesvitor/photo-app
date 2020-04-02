import {all} from 'redux-saga/effects';

import albumSagas from './modules/album/sagas';

export default function* rootSaga() {
  yield all([albumSagas()]);
}
