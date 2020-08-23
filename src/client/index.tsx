import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { WelcomeHeader } from './Header';

export default class App extends Component {
  state:any = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <WelcomeHeader />
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
