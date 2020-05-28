import React, {useEffect , useState} from 'react';
import ExpansionPanel from '../components/panel';
import Button from '../components/addButton';
import { Container } from '@material-ui/core';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';
const ShowCharacterByUser = (props) => {

  const [characterState , setCharacterState] = React.useState([])
  const user = localStorage.getItem('userId');
  const getCharacterById = () => {
    axios.get(`/api/character/user/${user}` )
      .then((response) => {
        setCharacterState({
          ...characterState,
          ...response.data.characters
        });
      })
    }
    useEffect(() => {
      getCharacterById();
    }, []);

  return (
    <div className="App">
        <Container>
        <h4>View your characters, or create a new one! </h4>
          <ExpansionPanel characterState = {characterState} setCharacterState = {setCharacterState} />
         <Link to="/createCharacter" > <Button>Link</Button> </Link>
        </Container>
    </div>
  );
};

export default ShowCharacterByUser;