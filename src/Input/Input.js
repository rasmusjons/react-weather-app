import React from 'react';
import display from '../DisplayApi/DisplayApi';

const InputField = props => {
    const style = {
        background: 'white',
        width: '150px',
        height: '30px',
        padding: '10px',
        cursor: 'pointer',
        margin: 'auto',
        display: 'block',
        marginTop: '15px',
        background: 'rgb(235, 229, 229)'
    };

    return (
        <input
            style={style}
            onBlur={props.blur}
            placeholder="Enter a city"
        ></input>
    );
};

export default InputField;
