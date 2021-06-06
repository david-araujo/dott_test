import { all } from 'redux-saga/effects'
import regions from './Regions/sagas'
import forecasts from './Forecasts/sagas'

export default function* rootSaga () {
  return yield all([
    forecasts,
    regions
  ])
}
