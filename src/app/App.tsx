import { GlobalStyle } from '../styles/GlobalStyles'
import theme from '../styles/Theme'
import './App.css'

import router from './AppRouter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Padding all={{ sm: 1, lg: 2 }}>
        <Margin top={5}>
          <h1>Vite + React</h1>
          <FontIcon size={100} name="happy_emoji" color="radicalRed" cursor />
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </Margin>
        <RouterProvider router={createBrowserRouter(router)} />
        <GlobalStyle />
      </Padding>
    </ThemeProvider>
  )
}

export default App
