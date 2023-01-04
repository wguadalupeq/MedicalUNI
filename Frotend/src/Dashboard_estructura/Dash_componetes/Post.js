import React from 'react';
import posts from './../Dash_data/posts';
import {useParams, Redirect} from 'react-router-dom';

const Post = () => {
	const {id} = useParams();

	return (
		<>
			{posts[id-1] ?
				<div>
					<h1>{posts[id-1].titulo}</h1>
					<p>{posts[id-1].texto}</p>
					<div>{posts[id-1].componente}</div>
				</div>
			:
				<Redirect to="/" />
			}
		</>
	);
}
 
export default Post;