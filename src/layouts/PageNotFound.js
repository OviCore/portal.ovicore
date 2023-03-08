import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import SuiButton from 'components/SuiButton'
import React from 'react'

export default function PageNotFound() {
    return (
        <Grid2 container sx={{
            height: '100vh',
            width: '100vw',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black'
        }}>
            <Grid2 item xs={12}>
                <Typography variant="h1" align="center">
                    404 - Page Not Found
                </Typography>
                <Typography variant="h3" align="center">
                    The page you are looking for does not exist.
                </Typography>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '1rem'
                }} >
                    <SuiButton variant="outlined" color="secondary" href="/">
                        Go to Home
                    </SuiButton>
                    <div style={{marginRight: '1rem'}} />
                    <SuiButton variant="outlined" color="secondary" href="/sign-in">
                        Go to Sign In
                    </SuiButton>

                </div>
               

            </Grid2>
           
        </Grid2>
    )

}