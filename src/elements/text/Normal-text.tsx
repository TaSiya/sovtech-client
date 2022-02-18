import { Typography } from "@mui/material"
import React from 'react'

type Props = {
  text: string,
  size?: number,
  color?: string,
  variant?: any
}

function NormalText({text, color, size, variant}: Props) {
  return (
    <Typography sx={{ fontSize: size? size : 14 }}  variant= {variant ? variant : 'body1'} color={ color? color : "text.primary"}>
      {text}
    </Typography>
  )
}

export default NormalText