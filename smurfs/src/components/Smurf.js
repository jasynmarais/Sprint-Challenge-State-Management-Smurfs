import React from 'react';
import { connect } from 'react-redux';

const Smurf = ({ error, smurf }) => {
    return (
        <div>
            {error ? (<p>{error}</p>) : (
                <div>
                    <h2>{smurf.name}</h2>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                </div>
            )}
        </div>
    );
};

export default connect(state => state)(Smurf);