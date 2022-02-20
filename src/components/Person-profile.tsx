import React from 'react'
import { useParams } from 'react-router-dom'
import {gql, useQuery } from '@apollo/client'
import NormalText from "../elements/text/Normal-text"
import Person from './Person'
import { Box, CircularProgress } from "@mui/material"

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
  if (loading)  return (
    <Box sx={{display: 'flex', justifyContent: 'center', marginY: '20rem'}}>
      <CircularProgress size={150} />
    </Box>
  ) 
  if (error) return <NormalText text={`Error: ${error}`} />
  return (
    <Person person={data.searchByName} />
  )
}

export default PersonProfile