// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/pages/home'
import Signup from './component/pages/signup'
import Certificate from './component/pages/certificate'
import AppLayout from './component/layout'
import RequestForm from './component/pages/request'
import AppNotfound from './component/pages/notFound'


function App() {
  return(
    <>
   <AppLayout>
   {/* <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='signup' element={<Signup/>}/>
      <Route path='/request' element={ <RequestForm/>} />
      <Route path='/certificate' element={<Certificate/>}/>
      <Route path='*' element={<AppNotfound/>}/>
      <RequestForm/>
    </Routes> */}
    <RequestForm/>
   </AppLayout>
    </>
  )
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
