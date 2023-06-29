import { useState } from 'react'
import { MySidebar } from './scenes/main/Sidebar/sidebar'
import { Topbar } from './scenes/main/topbar'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Menu } from './scenes/main/Sidebar/sidebar-data'
export const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MySidebar menu={Menu} />
          <main className="content">
            sdfsdfsdf
            <ul>
              <li><a href="">test</a></li>
            </ul>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}