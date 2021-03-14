import React from 'react';
import './Spinner.scss';

const Spinner: React.FC = () => {
    return (
        <div className="Spinner">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Spinner;
