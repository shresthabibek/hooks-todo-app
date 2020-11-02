import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({ id, editTodo, task, toggleEditForm }) {
	const [ value, handleChange, reset ] = useInputState(task);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				editTodo(id, value);
				reset();
				toggleEditForm();
			}}
		>
			<TextField margin="normal" value={value} onChange={handleChange} fullwidth />
		</form>
	);
}

export default EditTodoForm;
