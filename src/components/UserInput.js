import React, { Component } from 'react';

export class UserInput extends Component {
	render() {
		return (
			<div>
				<input onChange={props.changed} />
			</div>
		);
	}
}

export default UserInput;
