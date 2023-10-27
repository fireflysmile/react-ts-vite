import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import router from './AppRouter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
        <a href="https://vitejs.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <RouterProvider router={createBrowserRouter(router)} />
    </>
  )
}

export default App
