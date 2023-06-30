import { MySidebar } from './scenes/main/Sidebar/sidebar'
import { Topbar } from './scenes/main/topbar'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Menu } from './scenes/main/Sidebar/data/sidebar-data'
import { useState } from 'react'
import { ShowWithAnimation } from './components/Animation/ShowWithAnimation'
export const App = () => {
  const [theme, colorMode] = useMode();
  const [isMounted, setIsMounted] = useState(false);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MySidebar menu={Menu} />
          <main className="content">
            <Topbar></Topbar>
            <div>
              <button onClick={()=>{setIsMounted(!isMounted)}}>OKKKKKKKKKKKKK</button>
            <ShowWithAnimation isMounted={isMounted}>
              test
            </ShowWithAnimation>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}