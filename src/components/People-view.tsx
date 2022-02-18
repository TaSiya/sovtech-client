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
    <>
    {
      people.map((person, idx) => {
        if (person) {
          return  <PersonComponent key={idx} person={person} />
          
        }
      })
    }
    </>
  )
}

export default PeopleView