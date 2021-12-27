import React from 'react'
import PropTypes from 'prop-types'
import "../App.css";

export default function Navbar(props) {
    return (
        <nav className="navbar" style={{ color: props.textColor, backgroundColor: props.bgColor,borderBottom:`2px solid ${props.textColor}`}}>
            <div className="container-fluid">
                <a className="navbar-brand" href='/' style={{ color: props.textColor, backgroundColor: props.bgColor }}>{props.title}</a>
                <div className="d-flex">
                    <button className="btn btn-primary p-2 mx-1 rounded-circle" style={{ backgroundColor: "#0a1622" }} onClick={(event) => props.changeColorScheme("#0a1622","white",event)}></button>
                    <button className="btn btn-primary p-2 mx-1 rounded-circle" onClick={(event) => props.changeColorScheme("grey","black",event)} style={{ backgroundColor: "grey"}}></button>
                    <button className="btn btn-primary p-2 mx-1 rounded-circle active" style={{ backgroundColor: "white" }} onClick={(event) => props.changeColorScheme("white", "black",event)}></button>
                </div>
            </div>
        </nav>
    )
}

//! This is proptype
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

//! This is default prop

Navbar.defaultProps = {
    title: "TextUtils"
}
