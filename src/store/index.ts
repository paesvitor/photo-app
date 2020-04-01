import { createStore, Store, compose, applyMiddleware } from "redux";
import { AlbumRootState } from "./modules/album/types";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import sagas from "./rootSagas";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface ApplicationState {
  album: AlbumRootState;
}

const logger = createLogger({});
const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store: Store<ApplicationState> = createStore(rootReducer, enhancer);

sagaMiddleware.run(sagas);

export default store;
