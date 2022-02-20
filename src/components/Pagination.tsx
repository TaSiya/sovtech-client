import React, {useContext, useEffect, useState} from 'react'
import AppContext from "../App-context"
import Button from '@mui/material/Button';
import { Box, TextField } from "@mui/material";
import BoxInline from "../elements/Box-inline";


type Props = {
}

const Pagination = (props: Props) => {
  const {currentPage, updateCurrentPage} = useContext(AppContext)
  const [pageNumb, setPageNumb] = useState(currentPage)

  // useEffect(() => {
  //   if (currentPage != pageNumb) {
  //     updateCurrentPage(pageNumb)
  //   }
  // },[pageNumb])
  return (
    <Box sx={{display: 'flex', justifyContent: "center"}}>
      <Button 
        disabled={currentPage < 2} 
        onClick={() => {
          const goTo = currentPage - 1
          updateCurrentPage(goTo)
          setPageNumb(goTo)
        }}
        sx={{marginX: '1rem'}}
        >
        Previous page
      </Button>
      <br />
      <input type="number" min="1" style={{textAlign: 'center', fontSize: 13}}  placeholder="Enter page number" value={pageNumb} onChange={e => {
        const page = e.target.value
        setPageNumb(Number(page))
      }} />
      <Button sx={{marginX: '1rem'}} disabled={pageNumb < 1 || pageNumb > 9}  variant="contained" onClick={() => updateCurrentPage(pageNumb) }>
        Go to page
      </Button>
      <br />
      <Button 
        disabled={currentPage >= 9}
        onClick={() => {
          const goTo = currentPage + 1
          updateCurrentPage(goTo)
          setPageNumb(goTo)
        }
      }>
        Next page
      </Button>
    </Box>
  )
}

export default Pagination