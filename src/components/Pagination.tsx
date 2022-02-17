import React, {useContext, useEffect, useState} from 'react'
import AppContext from "../App-context"


type Props = {
  next: string
  previous: string
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
    <button onClick={() => {
        const goTo = currentPage - 1
        updateCurrentPage(goTo)
        setPageNumb(goTo)
      }
    }>
      Previous page
    </button>
    <br />
    <input type="number" min="1" placeholder="Enter page number" value={pageNumb} onChange={e => {
      const page = e.target.value
      setPageNumb(Number(page))
    }} />
    <button onClick={() => updateCurrentPage(pageNumb) }>
      Go to page
    </button>
    <br />
    <button 
      onClick={() => {
        const goTo = currentPage + 1
        updateCurrentPage(goTo)
        setPageNumb(goTo)
      }
    }>
      Next page
    </button>
    </>
  )
}

export default Pagination