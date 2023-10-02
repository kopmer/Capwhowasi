import React from "react";

function Button(props) {
    const { label, styleClass, onClick, disabled} = props;
    return (
        <button className={styleClass} onClick={onClick} disabled = {disabled}>{label}</button>
    )
}

function Navbar() {
    return (
        <header>
            <h3>Logo</h3>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">Home</a>
                <a href="/#">Home</a>
                <a href="/#">Home</a>
                <button>

                </button>
            </nav>
            <button>

            </button>
        
        
        </header>

    )
}


export {Button};