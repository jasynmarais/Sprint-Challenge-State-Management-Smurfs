import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

const SmurfList = ({ smurfsData }) => {
    return (
        <div>
            {smurfsData.map(smurf => {
                <Smurf key={smurf.name} smurf={smurf} />
            })}
        </div>
    );
};

export default connect(state => state)(SmurfList);