import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

function PostList() {
	const [posts, setPosts] = useState({});

	const fetchPosts = async () => {
		const res = await axios.get('http://localhost:4000/posts');

		setPosts(res.data);
	};

	useEffect(() => {
		fetchPosts();
		return () => {};
	}, []);

	const renderPosts = () =>
		Object.values(posts).map((post) => (
			<div
				className='card d-flex flex-column justify-content-between'
				style={{ width: '30%', marginBottom: '20px' }}
				key={post.id}
			>
				<div className='card-body'>
					<h3>{post.title}</h3>
					<CommentList postId={post.id} />

					<CommentCreate postId={post.id} />
				</div>
			</div>
		));

	return (
		<div className='d-flex flex-row flex-wrap justify-content-between'>
			{renderPosts()}
		</div>
	);
}

export default PostList;
