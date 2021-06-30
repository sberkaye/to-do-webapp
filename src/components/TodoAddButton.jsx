/**
 * A basic floating action button to open up a dialog to add new todos
 */
import React from 'react';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  addButton: {
    margin: theme.spacing(1),
  },
}));

const TodoAddButton = (props) => {
  const classes = useStyles();

  return (
    <Fab
      className={classes.addButton}
      onClick={props.handleClick}
      color="primary"
      aria-label="add TODO"
    >
      <AddIcon />
    </Fab>
  );
};

TodoAddButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default TodoAddButton;
