import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './MainApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
