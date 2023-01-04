import React from 'react';
import posts from './../Dash_data/posts';
import {NavLink} from 'react-router-dom';

const Blog = () => {
	return (
		<div>
			<h2>Consultas del Usuario</h2>
			<ul>
				{posts.map((post) => {
					return (
						<li key={post.id}>
							<NavLink className="text-decoration-none" to={`/post/${post.id}`}>
								<h5>{post.titulo}</h5>
								</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	);
}
 
export default Blog;