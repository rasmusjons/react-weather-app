import React from 'react';

const displayImage = props => {
    const style = {
        width: '50px',
        height: '50px'
    };

    return <img style={style} src={props.src} alt="weather"></img>;
};

export default displayImage;
