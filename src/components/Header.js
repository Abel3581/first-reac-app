import React from 'react';

const Header = ({title}) => {
    return (
        <header>
            <div className="container">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nostrum eaque.</p>
                </div>
            </div>
        </header>
    );
}

export default Header;






