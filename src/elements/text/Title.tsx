import React from 'react'

type Props = {
  title: string
}

function Title({title}: Props) {
  return (
    <p>{title}</p>
  )
}

export default Title