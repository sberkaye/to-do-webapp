import React, { useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import TodoList from './TodoList';
import TodoAddButton from './TodoAddButton';
import { fetchTodos } from '../redux/actions/actionTodos';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <Grid className={classes.root} container justify="center" align="center">
        <Grid item xs={12} align="right">
          <TodoAddButton />
        </Grid>
        <Grid item xs={12} sm={10} md={8}>
          <TodoList />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
