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
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}

export default InputTodo

// import React from "react"
// import styles from "./TodoItem.module.css"

// class TodoItem extends React.Component {

//   state = {
//     editing: false
//   }

//   handleEditing = () => {
//     this.setState({
//       editing: true
//     })
//   } 

//   handleUpdatedDone = (event) => {
//     if (event.key === "Enter" ) {
//       this.setState({ editing: false });
//     }
//   }

//   // componentWillUnmount() {
//   //   console.log("Cleaning up...")
//   // }
    
//   render() {

//     const completedStyle = {
//       fontStyle: "italic",
//       color: "#595959",
//       opacity: 0.4,
//       textDecoration: "line-through",
//     }

//     const { completed, id, title } = this.props.todo
    
//     let viewMode = {};
//     let editMode = {};

//     if (this.state.editing) {
//       viewMode.display = 'none';
//     } else {
//       editMode.display = 'none';
//     }

//     return (
//       <li className={styles.item}>
//         <div onDoubleClick={this.handleEditing} style={viewMode}>
//           <input 
//             type="checkbox" 
//             className={styles.checkbox}
//             checked={completed}  
//             onChange={() => this.props.handleChangeProps(id)}
//           />
//           <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
//           <span style={completed ? completedStyle : null} >{title}</span>
//         </div>
//         <input 
//           type="text" 
//           style={editMode} 
//           className={styles.textInput} 
//           value={title} 
//           onChange={(e)=> {this.props.setUpdate(e.target.value, id)}}
//           onKeyDown={this.handleUpdatedDone}
//         />
//       </li>
//     )
//   }
// }

// export default TodoItem