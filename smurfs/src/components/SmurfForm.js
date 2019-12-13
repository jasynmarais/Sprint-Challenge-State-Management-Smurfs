import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfData } from '../actions';

const initialFormState = { name: '', age: '', height: '' };

const SmurfsForm = ({ postSmurfData }) => {
    const [formValues, setFormValues] = useState(initialFormState);

    const onInputChange = e => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const onFormSubmit = e => {
        e.preventDefault();
        if (!formValues.name || !formValues.age || !formValues.height) return;
        postSmurfData(formValues);
        setFormValues(initialFormState);
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input
                    onChange={onInputChange}
                    value={formValues.name}
                    type='text'
                    name='name'
                    placeholder='Name'
                    />
                <input
                    onChange={onInputChange}
                    value={formValues.age}
                    type='text'
                    name='age'
                    placeholder='Age'
                    />
                <input
                    onChange={onInputChange}
                    value={formValues.height}
                    type='text'
                    name='height'
                    placeholder='Height'
                    />
                    <button>Add Smurf</button>
            </form>
        </div>
    );
};

export default connect(state => state, { postSmurfData })(SmurfsForm);