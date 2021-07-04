import React from "react";
import { Component } from "react"
// import "./counter.css";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    count: 0,
    Fa: false,
    imageUrl: "https://picsum.photos/200",
    tags: [],
  };


  renderTags() {
    if (this.state.tags.length === 0) return <p>There ae no tags!</p>;
  }

  handleIncrement = (product) => {
    console.log(product);

    this.setState({
      count: this.state.count + 1,
    });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  }

  handleDecrease = () => {

    this.setState({
      count: this.state.count - 1,
    });
  };

  formatCount = () => {

    const { count } = this.state;

    return count === 0 ? "Zero" : count;

  }

  render() {
    console.log("props:", this.props);

    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className="number">{this.formatCount()}</span>
        <button onClick={this.doHandleIncrement} className="btn">
          Increament
        </button>
        <button onClick={this.handleDecrease} className="btn">
          Decrease
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

      </div>
    );
  }

}

export default Counter;