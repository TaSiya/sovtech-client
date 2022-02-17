import { createContext } from "react"

type AppContext = {
  currentPage: number,
  updateCurrentPage: (numb: number) => void
}

export default createContext <AppContext>({
  currentPage: 1,
  updateCurrentPage: (numb: number) => {
    throw new Error("Not initiated");
    
  }
})