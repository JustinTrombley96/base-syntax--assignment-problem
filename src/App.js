import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput';
import UserInput from './components/UserInput';

class App extends Component {
	state = {
		username    : 'MayaZarZar',
		class       : 'Witch',
		newUsername : '',
	};

	usernameChangedHandler = event => {
		this.setState({ newUsername: event.target.value });
	};
	render() {
		return (
			<div className='App'>
				<UserInput changed={this.usernameChangedHandler} />
				<UserOutput
					username={this.state.username}
					class={this.state.class}
					newUsername={this.state.newUsername}
				/>
				<UserOutput
					username={this.state.username}
					class={this.state.class}
					newUsername={this.state.newUsername}
				/>
				<UserOutput
					username={this.state.username}
					class={this.state.class}
					newUsername={this.state.newUsername}
				/>
				<UserOutput username='JimmyDean' />
			</div>
		);
	}
}

export default App;
