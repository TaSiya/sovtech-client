import React, {useContext} from 'react'
import { useQuery, gql } from "@apollo/client"
import Title from "../elements/text/Title"
import NormalText from "../elements/text/Normal-text"
import PeopleView from "./People-view"
import Pagination from "./Pagination"
import AppContext from '../App-context'
import { Box } from "@mui/material"
import Image from '../elements/Image'
import logo from '../starwars2.png'

const people_query = gql`
  query getPeople($page: Int) {
    people(page: $page) {
        name
        gender
        homeworld
        mass
        height
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
  const people = data.people
  return (
    <Box sx={{backgroundColor: "#eee"}}>
      <Title title="Home page" />
      {/* <Image logo={logo} /> */}
      <PeopleView people={people} />
      <Pagination />
    </Box>
  )
}

export default Home