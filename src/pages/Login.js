import React, { useState } from 'react';
import { Container, Typography, TextField, Avatar, Grid, Button,Link } from '@material-ui/core';
import LockOutlineIcon from "@material-ui/icons/LockOutlined";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constans";
import {login}  from '../api/user';
import { useSnackbar } from 'notistack';


const style={
    paper:{
        marginTop: 9,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: 5,
        backgroundColor: "red"
    },
    form: {
        width: "100%",
        marginTop: 8
    },
    submit: {
        marginTop: 10,
        marginBottom: 20
    }
    
}

const Login = () => {
    const [form,setForm] = useState({});
    const { enqueueSnackbar } = useSnackbar();
    

    const handleInput = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const result = await login(form);
        if(!result.access & !result.refresh){
            enqueueSnackbar("Inicio de sesión exitoso!",{variant:'warning',anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            },});
        }else {
            const { access, refresh } = result;
            localStorage.setItem(ACCESS_TOKEN, access);
            localStorage.setItem(REFRESH_TOKEN, refresh);

            window.location.href = "/";

            enqueueSnackbar("Login correct.",{variant:'success',anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            },});
        }
    }

    return(
        <Container maxWidth="xs">
            <div style={style.paper}>
                <Avatar style={style.avatar}>
                    <LockOutlineIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Ingrese Usuario
                </Typography>
                <form style={style.form} onSubmit={handleSubmit}>
                    <TextField 
                        variant="outlined"
                        label="Usuario"
                        name="username"
                        fullWidth
                        margin="normal"
                        onChange={handleInput}
                    />
                    <TextField 
                        variant="outlined"
                        label="Password"
                        type="password"
                        name="password"
                        fullWidth
                        margin="normal"
                        onChange={handleInput}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={style.submit}
                        >
                            Enviar
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                {"Olvido su contrasena?"}
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"No tienes cuenta? Registrate"}
                            </Link>
                        </Grid>          
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default Login;