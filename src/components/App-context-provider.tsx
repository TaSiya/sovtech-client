import React, { ReactNode, useState } from 'react'
import AppContext from '../App-context'

type Props = {
  children: ReactNode
}

const AppContextProvider = ({children}: Props) => {
  const [currentPage, setCurrentPage] = useState(1)

  const updateCurrentPage = (pageNumb: number) => {
    setCurrentPage(pageNumb)
  }
  return (
    <AppContext.Provider value={{
      currentPage,
      updateCurrentPage
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider