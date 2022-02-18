import { Typography } from "@mui/material"
import React from 'react'

type Props = {
  title: string
}

function Title({title}: Props) {
  return (
    <Typography sx={{ }}  variant="h6" color="text.primary">
      {title}
    </Typography>
  )
}

export default Title