import React from 'react';

const Form = props => {
    return (
        <div>
            <form onSubmit={props.submit}>
                <input
                    type="text"
                    value={props.value}
                    onChange={props.change}
                    placeholder="Wpisz miasto"
                />
                <button>Wyszukaj miasto</button>
            </form>
        </div>
    );
}

export default Form;