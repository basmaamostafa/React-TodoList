import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { items, handleDelete } = this.props;
    return (
      <ul className="list-group mt-5">
        {items.map((item) => {
          return (
            <TodoItem
              // key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
            />
          );
        })}
      </ul>
    );
  }
}
