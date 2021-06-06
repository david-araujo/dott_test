import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getForecastsRequest } from "../../store/modules/Forecasts/actions";
import { IRegion } from "../../store/modules/regions/types";
import { Containner } from "./style";

export const Region: React.FC<IRegion> = ({globalIdLocal, idAreaAviso}) => {
  const dispatch = useDispatch()

  const handleForecast = useCallback(({globalIdLocal, idAreaAviso}) => {
    dispatch(getForecastsRequest({globalIdLocal, idAreaAviso}))
  }, [dispatch])

  return (
    <Containner>
      <strong>{`${globalIdLocal} ${idAreaAviso}`}</strong>
      <button onClick={() => handleForecast({globalIdLocal, idAreaAviso})} >Show &gt;&gt;</button>
    </Containner>
  )
}
