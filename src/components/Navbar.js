import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href='/'>{props.title}</a>;
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
