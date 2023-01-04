import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { CyclesProvider } from './hooks/useCycles'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesProvider>
          <Router />
        </CyclesProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
