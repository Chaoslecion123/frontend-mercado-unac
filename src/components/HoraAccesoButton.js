import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function HoraAccesoButton({horarios}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleClick = e => {
    console.log(e.target.value)
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <NativeSelect
          defaultValue={30}
          inputProps={{
          
            id: 'uncontrolled-native',
          }}
          onClickCapture={handleClick}
        >
          {horarios.map((horario) => (
            <option key={horario.id} value={horario.id}>inicio {horario.time_start} - fin {horario.time_end}</option>
          ))}
          
          {/* <option value={20}>Twenty</option>
          <option value={30}>Thirty</option> */}
        </NativeSelect>
        <FormHelperText>Horarios</FormHelperText>
      </FormControl>
    </div>
  );
}