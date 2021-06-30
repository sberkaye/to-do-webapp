/* eslint-disable react/display-name */
import React from 'react';
import {
  makeStyles,
  FormLabel,
  Button,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import { useFormik } from 'formik';
import { addTodoRequest, editTodoRequest } from '../redux/actions/actionTodos';

// styling for form components
const useStyles = makeStyles((theme) => ({
  textField: {
    boxShadow: 'none',
    border: '1px solid #ccc',
    width: '90%',
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  form: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    marginTop: '0',
  },
  formControl: {
    display: 'flex',
    padding: theme.spacing(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  formLabel: {
    width: '12%',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      width: '25%',
    },
  },
  error: {
    fontSize: '0.8rem',
    color: theme.palette.error.main,
    display: 'inline-block',
    textAlign: 'right',
    margin: theme.spacing(1),
  },
  submitButton: {
    color: '#fff',
  },
  cancelButton: {
    boxShadow: '0 2px 2px #bbb',
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
  },
  textControls: {
    display: 'flex',
    direction: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
}));

// form validation method to use in formik
const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name can't be empty.";
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.description) {
    errors.description = "description can't be empty.";
  } else if (values.description.length < 10) {
    errors.description = 'Must be at least 10 characters';
  }

  return errors;
};

const TodoForm = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    closeDialog,
    showSnackbar,
    completed,
    writtenBy,
    completedBy,
    type,
    name,
    description,
    id,
  } = props;

  const formik = useFormik({
    initialValues: {
      name,
      description,
      completed,
      writtenBy,
      completedBy,
    },
    enableReinitialize: true,
    validate,
    onSubmit: (val) => {
      closeDialog();
      // dispatch actions according to the type of the form
      if (type === 'add') {
        dispatch(addTodoRequest(val));
      } else if (type === 'edit') {
        dispatch(editTodoRequest(id, val));
      }
      showSnackbar(true);
    },
  });

  // helper method to show proper labels in the form
  // e.g. writtenBy -> WRITTEN BY
  const handleLabel = (label) => {
    let newLabel = label.replace(/([A-Z])/g, ' $1').trim(); // regex to put a space in front of capitalized letter
    newLabel = newLabel.toUpperCase();
    return newLabel;
  };

  // create an input field in the form, use formik to handle
  // onChange events and validation
  const renderFormInput = (label) => (
    <Grid item container direction="row" alignItems="center">
      <Grid item xs={3} sm={2}>
        <FormLabel className={classes.formLabel} htmlFor={label}>
          {handleLabel(label)}
        </FormLabel>
      </Grid>
      <Grid item xs={8}>
        <TextField
          className={classes.textField}
          id={label}
          name={label}
          variant="outlined"
          type="text"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values[label]}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        {formik.touched[label] && formik.errors[label] ? (
          <div className={classes.error}>{formik.errors[label]}</div>
        ) : null}
      </Grid>
    </Grid>
  );

  // return input fields, checkbox to check if the todo is completed
  // also another input field if the todo is completed to set completedBy
  return (
    <>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <Grid container>
          {renderFormInput('name')}
          {renderFormInput('description')}
          {renderFormInput('writtenBy')}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.completed}
                  name="completed"
                  color="primary"
                  onChange={() => {
                    formik.setFieldValue('completed', !formik.values.completed);
                  }}
                />
              }
              label="Completed"
            />
          </Grid>
          {formik.values.completed && renderFormInput('completedBy')}
        </Grid>
        <div className={classes.buttonContainer}>
          <Button className={classes.cancelButton} onClick={closeDialog}>
            Cancel
          </Button>
          <Button
            className={classes.submitButton}
            type="submit"
            variant="contained"
            color="primary"
          >
            {type === 'add' ? 'Add' : 'Save'}
          </Button>
        </div>
      </form>
    </>
  );
};

TodoForm.propTypes = {
  name: PropType.string,
  description: PropType.string,
  completed: PropType.bool,
  writtenBy: PropType.string,
  completedBy: PropType.string,
  closeDialog: PropType.func.isRequired,
  showSnackbar: PropType.func.isRequired,
  type: PropType.string.isRequired,
  id: PropType.number,
};

TodoForm.defaultProps = {
  name: '',
  description: '',
  completed: false,
  completedBy: '',
  writtenBy: '',
};

export default TodoForm;
