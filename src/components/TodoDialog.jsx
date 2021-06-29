/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import CustomizedDialogTitle from './CustomizedDialogTitle';
import TodoForm from './TodoForm';

// Transition component to animate the entrance of the dialog
// eslint-disable-next-line react/display-name
const Transition = forwardRef((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Slide direction="up" ref={ref} {...props} />
));

const TodoDialog = (props) => {
  const { open, handleOpen, name, type } = props;
  const theme = useTheme();
  // will be true when the screen size is equal to or lower than 'sm'
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="lg"
        fullWidth
        fullScreen={fullScreen}
        onClose={() => {
          handleOpen(false);
        }}
        aria-labelledby="edit-todo-dialog"
        aria-describedby="edit todo"
      >
        <CustomizedDialogTitle
          id="edit-todo-dialog-title"
          onClose={() => {
            handleOpen(false);
          }}
        >
          Edit {name}
        </CustomizedDialogTitle>
        <DialogContent>
          <TodoForm
            closeDialog={() => {
              handleOpen(false);
            }}
            type={type}
            {...props}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

TodoDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default TodoDialog;
