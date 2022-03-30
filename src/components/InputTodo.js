import React, { Component } from 'react'

class InputTodo extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title: ""
    }
  }

//form event
  onChange = e => {
    this.setState({
    // title: e.target.value, use bellow code for different input elements
      [e.target.name]: e.target.value,
    });
  };

//To handle the submit button
  handleSubmit = e => {
    e.preventDefault()
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder="Add todo..."
          value={this.state.title}
          onChange={this.onChange}
          name="title"
          />
          <button>Submit</button>
      </form>
    )
  }
}

export default InputTodo