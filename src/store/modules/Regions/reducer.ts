import { Reducer } from 'react'
import produce from 'immer'
import { IRegion } from './types'

const INITIAL_STATE: IRegion[] = [
  // {globalIdLocal: '1010500', idAreaAviso: 'AVR'},
  // {globalIdLocal: '1020500', idAreaAviso: 'BJA'},
  // {globalIdLocal: '1030300', idAreaAviso: 'BRG'}
]

export const regions: Reducer<IRegion[], any> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'GET_REGIONS_SUCCESS': {
        return action.payload
      }

      default: {
        return draft
      }
    }
  })
}
