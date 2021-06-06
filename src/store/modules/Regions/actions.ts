export function getRegionsRequest(){
  return {
    type: 'GET_REGIONS_REQUEST'
  }
}

export function getRegionsSuccess(result){
  return {
    type: 'GET_REGIONS_SUCCESS',
    payload: result
  }
}

export function getRegionsFail(){
  return {
    type: 'GET_REGIONS_FAIL'
  }
}
