export interface IForecast {
  tMin: string
  tMax: string
  forecastDate: string
  precipitaProb: string
}

export interface IForecastInfos {
  globalIdLocal: string
  idAreaAviso: string
  data: IForecast[]
}
