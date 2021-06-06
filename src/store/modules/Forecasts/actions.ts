export function getForecastsRequest(regionInfos){
  return {
    type: 'GET_FORECASTS_REQUEST',
    payload: regionInfos
  }
}

export function getForecastsSuccess(result){
  return {
    type: 'GET_FORECASTS_SUCCESS',
    payload: result
  }
}

export function getForecastsFail(globalIdLocal: String){
  return {
    type: 'GET_FORECASTS_FAIL',
    payload: globalIdLocal
  }
}
