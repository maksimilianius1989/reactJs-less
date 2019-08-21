import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js';

ReactDom.render(<App name="hello" age={1}/>, document.querySelector('#app'));