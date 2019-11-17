import React from 'react';
import './FunFact.css';

class FunFact extends React.Component {
    render() {
        return (
            <span className="fun-fact">
                <div>fun fact:</div>
                {this.props.fact}
            </span>
        )
    }
}

export default FunFact;