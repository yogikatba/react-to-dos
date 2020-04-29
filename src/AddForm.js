import React,{useState} from 'react';

const AddForm = (props) =>{
	const [state,setState]=useState({
		content:''
	})
	const handleChange=(e)=>{
		setState({content : e.target.value})
	}
	const handleSubmit=(e)=>{
		e.preventDefault();
		props.addTodo(state);
		setState({content:''})
	}
		return(
			<div>
			<form onSubmit={handleSubmit}>
				<label>Add todos</label>
				<input type='text' onChange={handleChange} value={state.content}/>
				</form>
			</div>
			)
	
}

export default AddForm;