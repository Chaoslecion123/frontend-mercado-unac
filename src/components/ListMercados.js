import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useAuth from '../hooks/useAuth';
import { useHistory } from "react-router-dom";
import { useSnackbar } from 'notistack';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
const ListMercados = ({markets}) => {
    const classes = useStyles();
    let history = useHistory();
    const {user} = useAuth();
    const { enqueueSnackbar } = useSnackbar();

    const pass_request_id = user.pass_request_id;


    const handleSolicitaPreviaPase = (id_mercado) => {
        history.push(`/horarios/${id_mercado}`);        
    }

    const handleDownloadLastPdf = () => {
        const market_pass_request_id = localStorage.getItem("market_pass_request_id");
        console.log(market_pass_request_id)
        if(market_pass_request_id){
            history.push(`/pdf/${market_pass_request_id}`);  
        }else{
            if(pass_request_id === null){
                enqueueSnackbar("No tienes pase generado!.",{variant:'error',anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                },});
            }else {
                history.push(`/pdf/${pass_request_id}`); 
            }
        }
    }

    return(
        <>
        <div>
            <button className="btn btn-danger mb-2" onClick={() => {handleDownloadLastPdf()}}>descargar ultimo pase</button>

        </div>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="center">Dirección</TableCell>
                <TableCell align="center">Aforo</TableCell>
                <TableCell align="center">Departamento</TableCell>
                <TableCell align="center">Ciudad</TableCell>
                <TableCell align="center">Distrito</TableCell>
                <TableCell align="center">Acciones</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                   { markets.map((market) => (
                        <TableRow key={market.id}>
                    <TableCell align="center">{market.name}</TableCell>
                    <TableCell align="center">{market.direccion}</TableCell>
                    <TableCell align="center">{market.aforo}</TableCell>
                    <TableCell align="center">{market.departamento}</TableCell>
                    <TableCell align="center">{market.ciudad}</TableCell>
                    <TableCell align="center">{market.distrito}</TableCell>
                    <TableCell align="center">
                        <button onClick={ () => {handleSolicitaPreviaPase(market.id)}} className="btn btn-success btn-sm">Solicitar pase</button>
                        </TableCell>
                    </TableRow>
                    ))
                   }
            </TableBody>
        </Table>
        </TableContainer>
        </>
    )
}

export default ListMercados;