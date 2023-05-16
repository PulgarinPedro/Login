import React from "react";
import {AppBar, Box, Toolbar, Container, Grid, Button, Typography, Stack} from "@mui/material";

export const NavBar: React.FC <{}> = () =>{
     return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth= "xl">
                        <Grid container direction="row" 
                        justifyContent="space-between" 
                        alignItems="center">
                     <Grid item>
                        <Typography> asdasd</Typography>
                        </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                <Button variant="outlined">Iniciar</Button>
                                <Button variant="outlined">Registrarce</Button>
                               </Stack>
                               </Grid>
                          </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
     );

}; 