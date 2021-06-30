import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { List } from '@material-ui/core';
import PropType from 'prop-types';
import Todo from './Todo';
import { deleteTodoRequest } from '../redux/actions/actionTodos';

const TodoList = (props) => {
  const dispatch = useDispatch();

  // using closures to create specific versions of same type of functions
  const handleDelete = (index) => () => {
    dispatch(deleteTodoRequest(index));
  };

  const setDialogProps = (index) => () => {
    props.handleSetDialogProps(props.todos[index]);
  };

  // map todos in redux store to Todo components
  const createItems = ({ todos, handleShowDialog, handleSetDialogType }) =>
    todos.map((params, index) => {
      return (
        <Todo
          handleDelete={handleDelete(params.id)}
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

// get todos from the store
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
