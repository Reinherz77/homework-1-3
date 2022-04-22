import React from "react";
import auth from "../../auth/auth";
import './LoginPage.css'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
// import bgImages from "../img/bg_sptfy.png"

function Login() {
    return(
      <div className="test">
            <AppBar style={{ padding: 10 }} sx={{ bgcolor: "green" }}>
                <Typography variant='h3' >
                    Welcome
                </Typography>
            </AppBar>
            <div style={{marginTop: 80}}>
                <Box>
                    <Typography variant='h4' padding={10} style={{ border: '1px solid black' }}>
                        Silahkan Login terlebih dahulu
                    </Typography>
                    <Button variant="contained" onClick={auth} color='success'>
                      Login
                    </Button>
                </Box>
            </div>
        </div>
        // <div className="login">
        //   {/* <div>
        //     <AppBar position="fixed">
        //       <h1>Welcome</h1>
        //     </AppBar>
        //   </div> */}
        //   <div className="center">
        //     <p className="title-login">Silahkan Login terlebih dahulu</p>
        //     <Button variant="contained" onClick={auth} color='success'>
        //       Login
        //     </Button>
        //   </div>
        // </div>
    )
}

export default Login