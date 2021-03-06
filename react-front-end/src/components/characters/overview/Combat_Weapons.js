import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Popup from './pop-up';

// ROUTE 0 - THIS IS THE BEGINNING
// QUICKVIEW - INVENTORY - DETAILS NOTES
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    backgroundColor: theme.palette.common.white,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CharacterInventory(props) {
  const classes = useStyles();
  const [data, setData] = useState({ weapons: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `/api/item/weapon/${props.characterObject.id}`
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Weapons</StyledTableCell>
                <StyledTableCell align="justify">ATK Bonus</StyledTableCell>
                <StyledTableCell align="justify">Damage</StyledTableCell>
                <StyledTableCell align="justify">Attack Roll</StyledTableCell>
                <StyledTableCell align="justify">Damage Roll</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.weapons.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="justify" component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="justify">+5</StyledTableCell>
                  <StyledTableCell align="justify">
                    {row.damage_dice}
                  </StyledTableCell>
                  <StyledTableCell align="justify">
                    <Popup
                      strength={props.characterObject.strength}
                      true={1}
                      damage={row.damage_dice}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="justify">
                    <Popup
                      strength={props.characterObject.strength}
                      true={2}
                      damage={row.damage_dice}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  );
}
