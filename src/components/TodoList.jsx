import React from 'react';
import { connect } from 'react-redux';
import { List } from '@material-ui/core';
import PropType from 'prop-types';
import Todo from './Todo';

const createItems = (todos) =>
  todos.map(({ name, description, completed }, index) => (
    <Todo
      key={index}
      completed={completed}
      name={name}
      description={description}
    />
  ));

const TodoList = (props) => <List>{createItems(props.todos)}</List>;

const mapStateToProps = (state) => ({
  todos: state.todos.values,
});

TodoList.propTypes = {
  todos: PropType.arrayOf(PropType.shape),
};

export default connect(mapStateToProps)(TodoList);
