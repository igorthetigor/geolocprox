import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import { WelcomeHeader } from './Header';
import ContentBody from './body/ContentBody';

import './App.css';

const App: React.FC = () => {

  const [username, setUsername] = useState<string | null>(null);
  
  return (
    <div>
      <WelcomeHeader />
      <ContentBody />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
