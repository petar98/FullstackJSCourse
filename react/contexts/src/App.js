import React from 'react';
import './App.css';
import {themes, ThemeContext} from './theme-context'
import {UserContext} from './user-context'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {
				name: 'Site Admin'
			},
			theme: {
				name: 'Dark Theme'
			}
		}
	}

  	render() {
    	return (
      		<React.Fragment>
				<UserContext.Provider value={{name: this.state.user.name}}>
					<Toolbar/>
				</UserContext.Provider>
				<ThemeContext.Provider value={themes.light.name}>
					<Toolbar/>
				</ThemeContext.Provider>
			</React.Fragment>
    	);
  	}
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  	render() {
		return (
			<React.Fragment>
				<UserContext.Consumer>
					{ user => <h3> {user.name} </h3> }
				</UserContext.Consumer>
				<ThemeContext.Consumer>
					{ theme => <h3>{theme.name}</h3> }
				</ThemeContext.Consumer>
			</React.Fragment>
		);
	}
}

export default App;