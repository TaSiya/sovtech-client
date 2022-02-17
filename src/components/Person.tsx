import React from 'react'
import { Link } from "react-router-dom"
import NormalText from "../elements/text/Normal-text"
import { Person as PersonType } from "./People-view"

type Props = {
  person: PersonType
}

const Person = (props: Props) => {
  const { 
    person: {
      gender,
      height,
      homeworld,
      mass,
      name
    } 
  } = props
  return (
    <Link to={`/people/${name}`}>
      <NormalText text={`Name ${name}`} />
      <NormalText text={`gender ${gender}`} />
      <NormalText text={`homeworld ${homeworld}`} />
      <NormalText text={`mass ${mass}`} />
      <NormalText text={`height ${height}`} />
      <br />
      <hr />
    </Link>
  )
}

export default Person