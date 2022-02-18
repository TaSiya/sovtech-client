import React from 'react'
import { Link } from "react-router-dom"
import NormalText from "../elements/text/Normal-text"
import { Person as PersonType } from "./People-view"
import { Box, Card, CardActions, CardContent, Button, Typography, Link as GoToLink } from '@mui/material';
import Title from "../elements/text/Title";
import BoxInline from "../elements/Box-inline";

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
    <Box sx={{  margin: 4  }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <BoxInline>
            <Title title={name} />
            <NormalText size={12} color="#aaa" text={`${gender}`} />
          </BoxInline>
          <BoxInline>
            <NormalText text={`Height : ${height}`} />
            <NormalText text={`mass : ${mass}`} />
          </BoxInline>
          <br />
          <GoToLink sx={{ alignItems: 'center'}} href={ homeworld } target="_blank" underline="hover" >
            homeworld
          </GoToLink>
        </CardContent>
        <CardActions>
          <Link to={`/people/${name}`}>
            <Button size="small">View profile</Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Person