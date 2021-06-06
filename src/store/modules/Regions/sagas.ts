import { AxiosResponse } from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../../../services/regionsApi.service'
import { getRegionsSuccess } from './actions'
import { IRegion } from './types'

function* getAllRegions(){
  const regionsResponse: AxiosResponse<IRegion[]> = yield call(api.get, 'distrits-islands')
  yield put(getRegionsSuccess(regionsResponse.data.data))
}

export default all([
  takeLatest('GET_REGIONS_REQUEST', getAllRegions)
])
