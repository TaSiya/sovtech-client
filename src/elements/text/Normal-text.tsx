import { Typography } from "@mui/material"
import React from 'react'

type Props = {
  text: string
  size?: number
  color?: string
  variant?: any
  align?: CanvasTextAlign
  marginX?: string,
  marginY?: string
}

function NormalText({
  text, 
  color = 'text.primary', 
  size = 14, 
  variant = 'body1', 
  align = "left",
  marginX = '0',
  marginY = '.2rem'
  }: Props) {
  return (
    <Typography sx={{ fontSize: size, marginY, marginX}} textAlign= {align}  variant= {variant} color={ color}>
      {text}
    </Typography>
  )
}

export default NormalText