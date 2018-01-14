import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import Mapp from './Mapp';
import registerServiceWorker from './registerServiceWorker';

render((
  <BrowserRouter>
    <Mapp />
  </BrowserRouter>
), document.getElementById('top'));

ReactDOM.render(<App />, document.getElementById('mid'));

ReactDOM.render(<div>Last Render line</div>, document.getElementById('last'));



registerServiceWorker();
