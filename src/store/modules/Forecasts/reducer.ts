import { Reducer } from 'react'
import produce from 'immer'
import { IForecast, IForecastInfos } from './types'

const INITIAL_STATE: IForecastInfos = {}

export const forecasts: Reducer<IForecastInfos, any> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'GET_FORECASTS_SUCCESS': {
        return action.payload
      }

      default: {
        return draft
      }
    }
  })
}
