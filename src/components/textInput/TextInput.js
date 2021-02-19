import React from 'react';
import './TextInput.scss';

const TextInput = ({value, onChange, placeholder}) => {
    return (
        <div className="input-content">
            <input type="text" value={value} onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}

export default TextInput;
