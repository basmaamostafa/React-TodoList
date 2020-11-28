import React, { Component } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1 + Math.random(), title: "Attend Lec2" },
        { id: 1 + Math.random(), title: "Complete Lab 2" },
        { id: 1 + Math.random(), title: "Complete Bonus" },
      ],
      id: 1 + Math.random(),
      item: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    console.log(newItem);

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: 1 + Math.random(),
    });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };

  render() {
    return (
      <div style={{ background: "#F5F5F5" }}>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-center">Todo List </h3>
              <TodoList
                items={this.state.items}
                handleDelete={this.handleDelete}
              />
              <TodoForm
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Todo;
