import React from 'react';

import './style.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return(
        <button className="component-button">{props.content}</button>
    );
}