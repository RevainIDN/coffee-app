import { useState } from 'react'
import '../styles/App.css'
import MainContent from './MainContent'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainContent />
    </>
  )
}