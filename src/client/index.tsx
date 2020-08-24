import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import { WelcomeHeader } from './Header';
import ContentBody from './body/ContentBody';

const App: React.FC = () => {

  const [username, setUsername] = useState<string | null>(null);
  useEffect(
    () => {
      fetch('/api/getUsername')
        .then(res => res.json())
        .then(user => setUsername( user.username ));
    }
  ), [];
  
  return (
    <div>
      <WelcomeHeader />
      {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
      <ContentBody />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
