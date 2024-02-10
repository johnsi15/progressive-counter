import './App.css'
import { ProgressiveCounter } from 'progressive-counter'

function App() {

  return (
    <>
      <ProgressiveCounter initialValue={0} finalValue={300.78} decimals={2} className='counter' element='h1' />
      <ProgressiveCounter initialValue={0} finalValue={8760.865} decimals={3} element='h2' />
    </>
  )
}

export default App
