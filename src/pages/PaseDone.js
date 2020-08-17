import React, { useEffect, useState } from 'react';
import ListHorariosDisponibles from '../components/ListHorariosDisponibles';
import { TableContainer } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const PaseDone = (props) => {
    const id_mercado = props.match.params.id_mercado;

    return(
        <TableContainer component={Paper}>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Mercado Seguro</h2>
                </div>
            </div>
            <ListHorariosDisponibles id_mercado={id_mercado} />
        </TableContainer>
            
        
    )
}
export default PaseDone;