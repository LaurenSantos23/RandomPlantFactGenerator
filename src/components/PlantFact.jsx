import React from 'react';
import './plantFact.css';

export default class PlantFact extends React.Component {
    render() {
        return (
            <div className="fact">
                {this.props.fact}
            </div>
        );
    }
    
};