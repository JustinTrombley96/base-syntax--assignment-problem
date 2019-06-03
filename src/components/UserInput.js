import React, { Component } from 'react';

const UserInput = props => {
	return (
		<div>
			<button onChange={props.changed} />
		</div>
	);
};

export default UserInput;
