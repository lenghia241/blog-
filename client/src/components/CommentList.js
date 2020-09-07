import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentList({ comments }) {
	const renderComment = comments.map((comment) => (
		<li key={comment.id}>{comment.content}</li>
	));

	return <ul>{renderComment}</ul>;
}

export default CommentList;
