import React from 'react'
import { STATS_GET } from '../api'
import Head from '../Components/Head'
import Loading from '../Components/Loading'
import Container from '../Components/Styles/Container.styled'
import { Erro } from '../Components/Styles/Erro.styled'
import { Title } from '../Components/Styles/Title.styled'
import useFetch from '../Hooks/useFetch'
const UserStatsGraphs = React.lazy(() => import ('./UserStatsGraphs'))

const UserStats = () => {
  const {error, loading, data, request} = useFetch()

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
    getData();
  }, [request])

  if(loading) <Loading />
  if(error) <Erro>{error}</Erro>
  if(data)
  return (
    <Container>
      <React.Suspense fallback={<div></div>}>
        <Head title='Estatísticas' />
        <UserStatsGraphs data={data}/>
      </React.Suspense>
    </Container>
  )
  else return null
}

export default UserStats