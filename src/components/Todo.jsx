/**
 * A simple TODO item made by using Material UI's ListItem component
 */

import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AssignmentRounded, SettingsRounded } from '@material-ui/icons';
import PropType from 'prop-types';

const useStyles = makeStyles((theme) => ({
  todoItem: (props) => ({
    backgroundColor: props.completed ? 'green' : 'red',
    color: '#eee',
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
    borderRadius: '7px',
  }),
  itemText: {
    marginRight: theme.spacing(6),
  },
}));

const Todo = (props) => {
  const { name, description } = props;
  const classes = useStyles(props);

  return (
    <>
      <ListItem className={classes.todoItem}>
        <ListItemIcon>
          <AssignmentRounded />
        </ListItemIcon>
        <ListItemText
          className={classes.itemText}
          primary={name}
          secondary={description}
          secondaryTypographyProps={{ noWrap: true, paragraph: true }}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Edit TODO">
            <SettingsRounded />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};

Todo.propTypes = {
  name: PropType.string.isRequired,
  description: PropType.string.isRequired,
  completed: PropType.bool,
};

Todo.defaultProps = {
  description: false,
};

export default Todo;
