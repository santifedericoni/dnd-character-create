import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import axios from 'axios';

// ROUTE 0 - THIS IS THE BEGINNING
// QUICKVIEW - INVENTORY - DETAILS NOTES

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      flexGrow: 1,
    },
  },
  table: {
    minWidth: 700,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function CharacterDetailsNotes(props) {
  console.log(props)
  const [notes, setNotes] = useState(props.characterObject.note || "");
  const classes = useStyles();

  const updateNotes = (val) => {
    props.setCharacterState( {        
        ...props.characterObject, 
          notes: notes
    }, []) 
  }

const save = (val) => {
  console.log('props',props)
  axios.post(`/api/character/notes`, { props })
  .then((res) => {
});
}



  return (
    <React.Fragment>
      <Container maxWidth="xs">
        <form className={classes.root} noValidate autoComplete="off" centered >
          <div>
            <TextField
              id="outlined-multiline-static"
              fullWidth={true}
              size="medium"
              label="Notes"
              multiline
              rows={15}
              onChange={(event) => setNotes(event.target.value)}
              onBlur= {(event) => updateNotes(notes)}
              defaultValue= {props.characterObject.notes}
              variant="outlined"
            />
          </div>
        </form>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={save}
        >
          Save
        </Button>
      </Container>
    </React.Fragment>
  );
}
