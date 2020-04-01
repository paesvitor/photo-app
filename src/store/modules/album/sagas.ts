import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { albumActions } from "./actions";
import { AlbumTypes } from "./types";

function* list() {
  try {
    const response = yield call(api.get, "/albums");

    yield put(albumActions.list.success(response.data));
  } catch (error) {
    yield put(albumActions.list.failure());
  }
}

export default function* root() {
  yield takeLatest(AlbumTypes.LIST.REQUEST, list);
}
