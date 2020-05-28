import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  table: {
    minWidth: 700,
  },
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  if (props.characterState[0]){
    return (
      <div className={classes.root}>
        {props.characterState[0].map((row) => (
              <ExpansionPanel key= {row.id}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
          <Typography className={classes.heading}>{row.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Grid item xs={2}>
          <img src={row.avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {row.character_class}</p><br/>
            <p>Level: {row.level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {row.race} </p><br/>
            <p>EXP:  {row.experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {row.background} </p><br/>
            <p>alignment:  {row.alignment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" to={'/character/' + row.id}>
                Full View
              </Link>{' '}
            </Typography>
              </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        ))}
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <p>Loading</p>
        <CircularProgress />
       </div>
    )
  }
}