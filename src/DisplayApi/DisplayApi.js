import React from 'react';

const display = props => {
    const style = {
        background: 'white',
        width: '173px',
        height: '30px',
        padding: '5px',
        cursor: 'pointer',
        display: 'block',
        border: '2px',
        margin: 'auto',
        marginTop: '15px',
        background: 'rgb(235, 229, 229)'
    };

    return (
        <button style={style} onClick={props.click} onSubmit={props.click2}>
            {' '}
            Click me
        </button>
    );
};

export default display;
