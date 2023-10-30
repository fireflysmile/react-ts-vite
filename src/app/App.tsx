import { GlobalStyle } from '../styles/GlobalStyles'
import theme from '../styles/Theme'
import './App.css'

import router from './AppRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Padding all={{ sm: 1, lg: 2 }}>
          <Margin top={5}>
            <h1>Vite + React</h1>
            <FontIcon size={100} name="happy_emoji" color="radicalRed" cursor />
          </Margin>
          <RouterProvider router={createBrowserRouter(router)} />
          <GlobalStyle />
        </Padding>
    </ThemeProvider>
  )
}

export default App
