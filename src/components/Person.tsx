import React from 'react'
import { Link } from "react-router-dom"
import NormalText from "../elements/text/Normal-text"
import { Person as PersonType } from "./People-view"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Title from "../elements/text/Title";

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
          <Title title={ `Name: ${name} `} />
          <NormalText text={`Gender : ${gender}`} />
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