import Head  from 'next/head'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Region } from '../components/Region'
import { Forecast } from '../components/Forecast'
import { IState } from '../store'
import { IForecastInfos } from '../store/modules/forecasts/types'
import { getRegionsRequest } from '../store/modules/Regions/actions'
import { IRegion } from '../store/modules/regions/types'
import { Main } from '../styles/pages/Home'

const Home: React.FC = () => {

  const dispatch = useDispatch()

  const regions: IRegion[] = useSelector<IState, IRegion[]>(state => state.regions)
  const forecasts: IForecastInfos = useSelector<IState, IForecastInfos>(state => state.forecasts)

  useEffect(() => {
    dispatch(getRegionsRequest())
  },
  [])

  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <Head>
        <title>Dott Test</title>
      </Head>
      <Main>
        <section>
          <h2>Region</h2>
          <input type="text" name="search" id="search" onChange={handleSearch} placeholder="Filter region..."/>
          { regions.filter(region => {
            if(search !== ''){
              return (region.globalIdLocal.toString().toLowerCase().includes(search) || region.idAreaAviso.toString().toLowerCase().includes(search))

            }
            return true
          }).map(region => {
            return (
              <Region key={region.globalIdLocal} globalIdLocal={region.globalIdLocal} idAreaAviso={region.idAreaAviso} />
              )
          }) }
        </section>
        <section>
          <h2>Forecast</h2>
          {
            forecasts.data?.length > 0 ? forecasts.data.map( forecast => <Forecast key={Math.random()} infos={forecast} idAreaAviso={forecasts.idAreaAviso} /> ) : ''
          }

        </section>
      </Main>
    </>
  )
}

export default Home
