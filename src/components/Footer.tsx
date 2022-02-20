import { Box, Link } from "@mui/material"
import React from 'react'
import BoxInline from "../elements/Box-inline"
import NormalText from "../elements/text/Normal-text"

type Props = {}

const Footer = (props: Props) => {
  return (
    <Box sx={{justifyContent: 'center', display: 'flex', marginTop: '2rem'}}>
      <NormalText
        text="2022 © Siyanda Makhalima"
        align="center"
        marginX='1rem'
      />
      <Link href="https://github.com/TaSiya" target='_blank' underline="none">
        <NormalText
          text="Github"
          align="center"
          marginX='1rem'
        />
      </Link>
      
    </Box>
  )
}

export default Footer