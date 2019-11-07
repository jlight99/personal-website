import React, { Component } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Acknowledgements.css';

class Acknowledgements extends Component {
    render() {
        return (
            <div className="acknowlegements">
                <div>this website was built by ellen huang using create react app</div>
                <div>and is hosted with<FavoriteIcon className="fav-icon" />by github pages</div>
            </div>
        )
    }
}

export default Acknowledgements
