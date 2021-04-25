import React from 'react'
import { RootStore$ } from './stores/RootStore$.store'

const MainStore = RootStore$.create({})

const StoreContext = React.createContext(defaultValue={})

export const StoreProvider = (props) => {
    return <StoreContext.Provider value={ MainStore }> { props.children } </StoreContext.Provider>
}

export function useRootStore(){
    const store = React.useContext(StoreContext)
    if (!store) {
        throw new Error('useStore shall be used within StoreProvider')
    }
    return store
}