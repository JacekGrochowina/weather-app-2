import React from 'react';

const Form = props => {
    return (
        <div className="form">
            <div className="logo">
                <h1>Weather<span>App</span></h1>
            </div>

            <form>
                <input
                    type="text"
                    value={props.value}
                    onChange={props.change}
                    placeholder="Szukaj..."
                />
            </form>
        </div>
    );
}

export default Form;