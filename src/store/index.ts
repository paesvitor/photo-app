import { createStore, Store, compose, applyMiddleware } from "redux";
import { AlbumRootState } from "./modules/album/types";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";

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
const middlewares = [logger];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store: Store<ApplicationState> = createStore(rootReducer, enhancer);

export default store;
