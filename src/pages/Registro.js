import React, { useState } from 'react';
import {Container, Avatar, Typography, Grid, TextField, Button} from '@material-ui/core';
import LockOutLineIcon from '@material-ui/icons/LockOutlined';
import {register} from '../api/user';
import { useSnackbar } from 'notistack';

const style = {
    paper:{
        marginTop:8,
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    avatar:{
        margin:8,
        backgroundColor: "#e53935"
    },
    form: {
        width: "100%",
        marginTop: 10
    },
    submit:{
        marginTop: 15,
        marginBottom: 20
    }
}

const Registro = () => {
    const [form,setForm] = useState({})
    const { enqueueSnackbar } = useSnackbar();

    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        const password = form.password;
        const password_confirmation = form.password_confirmation;
        const username = form.username;
        const first_name = form.first_name;
        const last_name = form.last_name;
        const dni = form.dni;

        if(!password || !password_confirmation || !username || !first_name || !last_name || !dni){
            enqueueSnackbar("todos los campos son obligatorios",{variant:'warning',anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            },});
        }else{
            if (password !== password_confirmation) {
                enqueueSnackbar("las contraseñas no coinciden",{variant:'warning',anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                },});
            }else {
                const result = await register(form);
                console.log(result);
                if(result.ok){
                    enqueueSnackbar(result.message,{variant:'success',anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    },});
                    window.location.href="/login"

                }else{
                    enqueueSnackbar(result.message,{variant:'error',anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    },});
        
                }

            }        
        }
    }
 
    
    return(
        <Container maxWidth="md">
            <div style={style.paper}>
                <Avatar style={style.avatar}>
                    <LockOutLineIcon />
                </Avatar>
                <Typography component="h1" variant="h6">
                    Registre su Cuenta
                </Typography>
                <form style={style.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <TextField 
                                name="first_name"
                                fullWidth
                                label="Ingrese su nombre"
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                                name="last_name"
                                fullWidth
                                label="Ingrese su apellido"
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                                name="password"
                                fullWidth
                                type="password"
                                label="Ingrese su password"
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                                name="password_confirmation"
                                fullWidth
                                type="password"
                                label="repite su password"
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                                name="username"
                                fullWidth
                                type="username"
                                label="ingrese un Usuario"
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                                name="dni"
                                fullWidth
                                label="ingrese su documento de identica"
                                onChange={handleInput}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item md={6} xs={12}>
                            <Button type="submit" variant="contained" fullWidth size="large" color="primary" style={style.submit}>
                                Registrar
                            </Button>
                        </Grid>
                    </Grid>
                </form>         
            </div>             
        </Container>
        
    )
}

export default Registro