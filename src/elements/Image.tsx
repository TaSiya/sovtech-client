import React from 'react'

type Props = {
  logo: string
}

const Image = ({logo}: Props) => {
  return (
    <img src={logo} alt="Logo" />
  )
}

export default Image