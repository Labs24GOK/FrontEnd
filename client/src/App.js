import React from 'react';
import Routes from './routes/Routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
// import './styles/global.scss'

library.add(faAngleLeft)


function App() {
  
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;

