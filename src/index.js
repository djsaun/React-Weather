import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
