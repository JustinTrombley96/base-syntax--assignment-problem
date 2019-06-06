import React from 'react';

const UserOutput = props => {
	return (
		<div className='UserOutput'>
			<p onClick={props.clicked}>
				My username is {props.username} and I am a class of {props.class}. The entered name is:{' '}
				{props.newUsername}
			</p>
			<p onClick={props.clicked}>
				My username is {props.username} and I am a class of {props.class}. The entered name is:{props.userInput}{' '}
				Got it memorized?
			</p>
		</div>
	);
};

export default UserOutput;
