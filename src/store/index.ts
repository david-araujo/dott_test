import { applyMiddleware, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../store/modules/rootReducer'
import { IRegion } from "./modules/regions/types";
import { IForecastInfos } from "./modules/Forecasts/types";
import rootSaga from "./modules/rootSaga";

export interface IState {
  regions: IRegion[],
  forecasts: IForecastInfos
}

const makeStore = () => {

  const sagaMidleware = createSagaMiddleware()

  const midldewares = [sagaMidleware]

  const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...midldewares)
  ));

  sagaMidleware.run(rootSaga)

  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });
