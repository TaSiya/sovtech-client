import React from 'react'
import PersonComponent from "./Person"

export type Person = {
  __typename: String
  name: String
  height: number
  mass: number
  gender: String
  homeworld: String
}

type Props = {
  people: [Person]
}

const PeopleView = (props: Props) => {
  const { people } = props
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