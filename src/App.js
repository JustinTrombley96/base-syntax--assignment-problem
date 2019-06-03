import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput';

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
				<UserOutput changed={this.switchUsernameNameHandler} />
			</div>
		);
	}
}

export default App;
