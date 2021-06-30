import React, { useEffect, useState, forwardRef } from 'react';
import { CssBaseline, Grid, Snackbar, Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import TodoList from './TodoList';
import TodoAddButton from './TodoAddButton';
import TodoDialog from './TodoDialog';
import { fetchTodos } from '../redux/actions/actionTodos';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

// Transition component to animate the entrance of the Snackbar
// eslint-disable-next-line react/display-name
const Transition = forwardRef((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Slide direction="up" ref={ref} {...props} />
));

const App = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [dialogProps, setDialogProps] = useState({});
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddClick = () => {
    setDialogProps({});
    setDialogType('add');
    setShowDialog(true);
  };

  const renderDialog = (
    <TodoDialog
      open={showDialog}
      type={dialogType}
      handleOpen={setShowDialog}
      showSnackbar={setShowSnackbar}
      {...dialogProps}
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
      message={
        dialogType === 'add'
          ? 'TODO added successfully.'
          : 'TODO edited successfully.'
      }
    />
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <Grid className={classes.root} container justify="center" align="center">
        <Grid item xs={12} align="right">
          <TodoAddButton handleClick={handleAddClick} />
        </Grid>
        <Grid item xs={12} sm={10} md={8}>
          <TodoList
            handleShowDialog={setShowDialog}
            handleSetDialogProps={setDialogProps}
            handleSetDialogType={setDialogType}
          />
        </Grid>
      </Grid>
      {renderDialog}
      {renderSnackbar}
    </>
  );
};

export default App;
