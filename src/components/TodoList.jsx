import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { List } from '@material-ui/core';
import PropType from 'prop-types';
import Todo from './Todo';
import { deleteTodo } from '../redux/actions/actionTodos';

const TodoList = (props) => {
  const dispatch = useDispatch();

  const handleDelete = (index) => () => {
    dispatch(deleteTodo(index));
  };

  const setDialogProps = (index) => () => {
    props.handleSetDialogProps(props.todos[index]);
    console.log('props going to dialog: ', props.todos[index]);
  };

  const createItems = ({ todos, handleShowDialog, handleSetDialogType }) =>
    todos.map((params, index) => {
      return (
        <Todo
          handleDelete={handleDelete(index)}
          showDialog={handleShowDialog}
          setDialogProps={setDialogProps(index)}
          setDialogType={() => {
            handleSetDialogType('edit');
          }}
          key={index}
          {...params}
        />
      );
    });

  return <List>{createItems({ ...props })}</List>;
};

const mapStateToProps = (state) => ({
  todos: state.todos.values,
});

TodoList.propTypes = {
  todos: PropType.arrayOf(
    PropType.shape({
      name: PropType.string.isRequired,
      description: PropType.string.isRequired,
      writtenBy: PropType.string,
      completedBy: PropType.string,
      completed: PropType.bool.isRequired,
    }),
  ),
  handleSetDialogProps: PropType.func.isRequired,
};

export default connect(mapStateToProps)(TodoList);
