import React from 'react';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  addButton: {
    margin: theme.spacing(1),
  },
}));

const TodoAddButton = () => {
  const classes = useStyles();

  return (
    <Fab className={classes.addButton} color="primary" aria-label="add TODO">
      <AddIcon />
    </Fab>
  );
};

export default TodoAddButton;
