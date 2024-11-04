import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import Dashboard from './components/dashboard/dashboard';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </>
  )
}

export default App
