import React from 'react';
import './Error.sass';

const Error = () => {
    return (
        <div>
            <div className={"status-code"}>404</div>
            <div className={"status"}>Not Found</div>
        </div>
    );
};

export default Error;