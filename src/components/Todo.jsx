/**
 * A simple TODO item made by using Material UI's ListItem component
 */

import React, { useState, forwardRef } from 'react';
import clsx from 'clsx';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
  Snackbar,
  Slide,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  AssignmentRounded,
  SettingsRounded,
  DeleteRounded,
} from '@material-ui/icons';
import PropType from 'prop-types';
import TodoDialog from './TodoDialog';

const useStyles = makeStyles((theme) => ({
  todoItem: (props) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: props.completed
      ? theme.palette.success.main
      : theme.palette.common.white,
    color: props.completed ? '#eee' : '#333',
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
    borderRadius: '7px',
  }),
  primaryText: {
    flexGrow: 3,
    maxWidth: '60%',
  },
  secondaryText: (props) => ({
    display: props.writtenBy ? 'flex' : 'none',
    flexGrow: 1,
    maxWidth: '15%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }),
  itemText: (props) => ({
    marginRight: theme.spacing(1),
    color: props.completed ? '#eee' : '#333',
  }),
  textContainer: {
    display: 'flex',
    width: '90%',
  },
}));

// eslint-disable-next-line react/display-name
const Transition = forwardRef((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Slide direction="up" ref={ref} {...props} />
));

const Todo = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const { name, description, completed, writtenBy, completedBy } = props;
  const classes = useStyles(props);

  const renderDialog = (
    <TodoDialog
      open={showDialog}
      handleOpen={setShowDialog}
      showSnackbar={setShowSnackbar}
      {...props}
    />
  );

  const renderSnackbar = (
    <Snackbar
      open={showSnackbar}
      onClose={() => {
        setShowSnackbar(false);
      }}
      autoHideDuration={1000}
      TransitionComponent={Transition}
      message="TODO edited successfully"
    />
  );

  return (
    <>
      <ListItem className={classes.todoItem} component={Paper}>
        <ListItemIcon>
          <AssignmentRounded />
        </ListItemIcon>
        <div className={classes.textContainer}>
          <ListItemText
            className={clsx(classes.itemText, classes.primaryText)}
            primary={`${name}${completed ? ' - COMPLETED' : ''}`}
            secondary={description}
            secondaryTypographyProps={{
              noWrap: true,
              className: classes.itemText,
            }}
          />
          <div className={classes.secondaryText}>
            {writtenBy && (
              <ListItemText
                secondary={`Written By: ${writtenBy}`}
                secondaryTypographyProps={{
                  noWrap: true,
                  className: classes.itemText,
                }}
              />
            )}
            {completedBy && (
              <ListItemText
                secondary={`Completed By: ${completedBy}`}
                secondaryTypographyProps={{
                  noWrap: true,
                  className: classes.itemText,
                }}
              />
            )}
          </div>
        </div>
        <ListItemSecondaryAction className={classes.secondaryAction}>
          <IconButton
            onClick={() => {
              setShowDialog(true);
            }}
            aria-label="Edit TODO"
          >
            <SettingsRounded />
          </IconButton>
          <IconButton aria-label="Delete TODO">
            <DeleteRounded />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {renderDialog}
      {renderSnackbar}
    </>
  );
};

Todo.propTypes = {
  name: PropType.string.isRequired,
  description: PropType.string.isRequired,
  completed: PropType.bool.isRequired,
  writtenBy: PropType.string,
  completedBy: PropType.string,
  index: PropType.number.isRequired,
};

export default Todo;
