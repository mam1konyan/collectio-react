import React from 'react';
import ReactDOM from 'react-dom';
import HOC from './HOC/HOC';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HOC />, document.getElementById('root'));
registerServiceWorker();
