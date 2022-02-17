import React from 'react'

type Props = {
  text: string
}

function NormalText({text}: Props) {
  return (
    <div>{text}</div>
  )
}

export default NormalText