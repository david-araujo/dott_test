import { Containner } from "./style"

export const Forecast = ({ infos, globalIdLocal, idAreaAviso }) => {
  return (
    <Containner>
      <p><strong>{`${idAreaAviso} ${infos.forecastDate}`}</strong></p>
      <p>{`Minimum temperature: ${infos.tMin}ºC`}</p>
      <p>{`Maximum temperature: ${infos.tMax}ºC`}</p>
      <p>{`% Preciptation: ${infos.precipitaProb}%`}</p>
    </Containner>
  )
}
