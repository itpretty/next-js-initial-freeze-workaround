import '../constants'
import { useState, useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useStore } from '../utils'

// const globalVar = global
// globalVar.ef = {
//   globalData: {},
//   common: 'ef global vars server side',
//   frontend: 'vars from front end',
//   func: ()=>{console.log('func')},
//   isServer: ()=> typeof window === 'undefined',
//   request,
// }

// function localStorageProvider() {
//   if (ef.isServer) return new Map([])
//   // When initializing, we restore the data from `localStorage` into a map.
//   const map = new Map(JSON.parse(window?.localStorage.getItem('app-cache') || '[]'))

//   // Before unloading the app, we write back all the data into `localStorage`.
//   window?.addEventListener('beforeunload', () => {
//     const appCache = JSON.stringify(Array.from(map.entries()))
//     window?.localStorage.setItem('app-cache', appCache)
//   })

//   // We still use the map for write & read for performance.
//   return map
// }


export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  const lang = ()=>{console.log('wow')}

  return (
    <ApolloProvider client={apolloClient}>
      {/* <SWRConfig value={{ provider: localStorageProvider }}> */}
        <Component 
          {...pageProps} 
          lang={lang} 
          router={useRouter()} 
          Link={Link}
          useState={useState}
          useEffect={useEffect}
          useStore={useStore}
        />
      {/* </SWRConfig> */}
    </ApolloProvider>
  )
}
