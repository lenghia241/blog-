import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentList({ postId }) {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchComments = async () => {
			const res = await axios.get(
				`http://localhost:4001/posts/${postId}/comments`
			);

			setComments(res.data);
		};

		fetchComments();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderComment = comments.map((comment) => (
		<li key={comment.id}>{comment.content}</li>
	));

	return <ul>{renderComment}</ul>;
}

export default CommentList;
