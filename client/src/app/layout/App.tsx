import Catalog from "../../features/catalog/catalog";
import{Container, CssBaseline} from "@mui/material";
import Header from "./Header";
import { createTheme } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";


function App() {
  const [darkMode, setDarkMode]=useState(false)
  const paletteType= darkMode ? 'dark' : 'light';
// const theme=createTheme({
//   palette:{
//       mode:paletteType,
//       background:{
//         default: paletteType==='light'? '#eaeaea':'#121212'
//       }
//   }
// })
function handleThemeChange(){
  setDarkMode(!darkMode);
}
  return (
<>
<CssBaseline/>

<Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
<Container>
<Catalog/>
  </Container>
</>  
  );
}

export default App;

