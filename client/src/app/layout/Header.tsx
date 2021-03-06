import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";


interface Props{
    darkMode:boolean;
    handleThemeChange:()=>void;
}
export default function Header({darkMode, handleThemeChange}:Props){

    return (

        <AppBar position="static" sx={{mb:4}}> 
        <Toolbar>
        <Typography variant="h6">
                 
                 O-Store
             </Typography>
             <Switch checked={darkMode} onChange={handleThemeChange}/>
        </Toolbar>

        </AppBar>

    )
}