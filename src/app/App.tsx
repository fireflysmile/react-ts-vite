import { GlobalStyle } from '../styles/GlobalStyles'
import theme from '../styles/Theme'

import router from './AppRouter';
import { FunctionComponent } from 'react';

const App: FunctionComponent = () => {
  return (
    <StyleSheetManager shouldForwardProp={(name) => !name.startsWith('$')}>
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
    </StyleSheetManager>
  )
}

export default App
