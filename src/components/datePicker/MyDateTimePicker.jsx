import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './myDateTimePicker.css';

const useStyles = makeStyles((theme) => ({
  picker_container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  picker_date: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color:'red',
  },

}));

export default function DateAndTimePickers(props) {
  const classes = useStyles();
  return (
    <form className={classes.picker_container} noValidate>
      <TextField
        onChange = {(e) => {
          props.onChange(e.target.value);
        }}
        id="datetime-local"
        label={props.label}
        type="datetime-local"
        defaultValue="2021-01-01T10:30"
        className={classes.picker_date}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
