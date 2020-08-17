import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import './Filtros.css';
import {searchInfoMarkets} from '../api/markets';
import {getAccessTokenApi} from '../api/auth';


export default function Filtros({setMarkets}) {
    const [data,setData]=useState('');

    const accessToken = getAccessTokenApi();

    const handleChange = (e) => {
        setData(e.target.value)
    }

    const handleClick = e => {
        e.preventDefault();
        searchInfoMarkets(accessToken,data).then(res =>{
            setMarkets(res["results"]);
            //setReloadMarkets(true);
        })
    }

    return (
        <form className="caja" noValidate autoComplete="off">
        <Input className="elemento" onChange={handleChange} placeholder="Busca tu mercado" inputProps={{ 'aria-label': 'description' }} />
            <div className="elemento">
                <button onClick={handleClick}  className="btn btn-primary btn-lg" style={{marginTop:20}}>
                    Buscar
                </button>
            </div>
        </form>
    );
}

// import React, { useEffect, useState } from 'react';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import './Filtros.css';
// import {
//     getDepartamentos,
//     getCiudades,
//     getDistritos,
//     FiltradoMercados} from '../api/markets';

// export default function Filtros({setListMarkets,setReloadMarkets}) {
//     const [departamentos,setDepartamentos] = useState([]);
//     const [ciudades,setCiudades] = useState([]);
//     const [distritos,setDistritos] = useState([]);
//     const [form,setForm] = useState({
//         'departamento':'',
//         'ciudad':'',
//         'distrito':''
//     });

//     const handleSelect = (e) => {        
//         setForm({
//             ...form,
//             [e.target.name]:e.target.value
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         FiltradoMercados(form).then(response => {
//             setListMarkets(response);
//             setReloadMarkets(true);
//         })
//     }
 
//     const departamentosProps = {
//         options: departamentos,
//         getOptionLabel: (option) => option.name,
//     };

//     const ciudadesProps = {
//         options: ciudades,
//         getOptionLabel: (option) => option.name,
//     };

//     const DistritosProps = {
//         options: distritos,
//         getOptionLabel: (option) => option.name,
//     };


//     useEffect(()=> {
//         getDepartamentos().then(response => {
//             setDepartamentos(response);
//         })
//     },[])

//     useEffect(()=> {
//         getDistritos().then(response => {
//             setDistritos(response);
//         })
//     },[])

//     useEffect(()=> {
//         getCiudades().then(response => {
//             setCiudades(response);
//         })
//     },[])

    
//   return (
//     <form className="caja" onSubmit={handleSubmit}>
//         <div className="elemento">
//             <Autocomplete
//                 {...departamentosProps}
//                 id="auto-highlight"
//                 autoHighlight
//                 onSelect={handleSelect}
//                 renderInput={(params) => <TextField {...params} label="Departamento" name="departamento" margin="normal" />}
//             />
//         </div>
      
//         <div className="elemento">
//             <Autocomplete
//                 {...ciudadesProps}
//                 id="auto-highlight"
//                 autoHighlight
//                 onSelect={handleSelect}
//                 renderInput={(params) => <TextField {...params}  name="ciudad" label="Ciudad" margin="normal" />}
//             />
//         </div>

//         <div className="elemento">
//             <Autocomplete
//                 {...DistritosProps}
//                 id="auto-highlight"
//                 autoHighlight
//                 onSelect={handleSelect}
//                 renderInput={(params) => <TextField {...params} name="distrito" label="Distrito" margin="normal" />}
//             />
//         </div>  

//         <div className="elemento">
//            <button className="btn btn-primary btn-lg" style={{marginTop:20}}>
//                Buscar
//            </button>
//         </div>
        
//     </form>
//   );
// }





