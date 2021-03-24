import React from 'react';
import { PostForm } from '../../components';

const Post = (props) => {
	return (
		<>
			<PostForm currentUser={props.currentUser} token={props.token}></PostForm>
		</>
	);
};

export default Post;
