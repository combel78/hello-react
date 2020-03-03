import * as React from 'react';
import * as ReactDOM from 'react-dom';

const HelloReact = () => {
    return (
        <h1>Hello React!</h1>
    );
}

ReactDOM.render(
    <HelloReact />,
    document.querySelector('#root')
);