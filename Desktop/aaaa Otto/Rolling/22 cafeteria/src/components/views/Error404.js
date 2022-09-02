import React from 'react';
import error404 from "../img/error404.png"

const Error404 = () => {
    return (
        <div className='bg-black text-center'>
            <img src={error404} alt="error404" />
        </div>
    );
};

export default Error404;