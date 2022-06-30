import React from 'react'


class InputTodo extends React.Component{
  state = {
    title: ""
  };


  handleSubmit = e=>{
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
  onChange = e => {
  this.setState({

    [e.target.name]: e.target.value  });};


  render(){
    return(
      <form className="form-container" onSubmit={this.handleSubmit} >
          <input type="text"
           placeholder="Add Todo..."
           name="title"
           value={this.state.title}
          onChange={this.onChange}/>
          <button> Submit </button>
      </form>
    )
  }
}

export default InputTodo
