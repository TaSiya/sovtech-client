import React, {useContext} from 'react'
import { useQuery, gql } from "@apollo/client"
import Title from "../elements/text/Title"
import NormalText from "../elements/text/Normal-text"
import PeopleView from "./People-view"
import Pagination from "./Pagination"
import AppContext from '../App-context'

const people_query = gql`
query getPeople($page: Int) {
  people(page: $page) {
    next
    previous
    results {
      name
      gender
      homeworld
    }
  }
}
`

type Props = {

}

const Home = (props: Props) => {
  const {currentPage} = useContext(AppContext)
  const { loading, error, data} = useQuery(people_query, {
    variables: {
      page: currentPage
    }
  })

  if (loading) return <NormalText text="loaading data..." />
  if (error) return <NormalText text={"Error: " + error} />
  const { results, next, previous } = data.people
  return (
    <>
      <Title title="Home page" />
      <PeopleView people={results} />
      <Pagination next={next} previous={previous} />
    </>
  )
}

export default Home