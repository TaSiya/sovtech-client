import { Box } from "@mui/material"
import React from 'react'
import NormalText from "../elements/text/Normal-text"
import PersonComponent from "./Person"

export type Person = {
  __typename: String
  name: string
  height: string
  mass: string
  gender: string
  homeworld: string
}

type Props = {
  people: [Person]
}

const PeopleView = (props: Props) => {
  const { people } = props
  if (!people) {
    return (
      <NormalText text="No more people to view" />
    )
  }
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      p: 1,
      m: 1,
      borderRadius: 1,
      justifyContent: "center"
    }}>
    {
      people.map((person, idx) => {
        if (person) {
          return  <PersonComponent key={idx} person={person} />
          
        }
      })
    }
    </Box>
  )
}

export default PeopleView