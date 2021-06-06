import { combineReducers } from "redux";
import { regions } from '../modules/regions/reducer'
import { forecasts } from '../modules/forecasts/reducer'

export default combineReducers({
  regions,
  forecasts
})
