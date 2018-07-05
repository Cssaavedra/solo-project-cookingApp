import React, { Component } from 'react';
import PropTypes from 'prop-types';

const headerStyle = {
    width: '100%',
    "backgroundColor": 'rgb(77, 148, 255)',
    height: '10%'
}

const letterStyling ={
    "textAlign": "center",
    "verticalAlign": "middle"
}

class Header extends Component {
 render(){
    return (
        <div style ={headerStyle}>
            <h1 style= {letterStyling}>Chris' Recipes</h1>
            <button>Sign Out</button>
        </div>
    );
 }
}

export default Header;