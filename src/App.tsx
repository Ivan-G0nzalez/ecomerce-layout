import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import DiscountBar from './components/NavBar/DiscountBar'
import SubNavBar from './components/NavBar/SubNavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DiscountBar />
      <SubNavBar />
      <NavBar />
      <div className='bg-red'>count {count}</div>
      <button className='bg-blue-300 p-2' onClick={() => setCount(prev => prev + 1)}> add to the counter</button>
    </>
  )
}

export default App
