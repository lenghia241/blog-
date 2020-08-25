import React, { useState } from 'react';
import axios from 'axios';

function CommentCreate({ postId }) {
	const [content, setContent] = useState('');

	const onSubmit = async (event) => {
		event.preventDefault();
		await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
			content,
		});

		setContent('');
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='comment'>New Comment</label>
					<input
						type='text'
						className='form-control'
						id='comment'
						onChange={(e) => setContent(e.target.value)}
						value={content}
					/>
				</div>
				<button type='submit' className='btn btn-secondary'>
					Post comment
				</button>
			</form>
		</div>
	);
}

export default CommentCreate;
