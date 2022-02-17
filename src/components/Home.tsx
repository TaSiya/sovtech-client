import React from 'react'
import { useQuery, gql } from "@apollo/client"
import Title from "../elements/text/Title"
import NormalText from "../elements/text/Normal-text"

const people_query = gql`
query getPeople {
  people {
    name
    height
    mass
    gender
    homeworld
  }
}
`

function Home() {
  const { loading, error, data} = useQuery(people_query)

  if (loading) return <NormalText text="loaading data..." />
  if (error) return <NormalText text="Error 🤔" />
  console.log("people data", data)
  return (
    <>
      <Title title="Home page" />
    </>
  )
}

export default Home