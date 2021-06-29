import React from 'react';
import { connect } from 'react-redux';
import { List } from '@material-ui/core';
import PropType from 'prop-types';
import Todo from './Todo';

const createItems = (todos) =>
  todos.map((params, index) => <Todo key={index} index={index} {...params} />);

const TodoList = (props) => <List>{createItems(props.todos)}</List>;

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
};

export default connect(mapStateToProps)(TodoList);
