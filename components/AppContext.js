import { createContext, useContext, useMemo } from 'react'

export const AppContext = createContext(null)

export const AppContextProvider = ({ children }) => {

  const value = useMemo(() => ({
    categoryColors: {
      prepost: '#b1f6b1',
      conceptual: '#ffdea3',
      concrete: '#bfcdff',
    }
  }), [])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)