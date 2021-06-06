import { AxiosResponse } from 'axios'
import { all, takeLatest, call, put } from 'redux-saga/effects'
import { api } from '../../../services/regionsApi.service'
import { getForecastsRequest, getForecastsSuccess } from './actions'
import { IForecast } from './types'

type getAllForecastsRequest = ReturnType<typeof getForecastsRequest>

function* getAllForecasts({ payload }: getAllForecastsRequest){
  const forecastsResponse: AxiosResponse<IForecast[]> = yield call(api.get, `forecast/meteorology/cities/daily/${payload.globalIdLocal}`)
  const forecastsRsults = Object.assign(forecastsResponse.data, payload)
  yield put(getForecastsSuccess(forecastsRsults))
}

export default all([
  takeLatest('GET_FORECASTS_REQUEST', getAllForecasts)
])
