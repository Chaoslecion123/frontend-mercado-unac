import React, { useRef, useEffect, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
 import {pdf} from '../api/markets';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {getAccessTokenApi} from '../api/auth';


class ComponentToPrint extends React.Component {
    render() {
        const data = this.props.data;

      return (
            <>
                <Card style={{minWidth:250,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <CardContent>
                    <Typography style={{fontSize:14}} color="textSecondary" gutterBottom>
                    Mercado {data.horario}
                    </Typography>
                    <Typography variant="h5" component="h2">
                    Pase Generado nro {data.nro_pase}
                    </Typography>
                    <Typography style={{marginBottom: 12}} color="textSecondary">
                    {data.direccion_1} {data.direccion_2}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {data.nombre_completo}
                    <br />
                    {data.dni}
                    </Typography>
                </CardContent>
                </Card>
            </>
        
      );
    }
  }
 
const Example = (props) => {
    const [data,setData] = useState([])
    const market_pass_request_id = props.match.params.market_pass_request_id;
    localStorage.setItem("market_pass_request_id",market_pass_request_id);
    const accessToken = getAccessTokenApi();

    useEffect(() => {
        pdf(accessToken,market_pass_request_id).then(res => {
            setData(res);
        }) 
    },[market_pass_request_id])

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    
    return (
        <div>
            <ComponentToPrint data={data} ref={componentRef} />
            <Card style={{minWidth:250,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <CardActions>
                <Button onClick={handlePrint} size="small" color="primary">
                Descargar
                </Button>
            </CardActions>
            </Card>
        </div>
    );
    };

export default Example
