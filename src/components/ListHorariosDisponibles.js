import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getCounterMarket, passRequestMarket} from '../api/markets';
import { useHistory } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import { useSnackbar } from 'notistack';
import {getAccessTokenApi} from '../api/auth';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ListHorariosDisponibles({id_mercado}) {
    const classes = useStyles();
    const [counterMarkets,setCounterMarkets] = useState([]);
    let history = useHistory();
    const {user} = useAuth();
    const accessToken = getAccessTokenApi();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(()=> {
        getCounterMarket(accessToken,id_mercado).then(res => {
            setCounterMarkets(res)
        })
    },[id_mercado])


   const  handleClick =  (id_counter_market,name_schedule) => {
        var data = {
            'id_counter_market':id_counter_market,
            'name_schedule':name_schedule,
            'user_id': user.user_id
        }


        passRequestMarket(accessToken,data).then(response => {
          if(response["ok"]===false){
            enqueueSnackbar(response["message"],{variant:'error',anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center',
          },});
          }else {
            var market_pass_request_id = response["market_pass_request_id"];
            history.push(`/pdf/${market_pass_request_id}`);
          }
          

            
        })

  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Horarios Disponibles</TableCell>
            <TableCell align="center">Pases solicitados</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {counterMarkets.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name_schedule}
              </TableCell>
              <TableCell align="center">{row.count_aforo}</TableCell>
              <TableCell align="center">
                  <button className="btn btn-primary" onClick={()=>  {handleClick(row.id,row.name_schedule)}} >generar pdf</button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
