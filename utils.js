// https://www.npmjs.com/package/immutable
import Immutable from "immutable"

export const useStore = ()=> {
    const cacheKey = 'globalState'
    const getStore = ()=>{
        return JSON.parse(localStorage.getItem(cacheKey) || '{}')
    }
    const setStore = (udpates)=>{
        log('Old')
        const storeUpdated = {...getStore(), ...udpates}
        updateCache(storeUpdated)
        log('New')
    }
    const updateCache = (newStore)=>{
        if (!newStore) return
        return localStorage.setItem(cacheKey, JSON.stringify(newStore))
    }
    const log = (oldOrNew)=>{
        console.log(`${oldOrNew} Store: ${JSON.stringify(getStore())}`)
    }
    return {
        getStore,
        setStore,
    }
  }