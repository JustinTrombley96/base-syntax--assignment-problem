import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput';
import UserInput from './components/UserInput';

class App extends Component {
	state = {
		profile : [ { username: 'PoetrySkeleton', age: 20, class: 'Witch' } ],
	};

	switchUsernameNameHandler = newUsername => {
		this.setState({
			profile : [ { username: newUsername, age: 20, class: 'Witch' } ],
		});
	};

	render() {
		return (
			<div className='App'>
				<UserInput />
				<UserOutput changed={this.switchUsernameNameHandler} />
			</div>
		);
	}
}

export default App;
