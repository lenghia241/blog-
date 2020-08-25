import React, { useState } from 'react';
import axios from 'axios';

function PostCreate() {
	const [title, setTitle] = useState('');

	const onSubmit = async (event) => {
		event.preventDefault();

		await axios.post('http://localhost:4000/posts', {
			title,
		});

		setTitle('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='form-group'>
				<label htmlFor=''>Title</label>
				<input
					className='form-control'
					type='text'
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
			</div>
			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	);
}

export default PostCreate;
