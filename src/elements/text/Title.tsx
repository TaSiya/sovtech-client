import { Typography } from "@mui/material"
import React from 'react'

type Props = {
  title: string
  align?: string
}

function Title({title, align ='left'}: Props) {
  return (
    <Typography sx={{textAlign: align }}  variant="h5" color="text.primary">
      {title}
    </Typography>
  )
}

export default Title