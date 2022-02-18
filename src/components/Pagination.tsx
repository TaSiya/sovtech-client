import React, {useContext, useEffect, useState} from 'react'
import AppContext from "../App-context"
import Button from '@mui/material/Button';


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
    <>
    <Button onClick={() => {
        const goTo = currentPage - 1
        updateCurrentPage(goTo)
        setPageNumb(goTo)
      }
    }>
      Previous page
    </Button>
    <br />
    <input type="number" min="1" placeholder="Enter page number" value={pageNumb} onChange={e => {
      const page = e.target.value
      setPageNumb(Number(page))
    }} />
    <Button  variant="contained" onClick={() => updateCurrentPage(pageNumb) }>
      Go to page
    </Button>
    <br />
    <Button 
      onClick={() => {
        const goTo = currentPage + 1
        updateCurrentPage(goTo)
        setPageNumb(goTo)
      }
    }>
      Next page
    </Button>
    </>
  )
}

export default Pagination