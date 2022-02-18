import React from 'react'
import { useParams } from 'react-router-dom'
import {gql, useQuery } from '@apollo/client'
import NormalText from "../elements/text/Normal-text"

type Props = {}

const personQuery = gql `
  query getPerson($name: String!) {
    searchByName(name: $name) {
      name
      gender
      homeworld
      mass
      height
    }
  }
`

const PersonProfile = (props: Props) => {
  const { personName } = useParams()
  const { loading, error, data} = useQuery(personQuery, {
    variables: {
      name: personName
    }
  })
  if (loading)  return <NormalText text="loading data..." />

  if (error) return <NormalText text={`Error: ${error}`} />

  const { name, gender, homeworld, mass, height} = data.searchByName
    
  console.log("person data", name, gender, homeworld, mass, height)
  return (
    <div>PersonProfile</div>
  )
}

export default PersonProfile