import React from 'react';

const UserOutput = props => {
	return (
		<div className='UserOutput'>
			<p>
				My username is {props.username} and I am a class of {props.class}.
			</p>
			<p>
				My username is {props.username} and I am a class of {props.class}. Got it memorized?
			</p>
		</div>
	);
};

export default UserOutput;
