import React from 'react';

import './style.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    if(props.execute) {
        return(
            <button type="submit" className="component-button" onClick={props.execute}>{props.content}</button>
        );
    }
    return(
        <button className="component-button">{props.content}</button>
    );
}