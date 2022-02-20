import React, { ReactNode } from 'react'
import { Box } from '@mui/material'

type Props = {
  children: ReactNode
}

const BoxInline = ({children}: Props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: 'space-between'}}>
      {children}
    </Box>
  )
}

export default BoxInline