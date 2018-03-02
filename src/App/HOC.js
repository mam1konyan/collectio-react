import React from 'react';
import sizeMe from 'react-sizeme';
import App from './Components/App';

function MyComponent({ size }) {

    return (
        <App windowSize={size} />
    )
}

export default sizeMe()(MyComponent);