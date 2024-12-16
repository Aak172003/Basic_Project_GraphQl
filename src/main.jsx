import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'


import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ENDPOINT_GRAPHQL_SERVER } from '../text.js'


const client = new ApolloClient({
  uri: ENDPOINT_GRAPHQL_SERVER,
  cache: new InMemoryCache()
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
